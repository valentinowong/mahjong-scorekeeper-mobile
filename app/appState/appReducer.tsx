

export default (state, action) => {
    switch (action.type) {
        case "add":
            return { ...state, count: state.count + action.payload };
            break;

        case "sub":
            return { ...state, count: state.count - action.payload };
            break;

        case "newSession":
            return { ...state, sessions: [...state.sessions, { id: state.sessions.length + 1}]};
            break;

        case "newPlayer":
            return { ...state, players: [...state.players, action.payload ]}
            break;

        case "selectPlayer":
            if (state.selectedPlayers.includes(action.payload)) {
                return {
                    ...state, 
                    selectedPlayers: [
                        ...state.selectedPlayers.filter( (player) => player.id != action.payload.id)
                    ]
                }
            } else {
                return {
                    ...state,
                    selectedPlayers: [
                        ...state.selectedPlayers,
                        action.payload
                    ]
                }
            }
            break;
        
        case "newGame":
            return {
                ...state,
                newGame: action.payload
            }
            break;

        case "updateNewGamePlayers":
            const updatedScores = state.newGame.scores.filter( (score) => state.selectedPlayers.some( (player) => player.id === score.playerId))
            state.selectedPlayers.forEach( (player) => {
                if (!state.newGame.scores.some( (score) => score.playerId === player.id)) {
                    updatedScores.push({ playerId: player.id, score: 0}) 
                }
            })
            return {
                ...state,
                newGame: {
                    ...state.newGame,
                    scores: updatedScores,
                }
            }
            break;

        case "updateNewGame":
            return {
                ...state,
                newGame: {
                    ...state.newGame,
                    ...action.payload,
                }
            }
            break;

        case "saveNewGame":
            return {
                ...state,
                games: [
                    ...state.games,
                    state.newGame,
                ],
                newGame: {},
                selectedPlayers: [],
            }
            
        default:
            return state;
            break;
    }
};