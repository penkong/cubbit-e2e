import { useWorker } from '@koale/useworker'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'

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
import { useActions } from '../../../hooks'

// ---

// ---

export const UploadDownload = () => {
  //

  const { t } = useTranslation()

  const { E2EFileMetaAction, E2ESendHashedAction } = useActions()

  const forDrop = useRef<any>()

  const [inLoading, setInLoading] = useState(false)

  const [file, setFile] = useState<File>()

  const [data, setData] = useState<string | ArrayBuffer | null | undefined>()

  // --- web worker

  const [hashWorker] = useWorker(ecnryptor, {
    remoteDependencies: [
      'https://cdnjs.cloudflare.com/ajax/libs/sjcl/1.0.8/sjcl.js'
    ]
  })

  // ---

  // both onFileChange and handleDrop use this function as DRY.
  const fileHandler = async (f: File) => {
    setInLoading(true)

    setFile(f)
    E2EFileMetaAction(f)

    if (window.File && window.FileReader && window.FileList && window.Blob)
      // because of crypto-js problem with webpack 5 it currently read to text
      // not ArrayBuffer . check public/files/ -> there is snap shot there.
      setData(await fileToArrayBuffer(f))

    setInLoading(false)
  }

  // ----

  const handleDrag = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()

    const f = e.dataTransfer.files[0]

    f && (await fileHandler(f))
  }

  const onFileChange = async (f: File) => await fileHandler(f)

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
  }, [t])

  // ---

  const onFileUpload = async () => {
    try {
      const key = makeKey()

      E2ESendHashedAction({ hashed: await hashWorker(data!, key), key })

      //
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
                    onFileChange(e.target.files![0])
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
                <div>{file ? file.name : null}</div>
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
