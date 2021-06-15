import produce from 'immer'

// ---

export interface IE2EStateModel {
  laoding: boolean
  show: boolean
  name: string
  mime: string
  size: string
  key: string
  fileId: string
}

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
  (state: IE2EStateModel = initialState, action: any) => {
    switch (action.type) {
      default:
        return state
    }
  }
)
