export default (state, action) => {
    switch (action.type) {
        case "add":
            return { ...state, count: state.count + action.payload };
            break;

        case "sub":
            return { ...state, count: state.count - action.payload };
            break;
        
        default:
            return state;
            break;
    }
};