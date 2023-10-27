import { View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Card, Text } from '@rneui/base';
import {type, AppContext} from "../../appState";
import { useContext } from 'react';
import PlayerScore from '../../components/PlayerScore';

export default function editGameScreen() {
    const params = useLocalSearchParams();

    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, players } = state; 

    const game = games.find( (game) => game.id === Number(params.gameId));

    const PlayersScores = () => {
        return game.scores.map( (score) => {
            return (
              <PlayerScore key={score.playerId} playerId={score.playerId} score={score.score} editable={true}/>
            )
        })
      }

    return (
        <View>
            <Stack.Screen
                options={{
                    title: `Edit Game ${params.gameId}`,
                }}
            />
            <Card>
                <PlayersScores/>
            </Card>
        </View>
  );
}