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
  type: E2EActionEnum.SEND_HASHED
  payload: { hashed: string; key: string }
}

export interface IE2EKeyAction {
  type: E2EActionEnum.ADD_KEY
  payload: string
}

export interface IE2EVerifyEncryptionAction {
  type: E2EActionEnum.VERIFYENCRYPTION
  payload: { show: boolean; fileId: string; loading: boolean }
}

export interface IE2EClearStoreAction {
  type: E2EActionEnum.CLEARSTORE
  payload: null
}

export interface IE2EGetFileInfoAction {
  type: E2EActionEnum.GETFILEINFO
  payload: { fileId: string }
}

export interface IE2EErrorMessageAction {
  type: E2EActionEnum.ERRORMSG
  payload: string
}

export interface IE2EReadyDownloadAction {
  type: E2EActionEnum.READYDOWNLOAD
  payload: {
    fileId: string
    mime: string
    name: string
    size: string
  }
}

// ---

export type E2EAction =
  | IE2EKeyAction
  | IE2ELoadingAction
  | IE2EFileMetaAction
  | IE2ESendHashedAction
  | IE2EClearStoreAction
  | IE2EGetFileInfoAction
  | IE2EErrorMessageAction
  | IE2EReadyDownloadAction
  | IE2EVerifyEncryptionAction
