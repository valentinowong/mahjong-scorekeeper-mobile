import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useGlobalSearchParams } from 'expo-router';
import { useReducer } from 'react';
import { AppContext, appReducer, initialState } from "./appState"

export default function Layout() {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const params = useGlobalSearchParams();

    return (
        <AppContext.Provider value={{ state, dispatch }}>
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
            <SafeAreaView>

            </SafeAreaView>
        </AppContext.Provider>
  );
}