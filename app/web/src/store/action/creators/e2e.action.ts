/*
 ** Description :
 */

// import { Dispatch } from 'redux'

import { E2EActionEnum } from '../types'
import { Dispatch } from 'redux'

// ---

export const E2EFileMetaAction = (payload: File) => ({
  type: E2EActionEnum.FILE_META,
  payload
})

export const E2ELoadingAction = (payload: boolean) => ({
  type: E2EActionEnum.LOADING,
  payload
})

export const E2ESendHashedAction = (payload: {
  hashed: string
  key: string
}) => async (dispatch: Dispatch) => {
  //

  dispatch(E2ELoadingAction(true))

  return {
    type: E2EActionEnum.SEND_HASHE,
    payload
  }
}