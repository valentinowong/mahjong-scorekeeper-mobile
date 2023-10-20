import { Stack, useGlobalSearchParams } from 'expo-router';
import { useReducer } from 'react';
import Bundle  from "../src/appState";
const { AppContext, appReducer, initialState } = Bundle

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
        </AppContext.Provider>
  );
}