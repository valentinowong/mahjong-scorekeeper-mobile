import { Modal, TextInput, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Button, Card, Input, Text } from '@rneui/base';
import {type, AppContext} from "../../appState";
import { useState, useContext, useRef, useEffect } from 'react';
import EditPlayerScore from '../../components/EditPlayerScore';

export default function editGameScreen() {
    const params = useLocalSearchParams();

    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, selectedGame, players } = state; 

    // const [game, setGame] = useState(
    //     games.some( (game) => game.id === Number(params.gameId)) ? 
    //     games.find( (game) => game.id === Number(params.gameId)) :
    //     {
    //         id: games.length,
    //         sessionId: params.sessionId,
    //         scores: [],
    //     },
    // )

    // const [players, setPlayers] = useState(
    //     state.players.map( (player) => {
    //         return {
    //             ...player,
    //             editable: false,
    //         }
    //     }) 
    // )

    // const [newPlayer, setNewPlayer] = useState(false)

    console.log(selectedGame)

    // const changeScore = (playerId, change) => {
    //     const updatedScores = game.scores.map( (score => {
    //         if (score.playerId === playerId) {
    //             return {
    //                 playerId: playerId,
    //                 score: score.score + change,
    //             }
    //         } else {
    //             return score
    //         }
    //     }))
    //     setGame({
    //         ...game,
    //         scores: updatedScores,
    //     })
    // }

    // const addNewPlayer = () => {

    // }
    
    // const addPlayer = (name) => {
    //     setGame({
    //         ...game,
    //         scores: [
    //             ...game.scores,
    //             {
    //                 playerId: players.length + 1,
    //                 score: 0,
    //             }
    //         ],
    //     });
    //     setPlayers([
    //         ...players,
    //         {
    //             id: players.length + 1,
    //             name: name,
    //             editable: false,
    //         }
    //     ]);
    //     setNewPlayer(!newPlayer);
    // }

    // const findPlayer = (playerId, players) => {
    //     const player = players.find( (player) => player.id === playerId);
    //     return player
    // }

    // const editablePlayerName = (playerId) => {
    //     const updatedPlayers = players.map( (player) => {
    //         if (player.id === playerId) {
    //             return {
    //                 id: player.id,
    //                 name: player.name,
    //                 editable: !player.editable,
    //             }
    //         } else {
    //             return player
    //         }
    //     })
    //     setPlayers([
    //         ...updatedPlayers,
    //     ])
    // }

    const saveGame = () => {

    }

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

    // const PlayersScores = () => {
    //     return game.scores.map( (score) => {
    //         return (
    //             <EditPlayerScore 
    //                 key={score.playerId} 
    //                 playerId={score.playerId} 
    //                 score={score.score} 
    //                 players={players} 
    //                 changeScore={changeScore} 
    //                 playerNameEditable={findPlayer(score.playerId, players).editable} 
    //                 editablePlayerName={editablePlayerName} 
    //                 editPlayerName={editPlayerName}
    //             />
    //         )
    //     })
    // }

    return (
        <View>
            <Stack.Screen
                options={{
                    title: `Edit Game ${params.gameId}`,
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
                            onPress={ () => router.back()}
                            titleStyle={{fontWeight: 'bold', color: "white"}}
                            type="clear"
                        />
                    )
                }}
            />
            <Text>This is the Edit Game Screen for Game {params.gameId}</Text>
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
        
        // <View>
        //     <Stack.Screen
        //         options={{
        //             title: `Edit Game ${params.gameId}`,
        //         }}
        //     />
        //     <Card>
        //         <PlayersScores/>
        //         {
        //             newPlayer ?
        //             <TextInput onSubmitEditing={(event) => addPlayer(event.nativeEvent.text)} /> :
        //             <></>
        //         }
        //     </Card>

        //     {/* <Button
        //         title="Add Player"
        //         titleStyle={{fontWeight: "bold"}}
        //         containerStyle={{
        //             margin: 10,
        //             borderRadius: 5,
        //           }}
        //         onPress={ () => setNewPlayer(!newPlayer)}
        //     />
        //     <Button
        //         title="Delete Game"
        //         color="red"
        //         titleStyle={{fontWeight: "bold"}}
        //         containerStyle={{
        //             margin: 10,
        //             borderRadius: 5,
        //           }}
        //     /> */}
        // </View>
  );
}