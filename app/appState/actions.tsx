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

export default {
    add,
    sub,
};