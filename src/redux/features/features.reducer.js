import FeaturesActionTypes from './features.types';

const INITIAL_STATE = {
    hidden5: true
};
const featuresReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FeaturesActionTypes.TOGGLE_FEATURES_HIDDEN:
            return {
                ...state,
                hidden5: !state.hidden5
            }
        default:
            return state;
    }
};
export default featuresReducer;