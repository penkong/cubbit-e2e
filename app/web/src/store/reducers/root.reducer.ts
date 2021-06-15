import { History } from 'history'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { connectRouter } from 'connected-react-router'

import storage from 'redux-persist/lib/storage'

import { history } from '../../util'
import { e2eReducer } from './e2e.reducer'

// ---

// ---

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['router', 'e2e']
}

const rootReducer = (history: History) =>
  combineReducers({
    e2e: e2eReducer,
    router: connectRouter(history)
  })

export const persistedReducer = persistReducer(
  persistConfig,
  rootReducer(history)
)

export type RootState = ReturnType<typeof rootReducer>
