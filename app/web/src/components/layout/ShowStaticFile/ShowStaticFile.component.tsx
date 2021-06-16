import { ShowFileStyled } from './ShowStaticFile.styled'

import { staticSelector } from '../../../store'
import { useTypedSelector } from '../../../hooks/'
import { ShowFile, ShowStaticItemInfo } from '../..'

// ---

export const ShowStaticFile = () => {
  const { fileId, key, name } = useTypedSelector(staticSelector)

  return (
    <ShowFileStyled>
      <ShowFile logo="file" fileName={name} />
      <ShowStaticItemInfo title="Your file id:" info={fileId} />
      <ShowStaticItemInfo title="Your encryption key:" info={key} />
    </ShowFileStyled>
  )
}
