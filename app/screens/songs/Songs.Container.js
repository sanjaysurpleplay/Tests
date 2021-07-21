import { connect } from 'react-redux';
import { compose } from 'redux';
import SongsScreen from './SongsScreen';
import { getSongsLists } from './Songs.Action';
import withLoader from '../../loader/withLoader';

const mapStateToProps = state => {
    return {
        songsData: state.songsReducer.songsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSongsLists: (isRefersh) => dispatch(getSongsLists(isRefersh)),
    }
}

export default compose(
        connect(mapStateToProps, mapDispatchToProps),
        withLoader)
    (SongsScreen);