import produce from 'immer'

import { IE2EStateModel } from '../store.interface'
import { E2EAction, E2EActionEnum } from '../action/types/'

// ---

const {
  ADD_KEY,
  LOADING,
  FILE_META,
  CLEARSTORE,
  READYDOWNLOAD,
  VERIFYENCRYPTION
} = E2EActionEnum

const initialState: IE2EStateModel = {
  loading: false,
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
      //

      case FILE_META:
        const { name, type, size } = action.payload
        state.name = name
        state.mime = type
        state.size = size.toString()
        return

      case LOADING:
        state.loading = action.payload
        return

      case ADD_KEY:
        state.key = action.payload
        return

      case VERIFYENCRYPTION:
        const { show, fileId, loading } = action.payload
        state.show = show
        state.fileId = fileId
        state.loading = loading
        return

      case READYDOWNLOAD:
        const { fileId: f, mime, size: s, name: n } = action.payload
        state.name = n
        state.size = s
        state.fileId = f
        state.mime = mime
        return

      case CLEARSTORE:
        state.loading = false
        state.show = false
        state.fileId = ''
        state.key = ''
        state.mime = ''
        state.size = ''
        state.name = ''
        return

      default:
        return state
    }
  }
)
