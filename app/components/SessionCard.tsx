import { Text } from 'react-native';
import { Card } from '@rneui/base';
import { sessionPlayers, playerSessionScore } from '../appState/logic';

const SessionCard = ({id}) => {

    const PlayersScores = () => {
        const sortedPlayers = sessionPlayers(id).sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
        })
        
        return sortedPlayers.map( (player) => {
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