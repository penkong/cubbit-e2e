import { history } from '../../util'
import {
  BtnRowStyled,
  BtnStyled,
  SubHeaderStyled,
  UploaderStyled
} from './Landing.styled'

// ---

export const Landing = () => {
  return (
    <>
      <SubHeaderStyled>
        Advnced online file encryption and decryption. Secure any file type and
        maintain your privcy!
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
