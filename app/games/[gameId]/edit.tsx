import { Modal, TextInput, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Button, Card, Input, Text } from '@rneui/base';
import {type, AppContext} from "../../appState";
import { useState, useContext, useRef, useEffect } from 'react';
import EditPlayerScore from '../../components/EditPlayerScore';
import { text } from 'stream/consumers';

export default function editGameScreen() {
    const params = useLocalSearchParams();

    const { state, dispatch } = useContext(AppContext);
    const { sessions, games } = state; 

    const [game, setGame] = useState(
        games.some( (game) => game.id === Number(params.gameId)) ? 
        games.find( (game) => game.id === Number(params.gameId)) :
        {
            id: games.length,
            sessionId: params.sessionId,
            scores: [],
        },
    )

    const [players, setPlayers] = useState(
        state.players.map( (player) => {
            return {
                ...player,
                editable: false,
            }
        }) 
    )

    const [newPlayer, setNewPlayer] = useState(false)

    console.log(game, players)

    const changeScore = (playerId, change) => {
        const updatedScores = game.scores.map( (score => {
            if (score.playerId === playerId) {
                return {
                    playerId: playerId,
                    score: score.score + change,
                }
            } else {
                return score
            }
        }))
        setGame({
            ...game,
            scores: updatedScores,
        })
    }

    const addNewPlayer = () => {

    }
    
    const addPlayer = (name) => {
        setGame({
            ...game,
            scores: [
                ...game.scores,
                {
                    playerId: players.length + 1,
                    score: 0,
                }
            ],
        });
        setPlayers([
            ...players,
            {
                id: players.length + 1,
                name: name,
                editable: false,
            }
        ]);
        setNewPlayer(!newPlayer);
    }

    const findPlayer = (playerId, players) => {
        const player = players.find( (player) => player.id === playerId);
        return player
    }

    const editablePlayerName = (playerId) => {
        const updatedPlayers = players.map( (player) => {
            if (player.id === playerId) {
                return {
                    id: player.id,
                    name: player.name,
                    editable: !player.editable,
                }
            } else {
                return player
            }
        })
        setPlayers([
            ...updatedPlayers,
        ])
    }

    const editPlayerName = (playerId, value) => {
        const updatedPlayers = players.map( (player) => {
            if (player.id === playerId) {
                return {
                    id: player.id,
                    name: value,
                    editable: player.editable,
                }
            } else {
                return player
            }
        })
        setPlayers([
            ...updatedPlayers,
        ])
    }

    const saveGame = () => {

    }

    const PlayersScores = () => {
        return game.scores.map( (score) => {
            return (
                <EditPlayerScore 
                    key={score.playerId} 
                    playerId={score.playerId} 
                    score={score.score} 
                    players={players} 
                    changeScore={changeScore} 
                    playerNameEditable={findPlayer(score.playerId, players).editable} 
                    editablePlayerName={editablePlayerName} 
                    editPlayerName={editPlayerName}
                />
            )
        })
    }

    return (
        <View>
            <Stack.Screen
                options={{
                    title: `Edit Game ${params.gameId}`,
                }}
            />
            <Card>
                <PlayersScores/>
                {
                    newPlayer ?
                    <TextInput onSubmitEditing={(event) => addPlayer(event.nativeEvent.text)} /> :
                    <></>
                }
            </Card>
            <Button
                title="Add Player"
                titleStyle={{fontWeight: "bold"}}
                containerStyle={{
                    margin: 10,
                    borderRadius: 5,
                  }}
                onPress={ () => setNewPlayer(!newPlayer)}
            />
            <Button
                title="Delete Game"
                color="red"
                titleStyle={{fontWeight: "bold"}}
                containerStyle={{
                    margin: 10,
                    borderRadius: 5,
                  }}
            />
        </View>
  );
}