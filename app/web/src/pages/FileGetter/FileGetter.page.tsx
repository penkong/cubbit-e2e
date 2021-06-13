import styled from 'styled-components'

export const GetterContainerStyled = styled.div`
  height: 22vh;
  margin-top: -2vh;
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

export const GetterInputStyled = styled.input`
  width: 312px;
  height: 48px;
  border-radius: 3px;
  background-color: #292929;
  box-shadow: 0px 0px 0px 1px #363636 inset;
  color: white;
  font-size: 14px;
  line-height: 22.75px;
  padding: 8px 16px;
`

export const GetterBtnStyled = styled.button`
  background-color: #ffa047;
  &:hover {
    background-color: #ff8b1e;
  }
  border-radius: 3px;
  color: white;
  width: 216px;
  height: 48px;
  text-align: center;
  margin-top: 2vh;
`

export const FileGetter = () => {
  return (
    <GetterContainerStyled>
      <GetterTitleStyled>Insert your file id:</GetterTitleStyled>
      <div>
        <GetterInputStyled type="text" />
      </div>
      <div>
        <GetterBtnStyled>Get file</GetterBtnStyled>
      </div>
    </GetterContainerStyled>
  )
}
