import {req, req_data, req_success, req_fail, select_tags} from './actionTypes';
import manga from '../../src/reducers/mangaReducers';
import chapter from '../../src/reducers/chapterReducers';
import { combineReducers } from 'redux';

const initState = {
    selectedTags: [],
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

            case select_tags:
                return {
                    ...state,
                    selectedTags: action.tags
                }

            default:
                return state
    }
}

const app = combineReducers({
    requests,
    chapter,
    manga
})

export default app