import { RouterState } from 'connected-react-router'

// ---

export interface IE2EStateModel {
  loading: boolean
  show: boolean
  name: string
  mime: string
  size: string
  key: string
  fileId: string
}

export interface IApplicationStateModel {
  e2e: IE2EStateModel
  router: RouterState
}
