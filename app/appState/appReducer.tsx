

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
        
        case "clearSelectedPlayers":
            return {
                ...state,
                selectedPlayers: [],
            }
            break;

        case "updateSelectedGame":
            return {
                ...state,
                selectedGame: {
                    ...state.selectedGame,
                    ...action.payload,
                }
            }
            break;

        case "saveSelectedGame":
            let updatedGames = []
            if (state.games.some( (game) => game.id === state.selectedGame.id)) {
                updatedGames = state.games.map( (game) => {
                    if (game.id === state.selectedGame.id) {
                        return state.selectedGame
                    } else {
                        return game
                    }
                })
            } else {
                updatedGames = [
                    ...state.games,
                    state.selectedGame,
                ]
            }
            return {
                ...state,
                games: updatedGames,
                selectedGame: {},
                selectedPlayers: [],
            }
            
        case "clearSelectedGame":
            return {
                ...state,
                selectedGame: {},
                selectedPlayers: [],
            }
            break;

        default:
            return state;
            break;
    }
};