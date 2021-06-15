import { useState, FC } from 'react'

import { loadingSelector } from '../../store'
import { useTypedSelector } from '../../hooks'
import { CuteSpinner, ShowStaticFile, UploadDownload } from '../../components'

// ---

// ---

interface IAppProps {}

export const Landing: FC<IAppProps> = () => {
  const [show, setShow] = useState(false)

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
