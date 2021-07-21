import ActionTypes from '../../redux/ActionTypes';

const initialState = {
    songsData: null,
};
export let songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.Songs.SET_SONGS:
            return {
                ...state,
                songsData: action.payload
            };
        default:
            return state;
    }

}