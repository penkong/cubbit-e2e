import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../store'

// ---

export const useActions = () =>
  bindActionCreators(actionCreators, useDispatch())
