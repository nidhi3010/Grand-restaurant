import NewsActionTypes from "./news.types";

const INITIAL_STATE = {
    hidden4: true
};
const newsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NewsActionTypes.TOGGLE_NEWS_HIDDEN:
            return {
                ...state,
                hidden4: !state.hidden4
            }
        default:
            return state;
    }
};
export default newsReducer;