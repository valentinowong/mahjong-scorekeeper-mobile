import { Pressable, Text, View } from 'react-native';
import { Link, Stack, useLocalSearchParams, router } from 'expo-router';
import { styles } from '../../styles';
import {type, AppContext} from "../../appState";
import { useContext } from 'react';
import { Button, Card } from '@rneui/base';
import PlayerScore from '../../components/PlayerScore';

export default function gameDetailsScreen() {    
    const params = useLocalSearchParams();

    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, players } = state; 

    const game = games.find( (game) => game.id === Number(params.gameId));
    
    const PlayersScores = () => {
        return game.scores.map( (score) => {
            return (
              <PlayerScore key={score.playerId} playerId={score.playerId} score={score.score}/>
            )
        })
      }

    return (
        <View>
            <Stack.Screen
                options={{
                    title: `Game ${params.gameId}`,
                    headerShown: false,
                }}
            />    
            <Card>
                <PlayersScores/>
            </Card>
        </View>
  );
}