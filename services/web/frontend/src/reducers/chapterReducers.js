import { select_chapter } from '../actions/chapterActions';

const initState = {
    
}

const chapter = (state = initState, action ) => {
    switch (action.type) {
            case select_chapter:
                return {
                    ...state,
                    selectedChapter: action.chapter
                };

            default:
                return state
    }
}

export default chapter;