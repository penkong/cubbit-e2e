import { History } from 'history'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { connectRouter, RouterState } from 'connected-react-router'

import storage from 'redux-persist/lib/storage'

import { history } from '../../util'
import { e2eReducer, IE2EStateModel } from './e2e.reducer'

// ---

export interface IApplicationStateModel {
  e2e: IE2EStateModel
  router: RouterState
}

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
