import { select_manga, select_chapter } from '../actions/mangaActions';

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
            case select_chapter:
                return {
                    ...state,
                    selectedChapter: action.chapter
                };

            default:
                return state
    }
}

export default manga;