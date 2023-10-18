import { Pressable, Text, View } from 'react-native';
import { Link, Stack, useLocalSearchParams, router } from 'expo-router';
import { styles } from '../../styles';
import { Button } from '@rneui/base';

export default function gameDetailsScreen() {
    const params = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen
                options={{
                    title: `Game ${params.gameId}`,
                    headerShown: false,
                }}
            />    
            <Text>Specific Game {params.gameId} Page</Text>
            <Button 
              size="md" 
              onPress={ () => router.push( { pathname: "/games/[gameId]/edit", params: { gameId: '100' }})}
            >
                Edit Game
            </Button>
        </View>
  );
}