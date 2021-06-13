import { useEffect, useRef, useState } from 'react'
import { RemoveIcon } from '../..'
// import { useDispatch } from 'react-redux'

import { history } from '../../../util'
import {
  BtnStyled,
  BtnRowStyled,
  UploaderStyled,
  SubHeaderStyled
} from './UploadDownload.styled'

// ---

const STR = {
  title1: 'Advnced online file encryption and decryption.',
  title2: 'Secure any file type and maintain your privcy!',
  choose: 'Choose file!',
  btnEnc: 'Encrypt and upload',
  btnDl: 'Download and decrypt'
}

export const UploadDownload = () => {
  const [file, setFile] = useState<FileList>()
  const forDrop = useRef<any>()
  // const dispatch = useDispatch()

  useEffect(() => {
    let div = forDrop.current
    div.addEventListener('dragover', handleDrag)
    div.addEventListener('drop', handleDrop)
    return () => {
      div.removeEventListener('dragover', handleDrag)
      div.removeEventListener('drop', handleDrop)
    }
  }, [file])

  const handleDrag = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer.files && setFile(e.dataTransfer.files)
  }

  const onFileUpload = async () => {
    const fd = new FormData()
    fd.append('mkl', file![0], file![0].name)
    console.log(fd)
    // dispatch(name, fileforupload)
  }

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setFile(e.target.files)
  }

  return (
    <>
      <SubHeaderStyled>
        {STR.title1}
        {STR.title2}
      </SubHeaderStyled>

      <UploaderStyled>
        <div className="droparea" ref={forDrop}>
          {!file ? (
            <>
              <input
                type="file"
                id="filePicker"
                multiple
                accept="image/*"
                onChange={onFileChange}
              />
              <label htmlFor="filePicker" className="button">
                <img src="/files/dl.png" alt="download" />
                <div>Choose file!</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                </svg>
              </label>
              <p>or drop files here</p>
            </>
          ) : (
            <div className="readyforhash">
              <img src="/files/readyforhash.png" alt="ready for upload" />
              <div>{file[0].name}</div>
              <div
                onClick={() => {
                  setFile(undefined)
                }}
              >
                <RemoveIcon />
              </div>
            </div>
          )}
        </div>
      </UploaderStyled>
      <BtnRowStyled>
        <BtnStyled
          upload
          onClick={onFileUpload}
          disabled={file === undefined ? true : false}
        >
          {STR.btnEnc}
        </BtnStyled>
        <BtnStyled
          onClick={() => {
            history.push('/getter')
          }}
        >
          {STR.btnDl}
        </BtnStyled>
      </BtnRowStyled>
    </>
  )
}
