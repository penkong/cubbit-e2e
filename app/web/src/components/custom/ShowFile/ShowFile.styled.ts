import styled from 'styled-components'

export const ShowFileStyled = styled.div`
  margin-top: -2vh;
  width: 552px;
  height: 120px;
  border-radius: 3px;
  box-shadow: 0px 0px 0px 1px #363636 inset;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 728px) {
    width: 89vw;
  }
  @media (max-width: 345px) {
    width: 94vw;
  }
  span {
    color: white;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 26px;
  }
`
