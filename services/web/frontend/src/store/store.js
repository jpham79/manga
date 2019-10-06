import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import app from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  app, // The root reducer
  composeWithDevTools(  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ))
)

export default store