import { useContext } from 'react';
import AppContext from "./appContext";

const sessionGames = (sessionId) => {
    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, players } = state; 

    let arr = [];
    games.forEach( (game) => {
        if (game.sessionId === sessionId) {
            arr.push(game)
        }
    })
    return arr;
}

const sessionPlayers = (sessionId) => {
    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, players } = state; 
    
    let playerIds = [];
    sessionGames(sessionId).forEach( (game) => {
        game.scores.forEach( (score)=> {
            if (!playerIds.includes(score.playerId)) {
                playerIds.push(score.playerId)
            }
        })
    })
    return playerIds.map((playerId) => {
        return players.find( (player) => player.id === playerId )
    })
}

const playerSessionScore = (playerId, sessionId) => {
    const { state, dispatch } = useContext(AppContext);
    const { sessions, games, players } = state; 
    
    let totalScore = 0;
    games.forEach( (game) => {
      if (game.sessionId === sessionId ) {
        game.scores.forEach( (score) => {
          if (score.playerId === playerId) {
            totalScore += score.score
          }
        })
      }
    })
    return totalScore;
}

const playerName = ( playerId, players ) => {
    const player = players.find( (player) => player.id === playerId);
    return player.name;
}

const playerInitials = ( playerId, players ) => {
    const words = playerName( playerId, players ).split(' ');
    return words.map( (word) => word[0]).join('');
}

export { sessionGames, sessionPlayers, playerSessionScore, playerName, playerInitials };