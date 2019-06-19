import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import logger from 'redux-logger';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk, // lets us dispatch() functions
    logger // neat middleware that logs actions
  )
)

export default store;