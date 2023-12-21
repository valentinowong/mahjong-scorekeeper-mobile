import { Modal, TextInput, View } from 'react-native';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { Button, Card, Input, Text } from '@rneui/base';
import {type, AppContext} from "../../appState";
import { useState, useContext, useRef, useEffect } from 'react';
import EditPlayerScore from '../../components/EditPlayerScore';
import { text } from 'stream/consumers';

export default function editGameScreen() {
    const params = useLocalSearchParams();

    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, selectedGame, players } = state; 

    console.log(selectedGame)

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

    const addPlayers = () => {
        const game = games.find( (game) => game.id === Number(params.gameId));
        game.scores.forEach( (score) => {
            const player = players.find( (player) => player.id === score.playerId)
            dispatch(type.selectPlayer(player))
        })
        router.push( { pathname: "/players/add"})
    }

    const selectedGameScoresTotal = () => {
        const scores = selectedGame.scores
        let total = 0
        scores.forEach( (score) => {
            total += score.score
        })
        return total
    }

    return (
        <View>
            <Text>This is the Edit Game Screen for Game {params.gameId}</Text>
            <Card>
                <PlayersScores/>
                <Card.Divider/>
                
                <Text h4 style={{paddingHorizontal: 10, paddingBottom: 10, textAlign: 'center',}}>Score Total: { selectedGameScoresTotal() }</Text>
                <Card.Divider/>
                <Button
                    title="+ Add Player(s)"
                    titleStyle={{fontWeight: "bold", color: "black"}}
                    containerStyle={{
                        margin: 10,
                        borderRadius: 5,
                    }}
                    type="clear"
                    onPress={ () => addPlayers()}
                />
            </Card>
        </View>
  );
}