import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import {
  CenterContainerStyled,
  ContainerStyled,
  FooterStyled,
  MainContainerStyled,
  TitleStyled
} from './MainLayout.styled'

import { Header } from '../../common/'

// ---

export const MainLayout: FC = ({ children }) => {
  const { t } = useTranslation()
  return (
    <>
      <MainContainerStyled>
        <Header />
        <TitleStyled>{t('mainTitle')}</TitleStyled>
        <CenterContainerStyled>
          <ContainerStyled>{children}</ContainerStyled>
        </CenterContainerStyled>
        <FooterStyled>{t('quote')}</FooterStyled>
      </MainContainerStyled>
    </>
  )
}
