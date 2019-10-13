import { selectManga, select_manga } from '../actions/mangaActions';

const initState = {
    selectedManga: '',
}

const manga = (state = initState, action ) => {
    switch (action.type) {
        case select_manga:
            return {
                ...state,
                selectedManga: action.manga
            };


            default:
                return state
    }
}

export default manga;