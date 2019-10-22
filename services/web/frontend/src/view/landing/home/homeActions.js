import { request, reqSuccess, reqFail, reqData } from '../../../store/actions'
import axios from 'axios'

const listTest = (tags) => {
    let params = {
        genres: tags ? tags : ['adult', 'shounen']
    }
    return dispatch => {
        dispatch(request('GET', 'ListTest', params ))
        return axios.get('http://localhost:5000/api/manga', {
            params
        })
            .then(response => {
                dispatch(reqSuccess('ListTest', response))
                dispatch(reqData('ListTest', response))
            })
            .catch(response => dispatch(reqFail('ListTest', response)))
    }
}

export { listTest };