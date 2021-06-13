import { FC } from 'react'
import styled from 'styled-components'

import { Header } from '../../common/'

// ---

const MainContainerStyled = styled.div`
  min-height: 95vh;
  background-color: #161616;
  min-width: 99vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CenterContainerStyled = styled.div`
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
const FooterStyled = styled.div`
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
const TitleStyled = styled.div`
  font-weight: 900;
  font-style: normal;
  font-size: 36px;
  line-height: 46.8px;
  text-align: center;
  color: white;
  position: absolute;
  top: 25vh;
`

export const MainLayout: FC = ({ children }) => {
  return (
    <>
      <MainContainerStyled>
        <Header />
        <TitleStyled>Cubbit Vult!</TitleStyled>
        <CenterContainerStyled>{children}</CenterContainerStyled>
        <FooterStyled>
          The whole is never the sum of the parts - it is greater or lesser,
          depending on how well the individuls work together
        </FooterStyled>
      </MainContainerStyled>
    </>
  )
}
