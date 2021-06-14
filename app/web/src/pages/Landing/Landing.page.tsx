import { useState, FC } from 'react'

import { CuteSpinner, ShowStaticFile, UploadDownload } from '../../components'

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
