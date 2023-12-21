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
    
    function sortScoresByPlayerName(scores, players) {
        return scores.sort((a, b) => {
            const playerAName = players.find((player) => player.id === a.playerId).name;
            const playerBName = players.find((player) => player.id === b.playerId).name;
    
            if (playerAName < playerBName) {
                return -1;
            }
            if (playerAName > playerBName) {
                return 1;
            }
            return 0;
        });
    }
    
    const PlayersScores = () => {
        const sortedScores = sortScoresByPlayerName(game.scores, players)
        
        return sortedScores.map( (score) => {
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