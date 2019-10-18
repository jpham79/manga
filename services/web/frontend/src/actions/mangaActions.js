import { request, reqSuccess, reqFail, reqData } from '../store/actions';
import axios from 'axios';

const select_manga = 'select_manga';
const get_manga_name = 'get_manga_name';
const select_chapter = 'select_chapter';
const get_chapter = 'get_chapter';


const selectManga = manga => {
    return {
        type: select_manga,
        manga
    }
}

const getChapter = chapterId => {
    let params = {
        chapterId
    }
    return dispatch => {
        dispatch(request('GET', 'MangaChapter', params ))
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

const findMangaName = mangaName => {
    let params = {
        mangaName
    }
    return dispatch => {
        dispatch(request('GET', get_manga_name, params ))
        return axios.get(`http://localhost:5000/api/manga/name/${mangaName}`)
            .then(response => {
                dispatch(reqSuccess(get_manga_name, response))
                dispatch(reqData(get_manga_name, response))
                dispatch(selectManga(response.data))
            })
            .catch(response => dispatch(reqFail(get_manga_name, response)))
    }
}

const selectChapter = chapter => {
    return {
        type: select_chapter,
        chapter
    }
}

export { selectManga, select_manga, selectChapter, findMangaName, select_chapter, getChapter, get_chapter };