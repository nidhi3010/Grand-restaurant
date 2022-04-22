import ReservActionTypes from "./reserv.types";

const INITIAL_STATE = {
    hidden6: true
};
const reservReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ReservActionTypes.TOGGLE_RESERV_HIDDEN:
            return {
                ...state,
                hidden6: !state.hidden6
            }
        default:
            return state;
    }
};
export default reservReducer;