import { Text } from 'react-native';
import { Card } from '@rneui/base';
import {type, AppContext} from "../appState";
import { useContext } from 'react';
import { playerName } from '../appState/logic';

const GameCard = ({id}) => {
    
    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, players } = state; 
    
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
        const game = games.find((game) => game.id === id)
        
        const sortedScores = sortScoresByPlayerName(game.scores, players)
        
        return sortedScores.map( (score) => {
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