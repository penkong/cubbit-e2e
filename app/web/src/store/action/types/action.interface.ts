import { E2EActionEnum } from './action.enum'

// ---

export interface IE2EFileMetaAction {
  type: E2EActionEnum.FILE_META
  payload: File
}

export interface IE2ELoadingAction {
  type: E2EActionEnum.LOADING
  payload: boolean
}

export interface IE2ESendHashedAction {
  type: E2EActionEnum.SEND_HASHE
  payload: { hashed: string; key: string }
}

export type E2EAction =
  | IE2EFileMetaAction
  | IE2ELoadingAction
  | IE2ESendHashedAction
