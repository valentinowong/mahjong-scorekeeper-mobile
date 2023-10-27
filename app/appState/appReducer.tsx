

export default (state, action) => {
    switch (action.type) {
        case "add":
            return { ...state, count: state.count + action.payload };
            break;

        case "sub":
            return { ...state, count: state.count - action.payload };
            break;
        
        case "editable":
            const game = state.games.find( (game) => game.id === action.payload.id)
            const newGames = state.games.map( (game) => {
                if (game.id === action.payload.id) {
                    return {
                        
                    }
                } else {
                    return game
                }
            })
            return {
                ...state, 
                games: newGames
            }
        default:
            return state;
            break;
    }
};