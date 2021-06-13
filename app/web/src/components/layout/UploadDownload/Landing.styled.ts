import styled from 'styled-components'

export const SubHeaderStyled = styled.div`
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  color: white;
  line-height: 26px;
  width: 80vw;
  text-align: center;
`

export const UploaderStyled = styled.div`
  width: 936px;
  height: 216px;
  background-color: #ffa047;
  @media (max-width: 1200px) {
    width: 80vw;
  }
  @media (max-width: 590px) {
    width: 100vw;
  }
`

export const BtnRowStyled = styled.div`
  width: 38%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1200px) {
    width: 50vw;
    justify-content: space-around;
  }
  @media (max-width: 728px) {
    width: 80vw;
  }
  @media (max-width: 350px) {
    width: 96vw;
  }
`

export const BtnStyled = styled.button<{ upload?: true }>`
  width: 168px;
  height: 48px;
  background-color: ${props => (props.upload ? '#009eff' : '#0065ff')};
  color: white;
  text-align: center;
  border-radius: 3px;
  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 330px) {
    width: 130px;
    height: 40px;
  }

  &:hover {
    background-color: ${props => (props.upload ? '#008ce4' : '#005ae2')};
  }
`
