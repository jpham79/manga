import { request, reqSuccess, reqFail, reqData } from '../store/actions';
import axios from 'axios';

const select_chapter = 'select_chapter';
const get_chapter_id = 'get_chapter_id';
const get_chapter_num = 'get_chapter_num';

const getChapterId = chapterId => {
    let params = {
        chapterId
    }
    return dispatch => {
        dispatch(request('GET', get_chapter_id, params))
        return axios.get(`/api/manga/chapter/id/${chapterId}`)
            .then(response => {
                dispatch(reqSuccess(get_chapter_id, response))
                dispatch(reqData(get_chapter_id, response))
                dispatch(selectChapter(response.data))
            })
            .catch(response => dispatch(reqFail(get_chapter_id, response)))
    }
}

const getChapterNum = (mangaName, chapterNum) => {
    let params = {
        mangaName,
        chapterNum,
    }
    return dispatch => {
        dispatch(request('GET', get_chapter_num, params))
        return axios.get(`/api/manga/${mangaName}/chapter/${chapterNum}`)
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

export { selectChapter, select_chapter, getChapterId, get_chapter_id, getChapterNum, get_chapter_num };