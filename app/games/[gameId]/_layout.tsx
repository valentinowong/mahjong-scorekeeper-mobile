import { Stack, useLocalSearchParams, router } from 'expo-router';
import { Button } from '@rneui/base';

export default function gameLayout() {
    return (
        <Stack>
            <Stack.Screen 
                name="edit"
                options={{
                    presentation:'modal',
                    // headerShown: false,
                    headerRight: () => (
                        <Button
                            title="Save"
                            // onPress={ () => router.push( { pathname: "/games/[gameId]/edit", params: { gameId: params.gameId }})}
                            titleStyle={{fontWeight: 'bold'}}
                            type="clear"
                        />
                    ),
                    headerLeft: () => (
                        <Button
                            title="Cancel"
                            onPress={ () => router.back()}
                            titleStyle={{fontWeight: 'bold', color: "gray"}}
                            type="clear"
                        />
                    )
                }}
            />
        </Stack>
  );
}