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

const reqSuccess = (name, response) => {
    return {
        type: req_success,
        isFetching: false,
        name,
        status: response.status,
        statusText: response.statusText
    }
}

const reqFail = (name, error) => {
    return {
        type: req_fail,
        isFetching: false,
        name,
        error
    }
}

const reqData = (name, response) => {
    return {
        type: req_data,
        data: response.data,
        name
    }
}

export {request, reqData, reqFail, reqSuccess}