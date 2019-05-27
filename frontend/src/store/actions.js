import {req, req_success, req_fail, req_data} from './actionTypes'

const request = (reqType, name, params = undefined) => {
    return {
        type: req,
        reqType,
        name,
        params, //optional
        isFetching: true
    }
}

const reqSuccess = response => {
    return {
        type: req_success,
        isFetching: false
    }
}

const reqFail = response => {
    return {
        type: req_fail,
        isFetching: false
    }
}

const reqData = (data) => {
    return {
        type: req_data,
        data
    }
}

export {request, reqData, reqFail, reqSuccess}