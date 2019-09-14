import {req, req_data, req_success, req_fail, toggle_sidenav} from './actionTypes'
import { combineReducers } from 'redux'

const initState = {
    isSidenavVisible: false
}

const requests = (state = initState, action ) => {
    switch (action.type) {
        case req:
            return {
                ...state,
                [action.name] : {
                    ...state[action.name],
                    reqType: action.reqType,
                    isFetching: action.isFetching,
                    params: [action.params]
                }
            }

        case req_data:
            return {
                ...state,
                [action.name] : {
                    ...state[action.name],
                    data: action.data
                }
            }
        
        case req_success:
            return {
                ...state,
                [action.name] : {
                    ...state[action.name],
                    isFetching: action.isFetching,
                    status: action.status,
                    statusText: action.statusText
                }
            }
        
            case req_fail:
                return {
                    ...state,
                    [action.name] : {
                        ...state[action.name],
                        isFetching: action.isFetching,
                        error: action.error
                    }
                } 
                
            case toggle_sidenav:
                return {
                    ...state,
                    isSidenavVisible: action.visible
                }

            default:
                return state
    }
}

const app = combineReducers({
    requests
})

export default app