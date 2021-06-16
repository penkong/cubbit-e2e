import { FC } from 'react'
import { ShowFileStyled } from './ShowFile.styled'

// ---

interface IAppProps {
  logo: string
  fileName: string
}

export const ShowFile: FC<IAppProps> = ({ logo, fileName }) => (
  <ShowFileStyled>
    <img src={`/files/${logo}.png`} alt="example_file.txt" />
    <span>{fileName}</span>
  </ShowFileStyled>
)
