import { createSelector } from 'reselect'
import { IApplicationStateModel } from '../store.interface'

// ---

// ---

const domain = (state: IApplicationStateModel) => state.e2e

export const loadingSelector = createSelector(domain, e => e.loading)

export const showSelector = createSelector(domain, e => e.show)

export const staticSelector = createSelector(
  domain,
  ({ key, name, fileId }) => ({
    key,
    name,
    fileId
  })
)

export const readyDownloadSelector = createSelector(
  domain,
  ({ fileId, name, size, mime }) => ({ fileId, name, size, mime })
)
