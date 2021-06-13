import { FC, useState } from 'react'
import styled from 'styled-components'

// ---

const ShowStaticStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10vh;
  align-items: center;
  .title {
    color: white;
  }
`

const ShowStaticRowStyled = styled.div`
  width: 552px;
  height: 48px;
  border-radius: 3px;
  box-shadow: 0px 0px 0px 1px #363636 inset;
  background-color: #292929;
  @media (max-width: 728px) {
    width: 89vw;
  }
  @media (max-width: 345px) {
    width: 94vw;
  }

  div {
    height: 100%;
    width: 96%;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
      color: white;
      font-size: 16px;
      @media (max-width: 728px) {
        font-size: 12px;
      }
    }

    button {
      margin-right: 1vh;
      width: 116px;
      height: 36px;
      border-radius: 3px;
      background-color: #009eff;
      color: white;
      font-size: 16px;
      &:hover {
        background-color: #0088dd;
      }
      @media (max-width: 728px) {
        font-size: 10px;
        width: 12vw;
      }

      @media (max-width: 345px) {
        font-size: 9px;
      }
    }
  }
`

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
