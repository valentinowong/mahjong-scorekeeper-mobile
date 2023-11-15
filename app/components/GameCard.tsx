import { Text } from 'react-native';
import { Card } from '@rneui/base';
import {type, AppContext} from "../appState";
import { useContext } from 'react';
import { playerName } from '../appState/logic';

const GameCard = ({id}) => {
    
    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, players } = state; 
    
    const PlayersScores = () => {
        const game = games.find((game) => game.id === id)
        return game.scores.map( (score) => {
            return <Text key={score.playerId}>{playerName(score.playerId, players)}: {score.score}</Text>
        })
    }
    
    return (
        <Card>
            <Card.Title>
                Game {id}
            </Card.Title>
            <Card.Divider/>  
            <PlayersScores/>       
        </Card>
    )
}

export default GameCard;