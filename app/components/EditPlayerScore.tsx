import { Avatar, Button, Input, Text } from '@rneui/base';
import { playerName, playerInitials } from '../appState/logic';
import { View } from 'react-native';
import { useContext } from "react";
import {type, AppContext} from "../appState";

const EditPlayerScore = ({ playerId, score, players }) => {
    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, newGame } = state; 

    const changeScore = (playerId, change) => {
        const updatedScores = newGame.scores.map( (score => {
            if (score.playerId === playerId) {
                return {
                    playerId: playerId,
                    score: score.score + change,
                }
            } else {
                return score
            }
        }))
        dispatch(type.updateNewGame({
            ...newGame,
            scores: updatedScores,
        }));
    }

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
            <Button 
                title="-"
                buttonStyle={{borderRadius: 12, backgroundColor: "white", borderColor: "gray", borderWidth: 1}}
                titleStyle={{ fontWeight: 'bold', color: "gray"}}
                onPress={ () => changeScore(playerId, -1) }
            />
            <Text h4 style={{paddingHorizontal: 10}}>{score}</Text>
            <Button 
                title="+"
                buttonStyle={{borderRadius: 12, backgroundColor: "white", borderColor: "gray", borderWidth: 1}}
                titleStyle={{ fontWeight: 'bold', color: "gray"}}
                onPress={ () => changeScore(playerId, +1) }
            />
            </View>
        </View>
    )
}

export default EditPlayerScore;