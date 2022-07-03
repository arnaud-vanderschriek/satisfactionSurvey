import thunk from 'redux-thunk';
import rootReducer from "../reducers/user.reducer";
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export default store;
export {persistor}