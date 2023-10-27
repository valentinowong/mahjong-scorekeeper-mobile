import { Text } from 'react-native';
import { Card } from '@rneui/base';
import { sessionPlayers, playerSessionScore } from '../appState/logic';

const SessionCard = ({id}) => {

    const PlayersScores = () => {
        return sessionPlayers(id).map( (player) => {
            return <Text key={player.id}>{player.name}: {playerSessionScore(player.id, id)}</Text>
        })
    }
    
    return (
        <Card>
            <Card.Title>
                Session {id}
            </Card.Title>
            <Card.Divider/>
            <PlayersScores/>   
        </Card>
    )
}

export default SessionCard;