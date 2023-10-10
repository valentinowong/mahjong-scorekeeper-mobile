import { Pressable, Text, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { styles } from '../../styles';

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
            <Link
                href={{
                pathname: "/games/[gameId]/edit",
                params: { gameId: '100' }
                }}>
                    <Pressable style={styles.button}>
                        <Text>Edit Game</Text>
                    </Pressable>
            </Link>
        </View>
  );
}