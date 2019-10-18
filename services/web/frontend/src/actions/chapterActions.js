import { request, reqSuccess, reqFail, reqData } from '../store/actions';
import axios from 'axios';

const select_chapter = 'select_chapter';
const get_chapter = 'get_chapter';

const getChapter = chapterId => {
    let params = {
        chapterId
    }
    return dispatch => {
        dispatch(request('GET', get_chapter, params ))
        return axios.get(`http://localhost:5000/api/manga/chapter/${chapterId}`, {
            params
        })
            .then(response => {
                dispatch(reqSuccess(get_chapter, response))
                dispatch(reqData(get_chapter, response))
                dispatch(selectChapter(response.data))
            })
            .catch(response => dispatch(reqFail(get_chapter, response)))
    }
}

const selectChapter = chapter => {
    return {
        type: select_chapter,
        chapter
    }
}

export { selectChapter, select_chapter, getChapter, get_chapter};