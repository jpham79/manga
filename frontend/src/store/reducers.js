import {req, req_data, req_success, req_fail} from './actionTypes'
import { combineReducers } from 'redux'

const requests = (state = {}, action ) => {
    switch (action.type) {
        case req:
            return {
                ...state,
                [action.name] : {
                    reqType: action.reqType,
                    isFetching: action.isFetching,
                    params: [action.params]
                }
            }

        case req_data:
            return {
                ...state,
                [action.name] : {
                    data: action.data
                }
            }
        
        case req_success:
            return {
                ...state,
                [action.name] : {
                    isFetching: action.isFetching,

                }
            }
        
            case req_fail:
            return {
                ...state,
                [action.name] : {
                    isFetching: action.isFetching,
                    
                }
            }    

            default:
                return state
    }
}

const app = combineReducers({
    requests
})

export default app