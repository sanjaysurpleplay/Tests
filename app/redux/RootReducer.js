import { combineReducers } from 'redux';
import { globalReducer } from './GlobalReducer';
import { songsReducer } from '../screens/songs/Songs.Reducer';
export default combineReducers({
    globalReducer,
    songsReducer
});