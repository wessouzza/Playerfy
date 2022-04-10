export const initialState = {
    user: null,
    playlists: [],
    discover_weekly: null,
    recently_played: null,
    search_track: null,
    top_artists: null,
    playing: false,
    item: null,
    
}

const reducer = (state, action) =>{
    console.log(action)

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }; 
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists   
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        case 'SET_SEARCH':
            return {
                ...state,
                search_track: action.search_track,
            }
        case 'SET_RECENTLY_PLAYED':
            return {
                ...state,
                recently_played: action.recently_played,
            }
        default:
            return state
    }
}

export default reducer;
