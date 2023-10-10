import { Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function edit() {
    const params = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen
                options={{
                    title: `Edit Game ${params.gameId}`,
                }}
            />
            <Text>Edit Game Page</Text>
        </View>
  );
}