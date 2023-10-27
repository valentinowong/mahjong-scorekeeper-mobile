import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useGlobalSearchParams, router } from 'expo-router';
import { useReducer } from 'react';
import { AppContext, appReducer, initialState } from "./appState"
import { Button } from '@rneui/base';

export default function Layout() {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const { sessions, games, players } = state; 
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
                        headerTitle: `Game ${params.gameId}`,
                        headerRight: () => (
                            <Button
                                title="Edit"
                                onPress={ () => router.push( { pathname: "/games/[gameId]/edit", params: { gameId: params.gameId }})}
                                buttonStyle={{
                                    backgroundColor: "#17AD3F",
                                }}
                                titleStyle={{fontWeight: 'bold'}}
                            />
                        )
                    }}
                />
            </Stack>
            <SafeAreaView>

            </SafeAreaView>
        </AppContext.Provider>
  );
}