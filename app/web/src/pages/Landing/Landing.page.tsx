import { FC, useEffect } from 'react'

import { showSelector } from '../../store'
import { useTypedSelector } from '../../hooks'
import { ShowStaticFile, UploadDownload } from '../../components'

// ---

interface IAppProps {}

export const Landing: FC<IAppProps> = () => {
  const show = useTypedSelector(showSelector)

  useEffect(() => {}, [show])

  if (show) return <ShowStaticFile />

  return !show ? <UploadDownload /> : null
}
