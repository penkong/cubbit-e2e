import { useWorker } from '@koale/useworker'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'

// import { useDispatch } from 'react-redux'

import {
  BtnStyled,
  BtnRowStyled,
  UploaderStyled,
  SubHeaderStyled
} from './UploadDownload.styled'
import {
  allStringFormats,
  ecnryptor,
  fileToArrayBuffer,
  history,
  makeKey
} from '../../../util'
import { useDispatch } from 'react-redux'

// ---

interface IFile {
  name: string
  mime: string
  size: string
  key: string
}

// ---

export const UploadDownload = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const forDrop = useRef<any>()

  const [inLoading, setInLoading] = useState(false)

  const [file, setFile] = useState<IFile>()
  const [info, setInfo] = useState<string | ArrayBuffer | null | undefined>()

  // --- web worker
  const [hashWorker] = useWorker(ecnryptor, {
    remoteDependencies: [
      'https://cdnjs.cloudflare.com/ajax/libs/sjcl/1.0.8/sjcl.js'
    ]
  })

  // ---

  useEffect(() => {
    if (forDrop) {
      let div = forDrop.current
      div.addEventListener('dragover', handleDrag)
      div.addEventListener('drop', handleDrop)
      return () => {
        div.removeEventListener('dragover', handleDrag)
        div.removeEventListener('drop', handleDrop)
      }
    }
    console.log(inLoading)
  }, [t, inLoading])

  // ---

  const handleDrag = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer.files && setFile(e.dataTransfer.files)
  }

  const onFileChange = async (f: File) => {
    //

    setFile({
      name: file?.name!,
      size: file?.size!,
      mime: file?.mime!,
      key: makeKey() // base64
    })

    if (window.File && window.FileReader && window.FileList && window.Blob)
      setInfo(await fileToArrayBuffer(f))
  }

  const onFileUpload = async () => {
    // dispatchEvent()
    try {
      const hashed = await hashWorker(info!, file?.key!)
      console.log(hashed)
      // diapatch({ ...file! , info: hashed})
    } catch (error) {
      console.log(error)
    }
  }

  // ---

  return (
    <>
      <SubHeaderStyled>{t('adver')}</SubHeaderStyled>

      <UploaderStyled>
        <div className="droparea" ref={forDrop}>
          {inLoading ? (
            <div>helfdsf</div>
          ) : (
            (!file && !inLoading && (
              <>
                <input
                  type="file"
                  id="filePicker"
                  accept={`text/*,.txt,.json,.ts,.js,.tsx,.cpp,.h,.csv,.doc,.docx,
                  application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
                  application/vnd.ms-excel,${allStringFormats.join(',')}`}
                  onChange={e => {
                    setInLoading(true)
                    onFileChange(e.target.files![0])
                    setInLoading(false)
                  }}
                />
                <label htmlFor="filePicker" className="button">
                  <img src="/files/dl.png" alt="download" />
                  <div>{t('choose')}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                  </svg>
                </label>
                <p>or drop files here up to 500MB</p>
              </>
            )) ||
            (file && !inLoading && (
              <div className="readyforhash">
                <img src="/files/readyforhash.png" alt="ready for upload" />
                <div>{file ? 'sdfsd' : null}</div>
                {file && (
                  <div
                    style={{
                      backgroundColor: '#292929',
                      fontSize: '11px',
                      letterSpacing: '1.5px',
                      cursor: 'pointer',
                      color: 'white',
                      padding: '3px 6px'
                    }}
                    onClick={() => {
                      file && setFile(undefined)
                    }}
                  >
                    remove
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </UploaderStyled>

      <BtnRowStyled>
        <BtnStyled
          upload
          onClick={onFileUpload}
          disabled={file === undefined ? true : false}
        >
          Encrypt and upload
        </BtnStyled>
        <BtnStyled
          onClick={() => {
            history.push('/getter')
          }}
        >
          Download and decrypt
        </BtnStyled>
      </BtnRowStyled>
    </>
  )
}
