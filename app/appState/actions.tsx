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

const clearSelectedPlayers = () => {
    return {
        type: "clearSelectedPlayers",
    }
}

const updateSelectedGame = (payload) => {
    return {
        type: "updateSelectedGame",
        payload,
    }
}

const saveSelectedGame = (payload) => {
    return {
        type: "saveSelectedGame",
        payload,
    }
}

const clearSelectedGame = () => {
    return {
        type: "clearSelectedGame",
    }
}

export default {
    add,
    sub,
    newSession,
    newPlayer,
    selectPlayer,
    clearSelectedPlayers,
    updateSelectedGame,
    saveSelectedGame,
    clearSelectedGame,
};