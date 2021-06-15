import React from 'react'
import styled from 'styled-components'

import { ShowFile, ShowStaticItemInfo } from '../..'

// ---

export const ShowFileStyled = styled.div`
  height: 40vh;
  margin-top: -5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const ShowStaticFile = () => {
  return (
    <ShowFileStyled>
      <ShowFile logo="file" fileName="example_file.txt" />
      <ShowStaticItemInfo
        title="Your file id:"
        info="307f8f11-f51f-41a2-ba17-3e112dce56a4"
      />
      <ShowStaticItemInfo
        title="Your encryption key:"
        info="pTBydX1OncWG62XXgOifP"
      />
    </ShowFileStyled>
  )
}
