import { Stack, useGlobalSearchParams } from 'expo-router';

export default function Layout() {
    const params = useGlobalSearchParams();

    return (
        <Stack 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#17AD3F',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >  
            <Stack.Screen 
                name="games/[gameId]"
                options={{
                    headerTitle: `Game ${params.gameId}`
                }}
            />
        </Stack>
  );
}