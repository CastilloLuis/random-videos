function videos(state = {}, action) {
    switch(action.type) {
        case 'SET_CATEGORIES_LIST': {
            return {...state, ...action.payload};
        }
        case 'SET_SUGGESTIONS_LIST': {
            return {...state, ...action.payload};
        }
        case 'SET_SELECTED_MOVIE': {
            return {...state, selectedMovie: action.payload.movie}
        }
        case 'SET_LOADING': {
            return {...state, loading: action.payload.loading}
        }
        default: 
            return state;
    }
};

export default videos;

