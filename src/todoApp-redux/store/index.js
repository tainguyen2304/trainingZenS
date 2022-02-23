import { createStore } from 'redux'
import { persistReducer, persistStore} from "redux-persist"
import todoReducer from './reducers/todoReducer'
import storage from "redux-persist/lib/storage"

const persistConfig = {
      key: 'root',
      version: 1,
      storage,
  }


const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store  = createStore(persistedReducer)
export let persistor = persistStore(store);