import { createSelector } from 'reselect'
import { IApplicationStateModel } from '../store.interface'

// ---

// ---

const domain = (state: IApplicationStateModel) => state.e2e

export const loadingSelector = createSelector(domain, e => e.laoding)
