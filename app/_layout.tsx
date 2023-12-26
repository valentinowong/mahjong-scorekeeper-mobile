import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useGlobalSearchParams, router } from 'expo-router';
import { useReducer } from 'react';
import { AppContext, appReducer, initialState, type } from "./appState"
import { Button } from '@rneui/base';

export default function Layout() {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const { sessions, games, players, selectedGame } = state; 
    const params = useGlobalSearchParams();

    const editGame = () => {
        const game = games.find( (game) => game.id === Number(params.gameId))
        
        dispatch(type.updateSelectedGame(game))
        router.push( { pathname: "games/edit/[gameId]", params: { gameId: params.gameId }})
    }

    const saveGame = () => {
        dispatch(type.saveSelectedGame(selectedGame))
        router.back()
    }

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
                    // headerBackImageSource: require('../assets/back-icon.png'),
                }}
            >  
                <Stack.Screen 
                    name="games/[gameId]"
                    options={{
                        headerTitle: `Game ${params.gameId}`,
                        headerRight: () => (
                            <Button
                                title="Edit"
                                onPress={ () => editGame() }
                                buttonStyle={{
                                    backgroundColor: "#17AD3F",
                                }}
                                titleStyle={{fontWeight: 'bold'}}
                            />
                        )
                    }}
                />
                <Stack.Screen 
                    name="games/edit/[gameId]"
                    options={{
                        headerTitle: `Edit Game ${params.gameId}`,
                        headerRight: () => (
                            <Button
                                title="Save"
                                onPress={ () => saveGame() }
                                buttonStyle={{
                                    backgroundColor: "#17AD3F",
                                }}
                                titleStyle={{fontWeight: 'bold'}}
                            />
                        ),
                        headerLeft: () => (
                            <Button
                                title="Cancel"
                                onPress={ () => router.back() }
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