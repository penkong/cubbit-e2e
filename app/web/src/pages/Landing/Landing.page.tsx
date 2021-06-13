import styled from 'styled-components'

const LandingContainerStyled = styled.div`
  min-height: 55vh;
  /* background-color: red; */
  min-width: 100%;
  margin-top: 18vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const SubHeaderStyled = styled.div`
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  color: white;
  line-height: 26px;
  text-align: center;
  /* background-color: black; */
`

const UploaderStyled = styled.div`
  width: 936px;
  height: 216px;
  background-color: #ffa047;
`

const BtnRowStyled = styled.div`
  width: 38%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const BtnStyled = styled.button<{ upload?: true }>`
  width: 168px;
  height: 48px;
  background-color: ${props => (props.upload ? '#009eff' : '#0065ff')};
  color: white;
  text-align: center;
`

export const Landing = () => {
  return (
    <LandingContainerStyled>
      <SubHeaderStyled>
        Advnced online file encryption and decryption. Secure any file type and
        maintain your privcy!
      </SubHeaderStyled>

      <UploaderStyled></UploaderStyled>
      <BtnRowStyled>
        <BtnStyled upload>Encrypt and upload</BtnStyled>
        <BtnStyled>Download and decrypt</BtnStyled>
      </BtnRowStyled>
    </LandingContainerStyled>
  )
}
