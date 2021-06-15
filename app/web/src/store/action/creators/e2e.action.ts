/*
 ** Description :
 */

import axios from 'axios'
import { Dispatch } from 'redux'

import { E2EActionEnum } from '../types'
import { IApplicationStateModel } from '../../store.interface'

// ---

export const E2EClearStoreAction = () => ({
  type: E2EActionEnum.CLEARSTORE,
  payload: null
})

export const E2EFileMetaAction = (payload: File) => ({
  type: E2EActionEnum.FILE_META,
  payload
})

export const E2ELoadingAction = (payload: boolean) => ({
  type: E2EActionEnum.LOADING,
  payload
})

export const E2EKeyAction = (payload: string) => ({
  type: E2EActionEnum.ADD_KEY,
  payload
})

export const E2EVerifyEncryptionAction = (payload: {
  show: boolean
  fileId: string
  loading: false
}) => ({
  type: E2EActionEnum.VERIFYENCRYPTION,
  payload
})

// not in reducer - it play as dispatcher
export const E2ESendHashedAction = (payload: {
  hashed: string
  key: string
}) => async (dispatch: Dispatch, getState: () => IApplicationStateModel) => {
  //

  try {
    dispatch(E2EKeyAction(payload.key))

    const {
      e2e: { name, size, mime }
    } = getState()

    let formData = new FormData()

    formData.append('data', payload.hashed)
    formData.append('name', name)
    formData.append('size', size)
    formData.append('mime', mime)

    const res = await axios.post('http://localhost:5000/v1/files', formData)

    if (res.data[0])
      dispatch(
        E2EVerifyEncryptionAction({
          show: true,
          fileId: res.data[0].fileId,
          loading: false
        })
      )
  } catch (error) {
    console.log(error)
  }
}
