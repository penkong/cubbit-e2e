import { FC } from 'react'

import { Header } from '../../common/'
import {
  CenterContainerStyled,
  ContainerStyled,
  FooterStyled,
  MainContainerStyled,
  TitleStyled
} from './MainLayout.styled'

// ---

export const MainLayout: FC = ({ children }) => {
  return (
    <>
      <MainContainerStyled>
        <Header />
        <TitleStyled>Cubbit Vult!</TitleStyled>
        <CenterContainerStyled>
          <ContainerStyled>{children}</ContainerStyled>
        </CenterContainerStyled>
        <FooterStyled>
          The whole is never the sum of the parts - it is greater or lesser,
          depending on how well the individuls work together
        </FooterStyled>
      </MainContainerStyled>
    </>
  )
}
