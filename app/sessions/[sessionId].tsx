import { Pressable, Text, View } from 'react-native';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { Button } from '@rneui/base';
import GameCard from '../components/GameCard';
import { ScrollView } from 'react-native-gesture-handler';
import { sessionGames } from '../appState/logic';

export default function SessionDetails() {
    const params = useLocalSearchParams();

    const GameCards = () => {
      return sessionGames(Number(params.sessionId)).map( (game) => {
        return (
            <GameCard 
              key={game.id} 
              id={game.id}

            />
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
          <GameCards/>
          <Button 
            size="md" 
            onPress={ () => router.push( { pathname: "/games/[gameId]", params: { gameId: '100' }})}
          >
            Game 100
          </Button>
        </ScrollView>
    </View>
  );
}