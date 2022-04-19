import HomeActionTypes from './home.types';


const INITIAL_STATE = {
    hidden: true
};
const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HomeActionTypes.TOGGLE_HOME_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
};
export default homeReducer;