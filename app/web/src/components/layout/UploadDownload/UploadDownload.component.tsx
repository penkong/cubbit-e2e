import { history } from '../../../util'
import {
  BtnStyled,
  BtnRowStyled,
  UploaderStyled,
  SubHeaderStyled
} from './Landing.styled'

const STR = {
  title1: 'Advnced online file encryption and decryption.',
  title2: 'Secure any file type and maintain your privcy!',
  btnEnc: 'Encrypt and upload',
  btnDl: 'Download and decrypt'
}

export const UploadDownload = () => {
  return (
    <>
      <SubHeaderStyled>
        {STR.title1}
        <p>{STR.title2}</p>
      </SubHeaderStyled>
      <UploaderStyled></UploaderStyled>
      <BtnRowStyled>
        <BtnStyled upload>{STR.btnEnc}</BtnStyled>
        <BtnStyled
          onClick={() => {
            history.push('/getter')
          }}
        >
          {STR.btnDl}
        </BtnStyled>
      </BtnRowStyled>
    </>
  )
}
