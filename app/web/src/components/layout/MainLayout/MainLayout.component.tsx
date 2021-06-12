import { FC } from 'react'
import styled from 'styled-components'

import { Header } from '../../common/'

// ---

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: black;
  min-width: 100vw;
`

export const MainLayout: FC = ({ children }) => {
  return (
    <>
      <MainContainer>
        <Header />
        {children}
      </MainContainer>
    </>
  )
}
