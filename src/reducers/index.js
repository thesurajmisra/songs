import { combineReducers} from 'redux'

const songsReducers = () => {
    return[
        {title:'Closer',duration:'4:05'},
        {title:'Faded',duration:'3:05'},
        {title:'Marcarena',duration:'2:57'},
        {title:'All Star',duration:'4:35'}
    ]
}


const selectedSongReducer = (selectedSong = null,action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}


export default combineReducers({
    songs:songsReducers,
    selectedSong:selectedSongReducer
})