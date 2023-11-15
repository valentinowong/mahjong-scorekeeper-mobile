const add = (payload) => {
    return {
        type: "add",
        payload,
    };
};

const sub = (payload) => {
    return {
        type: "sub",
        payload,
    };
};

const newSession = () => {
    return {
        type: "newSession",
    }
}

const newPlayer = (payload) => {
    return {
        type: "newPlayer",
        payload,
    };
};

const selectPlayer = (payload) => {
    return {
        type: "selectPlayer",
        payload,
    }
}

const newGame = (payload) => {
    return {
        type: "newGame",
        payload,
    }
}

const updateNewGamePlayers = () => {
    return {
        type: "updateNewGamePlayers",
    }
}

const updateNewGame = (payload) => {
    return {
        type: "updateNewGame",
        payload,
    }
}

const saveNewGame = (payload) => {
    return {
        type: "saveNewGame",
        payload,
    }
}

export default {
    add,
    sub,
    newSession,
    newPlayer,
    selectPlayer,
    newGame,
    updateNewGamePlayers,
    updateNewGame,
    saveNewGame,
};