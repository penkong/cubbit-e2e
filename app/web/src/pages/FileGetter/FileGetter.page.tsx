import React, { useState } from 'react'

import {
  BtnStyled,
  InputStyled,
  TitleStyled,
  RowContainer,
  GetterTitleStyled,
  DownloadContainer,
  InsertKeyRowStyled,
  EncryptionInputStyled,
  GetterContainerStyled
} from './FileGetter.styled'

import { FileItemRow } from '../../components'

// ---

export const FileGetter = () => {
  const [state, setstate] = useState(true)

  if (state) {
    return (
      <DownloadContainer>
        <RowContainer>
          <FileItemRow
            label={'File id:'}
            info={'307f8f11-f51f-41a2-ba17-3e112dce56a4'}
          />
          <FileItemRow label={'File name:'} info={'example_file.txt'} />
          <FileItemRow label={'File size:'} info={'100Kb'} />
          <FileItemRow label={'File mime:'} info={'text/plain'} />
        </RowContainer>
        <InsertKeyRowStyled>
          <TitleStyled>Insert your encryption key:</TitleStyled>
          <div>
            <EncryptionInputStyled
              type="text"
              defaultValue="pTBydX1OncWG62XXgOifP"
            />
          </div>
        </InsertKeyRowStyled>
        <div>
          <BtnStyled>Decryption and download</BtnStyled>
        </div>
      </DownloadContainer>
    )
  }

  return (
    <GetterContainerStyled>
      <GetterTitleStyled>Insert your file id:</GetterTitleStyled>
      <div>
        <InputStyled
          width="312px"
          type="text"
          value="307f8f11-f51f-41a2-ba17-3e112dce56a4"
        />
      </div>
      <div>
        <BtnStyled>Get file</BtnStyled>
      </div>
    </GetterContainerStyled>
  )
}
