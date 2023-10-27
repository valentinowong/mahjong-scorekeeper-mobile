import { Pressable, Text, View } from 'react-native';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { Button, Card } from '@rneui/base';
import GameCard from '../components/GameCard';
import PlayersCard from '../components/PlayerScore';
import { ScrollView } from 'react-native-gesture-handler';
import { sessionGames, sessionPlayers, playerSessionScore } from '../appState/logic';
import PlayerScore from '../components/PlayerScore';

export default function SessionDetails() {
  const params = useLocalSearchParams();  
    
  const PlayersScores = () => {
    return sessionPlayers(Number(params.sessionId)).map( (player) => {
        return (
          <PlayerScore key={player.id} playerId={player.id} score={playerSessionScore(player.id,Number(params.sessionId))}/>
        )
    })
  }

    const GameCards = () => {
      return sessionGames(Number(params.sessionId)).map( (game) => {
        return (
          <Pressable key={game.id} onPress={ () => router.push( { pathname: "/games/[gameId]", params: { gameId: game.id }})}>
            <GameCard 
              key={game.id} 
              id={game.id}
            />
          </Pressable>
        )
      })
    }

    return (
    <View>
        <Stack.Screen 
            options={{
                title: `Session ${params.sessionId}`
            }}
        />
        <ScrollView>
          <Card>
            <PlayersScores/>
          </Card>
          <GameCards/>
        </ScrollView>
    </View>
  );
}