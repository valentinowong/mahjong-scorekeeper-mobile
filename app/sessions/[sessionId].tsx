import { Pressable, Text, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { styles } from '../styles';
import { Button } from '@rneui/base';

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
          asChild
        >
            <Button size="md">Game 100</Button>
      </Link>
    </View>
  );
}