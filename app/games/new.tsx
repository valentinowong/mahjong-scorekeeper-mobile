import { Avatar, Button, Card, Text } from "@rneui/base"
import { Modal, Pressable, View } from "react-native"
import { Stack, router, useLocalSearchParams } from "expo-router"
import { useContext } from "react";
import {type, AppContext} from "../appState";
import EditPlayerScore from "../components/EditPlayerScore";

export default function newGameScreen() {
    const params = useLocalSearchParams();

    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, players, selectedGame } = state; 

    console.log( selectedGame )

    function sortScoresByPlayerName(scores, players) {
        return scores.sort((a, b) => {
            const playerAName = players.find((player) => player.id === a.playerId).name;
            const playerBName = players.find((player) => player.id === b.playerId).name;
    
            if (playerAName < playerBName) {
                return -1;
            }
            if (playerAName > playerBName) {
                return 1;
            }
            return 0;
        });
    }

    const PlayersScores = () => {
        const sortedScores = sortScoresByPlayerName(selectedGame.scores, players)

        return sortedScores.map( (score) => {
            return (
                <EditPlayerScore 
                    key={score.playerId} 
                    playerId={score.playerId} 
                    score={score.score} 
                    players={players} 
                />
            )
        })
    }

    const saveGame = () => {
        dispatch(type.saveSelectedGame(selectedGame))
        router.back()
    }

    const cancelNewGame = () => {
        dispatch(type.clearSelectedGame())
        router.back()
    }

    return (
        <View>
            <Stack.Screen
                options={{
                    title: `New Game`,
                    headerRight: () => (
                        <Button
                            title="Save"
                            onPress={ () => saveGame() }
                            titleStyle={{fontWeight: 'bold', color: 'white'}}
                            type="clear"
                        />
                    ),
                    headerLeft: () => (
                        <Button
                            title="Cancel"
                            onPress={ () => cancelNewGame()}
                            titleStyle={{fontWeight: 'bold', color: "white"}}
                            type="clear"
                        />
                    )
                }}
            />
            <Text>This is the New Game Screen for session {params.sessionId}</Text>
            <Card>
                <PlayersScores/>
                <Card.Divider/>
                <Button
                    title="+ Add Player(s)"
                    titleStyle={{fontWeight: "bold", color: "black"}}
                    containerStyle={{
                        margin: 10,
                        borderRadius: 5,
                    }}
                    type="clear"
                    onPress={ () => router.push( { pathname: "/players/add"})}
                />
            </Card>
        </View>
    )
}