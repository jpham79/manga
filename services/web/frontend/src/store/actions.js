import {req, req_success, req_fail, req_data, search_input, enable_dual_page} from './actionTypes'

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


const searchManga = makeActionCreator(search_input, 'searchInput');

const toggleDualPage = makeActionCreator(enable_dual_page, 'dualPageFlag');

function makeActionCreator(type, ...argNames) {
    return (...args) => {
      const action = { type }
      argNames.forEach((arg, index) => {
        action[arg] = args[index]
      })
      return action
    }
}

export {request, reqData, reqFail, reqSuccess, searchManga, toggleDualPage}