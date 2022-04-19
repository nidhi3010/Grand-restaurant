import MenuActionTypes from './menu.types';


const INITIAL_STATE = {
    hidden2: true
};
const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MenuActionTypes.TOGGLE_MENU_HIDDEN:
            return {
                ...state,
                hidden2: !state.hidden2
            }
        default:
            return state;
    }
};
export default menuReducer;