import { useState, FC } from 'react'
import styled from 'styled-components'

import { history } from '../../util'
import {
  BtnRowStyled,
  BtnStyled,
  SubHeaderStyled,
  UploaderStyled
} from './Landing.styled'
import { ShowStaticItemInfo } from '../../components'

// ---

const ShowFileContainer = styled.div`
  height: 40vh;
  margin-top: -5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const ShowFileStyled = styled.div`
  width: 552px;
  height: 120px;
  border-radius: 3px;
  box-shadow: 0px 0px 0px 1px #363636 inset;
`

// ---

interface IAppProps {}

export const Landing: FC<IAppProps> = () => {
  const [show, setShow] = useState(true)
  const [loading, setLoading] = useState(false)

  // ---

  if (loading && !show) {
    return <div>loading</div>
  }
  if (show) {
    return (
      <ShowFileContainer>
        <ShowFileStyled></ShowFileStyled>
        <ShowStaticItemInfo
          title="Your file id:"
          info="307f8f11-f51f-41a2-ba17-3e112dce56a4"
        />
        <ShowStaticItemInfo
          title="Your encryption key:"
          info="pTBydX1OncWG62XXgOifP"
        />
      </ShowFileContainer>
    )
  }

  return (
    <>
      <SubHeaderStyled>
        Advnced online file encryption and decryption.
        <p>Secure any file type and maintain your privcy!</p>
      </SubHeaderStyled>
      <UploaderStyled></UploaderStyled>
      <BtnRowStyled>
        <BtnStyled upload>Encrypt and upload</BtnStyled>
        <BtnStyled
          onClick={() => {
            history.push('/getter')
          }}
        >
          Download and decrypt
        </BtnStyled>
      </BtnRowStyled>
    </>
  )
}
