import { Avatar, Button, Card, Text } from '@rneui/base';
import {type, AppContext} from "../appState";
import { useContext } from 'react';
import { playerName, playerInitials } from '../appState/logic';
import { View } from 'react-native';

const PlayerScore = ({ playerId, score, editable }) => {
    
    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, players } = state;

    

    return (
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10}}>
            <Avatar 
                size={48}
                rounded
                title={playerInitials(playerId, players)}
                containerStyle={{backgroundColor: "gray"}}
            />
            <Text h4>{playerName(playerId, players)}</Text>
            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                {
                    editable ? 
                        <Button 
                            title="-"
                            buttonStyle={{borderRadius: 12, backgroundColor: "white", borderColor: "gray", borderWidth: 1}}
                            titleStyle={{ fontWeight: 'bold', color: "gray"}}
                        /> : 
                        null
                }
                <Text h4 style={{paddingHorizontal: 10}}>{score}</Text>
                {
                    editable ? 
                        <Button 
                            title="+"
                            buttonStyle={{borderRadius: 12, backgroundColor: "white", borderColor: "gray", borderWidth: 1}}
                            titleStyle={{ fontWeight: 'bold', color: "gray"}}
                        /> : 
                        null
                }
            </View>
        </View>
    )
}

export default PlayerScore;