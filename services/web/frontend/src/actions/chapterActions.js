import { request, reqSuccess, reqFail, reqData } from '../store/actions';
import axios from 'axios';

const select_chapter = 'select_chapter';
const get_chapter = 'get_chapter';
const get_chapter_num = 'get_chapter_num';

const getChapter = chapterId => {
    let params = {
        chapterId
    }
    return dispatch => {
        dispatch(request('GET', get_chapter, params))
        return axios.get(`/api/manga/chapter/${chapterId}`)
            .then(response => {
                dispatch(reqSuccess(get_chapter, response))
                dispatch(reqData(get_chapter, response))
                dispatch(selectChapter(response.data))
            })
            .catch(response => dispatch(reqFail(get_chapter, response)))
    }
}

const findChapterName = (mangaName, chapterNum) => {
    let params = {
        mangaName,
        chapterNum,
    }
    return dispatch => {
        dispatch(request('GET', get_chapter_num, params))
        return axios.get(`/api/manga/name/${mangaName}/chapter/num/${chapterNum}`)
            .then(response => {
                dispatch(reqSuccess(get_chapter_num, response))
                dispatch(reqData(get_chapter_num, response))
                dispatch(selectChapter(response.data))
            })
            .catch(response => dispatch(reqFail(get_chapter_num, response)))
    }
}

const selectChapter = chapter => {
    return {
        type: select_chapter,
        chapter
    }
}

export { selectChapter, select_chapter, getChapter, get_chapter, findChapterName, get_chapter_num };