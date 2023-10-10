import { Stack, useLocalSearchParams } from 'expo-router';

export default function gameLayout() {
    return (
        <Stack>
            <Stack.Screen 
                name="edit"
                options={{
                    presentation:'modal',
                }}
            />
        </Stack>
  );
}