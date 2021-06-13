import { FC } from 'react'
import styled from 'styled-components'

// ---

interface IAppProps {
  label: string
  info: string
}

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40%;
  @media (max-width: 978px) {
    width: 60%;
  }
  @media (max-width: 778px) {
    width: 70%;
  }
  @media (max-width: 640px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 90vw;
    margin: 0;
  }
  height: 100%;
  font-weight: 700;
  font-size: 14px;
  .label {
    padding-top: auto;
    margin-top: 2px;
    color: white;
    width: 25%;
    text-align: right;
    padding-right: 9px;
    padding-top: 5px;
    height: 30px;
    @media (max-width: 375px) {
      width: 20%;
      padding-right: 2px;
      font-size: 10px;
    }
  }
  input {
    color: white;
    width: 75%;
    @media (max-width: 375px) {
      width: 80%;
      font-size: 10px;
    }
    background-color: #292929;
    border: 1px solid #363636;
    text-align: left;
    height: 30px;
    border-radius: 3px;
    padding-left: 10px;
  }
`

export const FileItemRow: FC<IAppProps> = ({ label, info }) => {
  return (
    <RowStyled>
      <div className="label">{label}</div>
      <input className="info" defaultValue={info} />
    </RowStyled>
  )
}
