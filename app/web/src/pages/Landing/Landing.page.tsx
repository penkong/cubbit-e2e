import { useState, FC } from 'react'

import { UploadDownload } from '../../components/layout/UploadDownload/UploadDownload.component'
import { CuteSpinner, ShowStaticFile } from '../../components'

// ---

// ---

interface IAppProps {}

export const Landing: FC<IAppProps> = () => {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  // ---

  if (loading && !show) {
    return <CuteSpinner />
  }
  if (show) {
    return <ShowStaticFile />
  }

  return !show && !loading ? <UploadDownload /> : null
}
