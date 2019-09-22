import {req, req_success, req_fail, req_data, toggle_sidenav, select_tags} from './actionTypes'

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

const toggleSidenav = makeActionCreator(toggle_sidenav, 'visible')

const selectTags = makeActionCreator(select_tags, 'tags')

function makeActionCreator(type, ...argNames) {
    return function(...args) {
      const action = { type }
      argNames.forEach((arg, index) => {
        action[arg] = args[index]
      })
      return action
    }
}

export {request, reqData, reqFail, reqSuccess, toggleSidenav, selectTags}