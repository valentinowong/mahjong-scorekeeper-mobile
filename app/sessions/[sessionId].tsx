import { Pressable, Text, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { styles } from '../styles';

export default function SessionDetails() {
    const params = useLocalSearchParams()
 
    return (
    <View>
        <Stack.Screen 
            options={{
                title: `Session ${params.sessionId}`
            }}
        />
        <Text>Specific Session {params.sessionId} Page</Text>
        <Link
          href={{
            pathname: "/games/[gameId]",
            params: { gameId: '100' }
          }}
        >
            <Pressable style={styles.button}>
                <Text>Game 100</Text>
            </Pressable>
      </Link>
    </View>
  );
}