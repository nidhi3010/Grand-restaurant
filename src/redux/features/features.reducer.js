import FeaturesActionTypes from './features.types';

const INITIAL_STATE = {
    hidden: true
};
const featuresReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FeaturesActionTypes.TOGGLE_FEATURES_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
};
export default featuresReducer;