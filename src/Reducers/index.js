const songsReducer = () => {
    return [
        { title: 'No scrubs', duration: '4:05' },
        { title: 'Lose yourself', duration: '3:16'},
        { title: 'All star', duration: '2:30'},
        { title: 'Bittersweet Symphony', duration: '5:03'}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}