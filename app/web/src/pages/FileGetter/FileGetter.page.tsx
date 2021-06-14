import { useState } from 'react'
import styled from 'styled-components'
import { FileItemRow } from '../../components'

export const GetterContainerStyled = styled.div`
  height: 22vh;
  margin-top: -4vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: center;
`

export const GetterTitleStyled = styled.div`
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: white;
`

export const InputStyled = styled.input<{ width: string }>`
  width: ${({ width }) => width};
  height: 48px;
  border-radius: 3px;
  background-color: #292929;
  box-shadow: 0px 0px 0px 1px #363636 inset;
  color: white;
  font-size: 14px;
  line-height: 22.75px;
  padding: 8px 16px;
  font-family: 'Nunito', sans-serif;
`

export const BtnStyled = styled.button`
  background-color: #ffa047;
  &:hover {
    background-color: #ff8b1e;
  }
  margin-left: -1vh;
  border-radius: 3px;
  color: white;
  width: 216px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  margin-top: 2vh;
`

export const EncrpytionInputStyled = styled.input`
  width: 409px;
  height: 48px;
  border-radius: 3px;
  background-color: #292929;
  box-shadow: 0px 0px 0px 1px #363636 inset;
  color: white;
  font-size: 14px;
  line-height: 22.75px;
  padding: 8px 16px;
  font-family: 'Nunito', sans-serif;
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 18vh;
  margin-left: -3vw;
  width: 100%;
`

const DownloadContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin-top: 14vh;
  height: 50vh;
`

export const EncryptionInputStyled = styled.input`
  width: 24vw;
  margin-left: -2vw;
  @media (max-width: 1400px) {
    margin-left: -1vw;
    width: 30vw;
  }
  @media (max-width: 998px) {
    width: 46vw;
  }
  @media (max-width: 778px) {
    width: 54vw;
  }
  @media (max-width: 640px) {
    width: 62vw;
  }
  @media (max-width: 550px) {
    margin-left: 5vw;
    width: 86vw;
  }
  height: 48px;
  border-radius: 3px;
  background-color: #292929;
  box-shadow: 0px 0px 0px 1px #363636 inset;
  color: white;
  font-size: 14px;
  line-height: 22.75px;
  padding: 8px 16px;
  font-family: 'Nunito', sans-serif;
`

const InsertKeyRowStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 20%;
`
export const TitleStyled = styled.div`
  font-weight: 400;
  margin-top: -1vh;
  font-style: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: white;
`
export const FileGetter = () => {
  const [state, setstate] = useState(true)

  if (state) {
    return (
      <DownloadContainer>
        <RowContainer>
          <FileItemRow
            label={'File id:'}
            info={'307f8f11-f51f-41a2-ba17-3e112dce56a4'}
          />
          <FileItemRow label={'File name:'} info={'example_file.txt'} />
          <FileItemRow label={'File size:'} info={'100Kb'} />
          <FileItemRow label={'File mime:'} info={'text/plain'} />
        </RowContainer>
        <InsertKeyRowStyled>
          <TitleStyled>Insert your encryption key:</TitleStyled>
          <div>
            <EncryptionInputStyled
              type="text"
              defaultValue="pTBydX1OncWG62XXgOifP"
            />
          </div>
        </InsertKeyRowStyled>
        <div>
          <BtnStyled>Decryption and download</BtnStyled>
        </div>
      </DownloadContainer>
    )
  }

  return (
    <GetterContainerStyled>
      <GetterTitleStyled>Insert your file id:</GetterTitleStyled>
      <div>
        <InputStyled
          width="312px"
          type="text"
          value="307f8f11-f51f-41a2-ba17-3e112dce56a4"
        />
      </div>
      <div>
        <BtnStyled>Get file</BtnStyled>
      </div>
    </GetterContainerStyled>
  )
}
