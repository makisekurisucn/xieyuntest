const initialState = {
    month: [],
    week: []
};
const list = (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_UPDATE':
            return Object.assign({}, state, { month: action.data.month, week: action.data.week });
        default:
            return state;
    }
}
export default list;