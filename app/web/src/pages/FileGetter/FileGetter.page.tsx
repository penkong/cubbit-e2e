import { useEffect, useState } from 'react'

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

import { readyDownloadSelector } from '../../store'
import { CuteSpinner, FileItemRow } from '../../components'
import { useActions, useTypedSelector } from '../../hooks/'

// ---

export const FileGetter = () => {
  //

  const { E2EClearStoreAction, E2EGetFileInfoAction } = useActions()
  const { fileId: fid, mime, name, size } = useTypedSelector(
    readyDownloadSelector
  )

  const [loading, setLoading] = useState(false)

  const [f, setF] = useState<{ fileId: string }>()

  useEffect(() => {
    E2EClearStoreAction()
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setF({ fileId: e.target.value.toString() })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    f && E2EGetFileInfoAction(f)
  }

  if (fid || mime || name || size) {
    return (
      <DownloadContainer>
        <RowContainer>
          <FileItemRow label={'File id:'} info={fid} />
          <FileItemRow label={'File name:'} info={name} />
          <FileItemRow label={'File size:'} info={size} />
          <FileItemRow label={'File mime:'} info={mime} />
        </RowContainer>
        <InsertKeyRowStyled>
          <TitleStyled>Insert your encryption key:</TitleStyled>
          <div>
            <EncryptionInputStyled
              type="text"
              placeholder="please enter your key here!"
            />
          </div>
        </InsertKeyRowStyled>
        <div>
          <BtnStyled>Decryption and download</BtnStyled>
        </div>
      </DownloadContainer>
    )
  }

  if (loading) return <CuteSpinner />

  return (
    <form onSubmit={onSubmit}>
      <GetterContainerStyled>
        <GetterTitleStyled>Insert your file id:</GetterTitleStyled>
        <div>
          <InputStyled
            onChange={onChange}
            name="fileId"
            width="312px"
            type="text"
            placeholder="please insert your file id!"
          />
        </div>
        <div>
          <BtnStyled type="submit">Get file</BtnStyled>
        </div>
      </GetterContainerStyled>
    </form>
  )
}
