import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "../reducers/user.reducer";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,composeWithDevTools(applyMiddleware(thunk, logger))
)

export default store