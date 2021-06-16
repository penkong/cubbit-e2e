/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useWorker } from '@koale/useworker'
import { useEffect, useState } from 'react'

import {
  InputStyled,
  TitleStyled,
  RowContainer,
  GetterTitleStyled,
  DownloadContainer,
  InsertKeyRowStyled,
  EncryptionInputStyled,
  GetterContainerStyled,
  BtnStyledF
} from './FileGetter.styled'

import { decryptor } from '../../util'
import { readyDownloadSelector } from '../../store'
import { CuteSpinner, FileItemRow } from '../../components'
import { useActions, useTypedSelector } from '../../hooks/'

const toFile = require('data-uri-to-file')

// ---

export const FileGetter = () => {
  //
  const [loading, setLoading] = useState(false)

  const [f, setF] = useState<{ fileId: string }>()

  const [k, setK] = useState<{ encKey: string }>()

  const { E2EClearStoreAction, E2EGetFileInfoAction } = useActions()

  const { fileId: fid, mime, name, size } = useTypedSelector(
    readyDownloadSelector
  )

  // ---

  // web worker for decryption :)
  const [decryptWorker] = useWorker(decryptor, {
    remoteDependencies: [process.env.REACT_APP_SJCL!]
  })

  // clear store on load up .
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

  const downloadURL = (data: any, fileName: any) => {
    const a = document.createElement('a')
    a.href = data
    a.download = fileName
    document.body.appendChild(a)
    a.style.display = 'none'
    a.click()
    a.remove()
  }

  const onDownload = async (e: any) => {
    e.preventDefault()

    const res = await axios.get('/v1/files/static/' + f?.fileId)

    const decrpytedMsg = await decryptWorker(res.data, k?.encKey!)

    toFile(decrpytedMsg).then((file: any) => {
      const blob = new Blob([file.data], {
        type: file.mimeType
      })
      const url = window.URL.createObjectURL(blob)
      downloadURL(url, name)
      setTimeout(() => window.URL.revokeObjectURL(url), 1000)
    })
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
              name="encKey"
              onChange={e => {
                setK({ encKey: e.target.value.toString() })
              }}
            />
          </div>
        </InsertKeyRowStyled>
        <div>
          <BtnStyledF onClick={onDownload}>Decryption and download</BtnStyledF>
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
          <BtnStyledF type="submit">Get file</BtnStyledF>
        </div>
      </GetterContainerStyled>
    </form>
  )
}
