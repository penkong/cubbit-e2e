import { FC, useState } from 'react'

import {
  ShowStaticRowStyled,
  ShowStaticStyled
} from './ShowStaticItemInfo.styled'

// ---

interface IAppProps {
  title: string
  info: string
}

export const ShowStaticItemInfo: FC<IAppProps> = ({ info, title }) => {
  const [copied, setCopied] = useState(false)
  const clicked = () => {
    navigator.clipboard.writeText(info)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    clearTimeout()
  }
  return (
    <ShowStaticStyled>
      <div className="title">{title}</div>
      <ShowStaticRowStyled>
        <div>
          <span>{info}</span>
          <button onClick={clicked}>{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </ShowStaticRowStyled>
    </ShowStaticStyled>
  )
}
