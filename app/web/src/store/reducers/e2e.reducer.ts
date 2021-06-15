import produce from 'immer'

import { IE2EStateModel } from '../store.interface'
import { E2EAction, E2EActionEnum } from '../action/types/'

// ---

const { FILE_META, LOADING } = E2EActionEnum

const initialState: IE2EStateModel = {
  laoding: false,
  show: false,
  name: '',
  mime: '',
  size: '',
  key: '',
  fileId: ''
}

// ---

export const e2eReducer = produce(
  (state: IE2EStateModel = initialState, action: E2EAction) => {
    switch (action.type) {
      case FILE_META:
        const { name, type, size } = action.payload
        state.name = name
        state.mime = type
        state.size = size.toString()
        return
      case LOADING:
        state.laoding = action.payload
        return
      default:
        return state
    }
  }
)
