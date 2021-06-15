import { FC, useEffect } from 'react'

import { showSelector } from '../../store'
import { useTypedSelector } from '../../hooks'
import { ShowStaticFile, UploadDownload } from '../../components'

// ---

// ---

interface IAppProps {}

export const Landing: FC<IAppProps> = () => {
  const show = useTypedSelector(showSelector)
  // const loading = useTypedSelector(loadingSelector)

  useEffect(() => {}, [show])

  // if (loading && !show) return <CuteSpinner />

  if (show) return <ShowStaticFile />

  return !show ? <UploadDownload /> : null
}
