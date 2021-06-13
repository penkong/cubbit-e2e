import styled from 'styled-components'

export const MainContainerStyled = styled.div`
  min-height: 95vh;
  background-color: #161616;
  min-width: 99vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CenterContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 70vw;
  @media (max-width: 768px) {
    min-width: 85vw;
  }
  @media (max-width: 500px) {
    min-width: 100vw;
  }
  min-height: 100vh;
`
export const FooterStyled = styled.div`
  color: white;
  position: absolute;
  width: 80vw;
  bottom: 3vh;
  font-size: 14px;
  line-height: 22.75px;
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
`
export const TitleStyled = styled.div`
  font-weight: 900;
  font-style: normal;
  font-size: 36px;
  line-height: 46.8px;
  text-align: center;
  color: white;
  position: absolute;
  top: 24vh;
`

export const ContainerStyled = styled.div`
  min-height: 55vh;
  min-width: 100%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
