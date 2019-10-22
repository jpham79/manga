import { request, reqSuccess, reqFail, reqData } from '../store/actions';
import axios from 'axios';

const select_manga = 'select_manga';
const get_manga_name = 'get_manga_name';



const selectManga = manga => {
    return {
        type: select_manga,
        manga
    }
}

const findMangaName = mangaName => {
    let params = {
        mangaName
    }
    return dispatch => {
        dispatch(request('GET', get_manga_name, params ))
        return axios.get(`/api/manga/name/${mangaName}`)
            .then(response => {
                dispatch(reqSuccess(get_manga_name, response))
                dispatch(reqData(get_manga_name, response))
                dispatch(selectManga(response.data))
            })
            .catch(response => dispatch(reqFail(get_manga_name, response)))
    }
}



export { selectManga, select_manga, findMangaName };