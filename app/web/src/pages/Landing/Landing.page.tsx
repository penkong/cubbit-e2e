import React, { FC } from 'react'

import { useTypedSelector } from '../../hooks'
import { loadingSelector, showSelector } from '../../store'
import { CuteSpinner, ShowStaticFile, UploadDownload } from '../../components'

// ---

// ---

interface IAppProps {}

export const Landing: FC<IAppProps> = () => {
  const show = useTypedSelector(showSelector)
  const loading = useTypedSelector(loadingSelector)

  // ---

  if (loading && !show) {
    return <CuteSpinner />
  }
  if (show) {
    return <ShowStaticFile />
  }

  return !show && !loading ? <UploadDownload /> : null
}
