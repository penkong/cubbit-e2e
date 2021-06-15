/*
 ** Description :
 */

// import { Dispatch } from 'redux'
import { IApplicationStateModel } from '../../store.interface'
import { RootState } from '../../reducers/root.reducer'

import axios from 'axios'
import { E2EActionEnum } from '../types'
import { Dispatch } from 'redux'
const concat = require('concat-stream')
const fs = require('fs')

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
}) => async (dispatch: Dispatch, getState: () => IApplicationStateModel) => {
  //

  try {
    const {
      e2e: { name, size }
    } = getState()
    dispatch(E2ELoadingAction(true))
    dispatch(E2EKeyAction(payload.key))
    let formData = new FormData()
    formData.append('ffff', payload.hashed)
    const res = await axios.post('http://localhost:5000/v1/files', formData)
    console.log(res.data)
    // return {
    //   type: E2EActionEnum.SEND_HASHE,
    // payload
    // }
  } catch (error) {
    console.log(error)
  }
}
