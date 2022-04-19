import PageActionTypes from "./page.types";


const INITIAL_STATE = {
    hidden3: true
};
const pageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PageActionTypes.TOGGLE_PAGE_HIDDEN:
            return {
                ...state,
                hidden3: !state.hidden3
            }
        default:
            return state;
    }
};
export default pageReducer;