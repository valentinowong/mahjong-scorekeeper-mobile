import { useState } from "react"
import { View } from "react-native"
import { Button, Input, Text } from "@rneui/base"
import { router, Stack } from "expo-router"
import { useContext } from "react";
import {type, AppContext} from "../appState";

export default function newPlayerScreen() {
    
    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, players } = state; 

    const [player, setPlayer] = useState({
        id: players.length + 1,
        name: "",
    })
    
    console.log(players)
    console.log(player)

    const createNewPlayer = () => {
        dispatch(type.newPlayer(player));
        dispatch(type.selectPlayer(player));
        router.back();
    }

    return (
        <View>
            <Stack.Screen
                options={{
                    title: `Create New Player`,
                    headerRight: () => (
                        <Button
                            title="Save"
                            onPress={ () => createNewPlayer()}
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
            <Text>This is the New Player Screen</Text>
            {
                players.some( (person) => person.name === player.name) ?
                <Text
                    style={{color: "red", flexDirection: "row", justifyContent: "center", alignItems: "center"}}
                >
                    A Player With This Name Already Exists
                </Text> :
                <></>
            }
            <Input
                placeholder="Player Name"
                onChangeText={(value) => setPlayer({...player, name: value})}
            />
        </View>
    )
}