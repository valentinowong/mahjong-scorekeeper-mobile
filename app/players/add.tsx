import { useState, useCallback } from "react";
import { View } from "react-native";
import { Button, CheckBox, Text, ListItem } from "@rneui/base"
import { router, Stack, useFocusEffect } from "expo-router";
import { useContext } from "react";
import {type, AppContext} from "../appState";
import { ListItemCheckBox } from "@rneui/base/dist/ListItem/ListItem.CheckBox";
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title";

export default function addPlayerScreen() {
    
    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, players, selectedPlayers, selectedGame } = state; 
    
    console.log(players)
    console.log(selectedPlayers)

    const selectPlayer = (player) => {
        dispatch(type.selectPlayer(player))
    }

    const PlayersList = () => {
        return players.map( (player) => {
            return (
                <ListItem bottomDivider key={player.id}>
                    <ListItemCheckBox
                        checked={selectedPlayers.includes(player)}
                        // iconType="material-community"
                        // checkedIcon="checkbox-marked"
                        // uncheckedIcon="checkbox-blank-outline"
                        onPress={() => selectPlayer(player)}
                    />
                    <ListItemTitle>{player.name}</ListItemTitle>
                </ListItem>
            )
        })
    }

    const addPlayersToGame = () => {
        const updatedScores = selectedGame.scores.filter( (score) => selectedPlayers.some( (player) => player.id === score.playerId))
            selectedPlayers.forEach( (player) => {
                if (!selectedGame.scores.some( (score) => score.playerId === player.id)) {
                    updatedScores.push({ playerId: player.id, score: 0}) 
                }
            })
        dispatch(type.updateSelectedGame({
            ...selectedGame,
            scores: updatedScores,
        }));
        router.back()
    }

    const cancelAddPlayers = () => {
        dispatch(type.clearSelectedPlayers())
        router.back()
    }

    return (
        <View>
            <Stack.Screen
                options={{
                    title: `Add Player(s)`,
                    headerRight: () => (
                        <Button
                            title="Save"
                            onPress={ () => addPlayersToGame()}
                            titleStyle={{fontWeight: 'bold', color: 'white'}}
                            type="clear"
                        />
                    ),
                    headerLeft: () => (
                        <Button
                            title="Cancel"
                            onPress={ () => cancelAddPlayers()}
                            titleStyle={{fontWeight: 'bold', color: "white"}}
                            type="clear"
                        />
                    )
                }}
            />
            <Text>This is the Add Players Screen</Text>
            <PlayersList/>
            <ListItem 
                onPress={ () => router.push( { pathname: "/players/new"})}
                bottomDivider
            >
                <Text h2>+</Text>
                <ListItemTitle
                    
                >
                    Create New Player
                </ListItemTitle>
            </ListItem>
        </View>
    );
}