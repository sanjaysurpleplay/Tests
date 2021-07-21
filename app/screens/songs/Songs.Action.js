import { ActionTypes, appHasError, isAppLoading, isInternetReachable } from '../../redux/index';
import networkManager from '../../services/networkmanager/NetworkManager';
import { constants } from '../../utils/constants/Constants';

export const getSongsLists = (isRefersh) => {
    return async (dispatch) => {
        dispatch(isAppLoading(isRefersh));
        try {
           
            const response = await networkManager.getRequestHandler(constants.webService.songs.songsList);
            const jsonResponce = response['results'];
            console.log(jsonResponce)
            dispatch(isAppLoading(false));
            dispatch(setSongs(jsonResponce));     
            dispatch(appHasError(null));
           
        } catch (error) {
            console.log('Error In Action Songs.');
            console.log(error);
            dispatch(appHasError(error));
            dispatch(isAppLoading(false));
        }
    };
}


export const setSongs = (payload) => {
    return {
        type: ActionTypes.Songs.SET_SONGS,
        payload: payload,
    }
}