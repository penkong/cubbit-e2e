/*
 ** Description :
 */

import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { IApplicationStateModel } from '../store/store.interface'

// ---

export const useTypedSelector: TypedUseSelectorHook<IApplicationStateModel> = useSelector
