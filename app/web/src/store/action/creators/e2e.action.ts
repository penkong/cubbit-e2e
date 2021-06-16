/*
 ** Description :
 */

import axios from 'axios'
import { Dispatch } from 'redux'

import { E2EActionEnum } from '../types'
import { IApplicationStateModel } from '../../store.interface'

// const url = process.env.REACT_APP_API || 'http://localhost:5000'
// const url = 'http://api:5000' || 'http://localhost:5000'

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

export const E2EReadyDownloadAction = (payload: {
  fileId: string
  mime: string
  name: string
  size: string
}) => ({
  type: E2EActionEnum.READYDOWNLOAD,
  payload
})

export const E2EErrorMessageAction = (payload: string) => ({
  type: E2EActionEnum.ERRORMSG,
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
    const res = await axios.post('/v1/files', formData)

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
    dispatch(E2EErrorMessageAction('Bad Things!'))
  }
}

// not in reducer - it play as dispatcher
export const E2EGetFileInfoAction = (payload: { fileId: string }) => async (
  dispatch: Dispatch
) => {
  try {
    const res = await axios.get('/v1/files/' + payload.fileId)

    const { fileId, mime, name, size } = res.data[0]

    dispatch(
      E2EReadyDownloadAction({
        fileId,
        mime,
        name,
        size
      })
    )
  } catch (error) {
    console.log(error)
    dispatch(E2EErrorMessageAction('Wrong Input!'))
  }
}
