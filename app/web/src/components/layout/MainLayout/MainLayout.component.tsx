/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import {
  CenterContainerStyled,
  ContainerStyled,
  FooterStyled,
  MainContainerStyled,
  TitleStyled
} from './MainLayout.styled'

import { Header } from '../../common/'
import { history } from '../../../util'
import { errorMsgSelector } from '../../../store/'
import { useTypedSelector, useActions } from '../../../hooks/'

// ---

export const MainLayout: FC = ({ children }) => {
  const { t } = useTranslation()

  const { E2EClearStoreAction } = useActions()

  const errorMsg = useTypedSelector(errorMsgSelector)

  // temporary way to handle error and remove loading state
  // in future if it is case some new elements will add to inform
  // user about error case exactly .
  useEffect(() => {
    if (errorMsg) {
      E2EClearStoreAction()
      history.push('/')
    }
  }, [errorMsg])

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
