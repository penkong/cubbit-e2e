import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

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
  const ref = useRef<any>()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(file)
  }, [])

  const onFileUpload = async () => {
    const fileForUpload = new FormData()
    fileForUpload.append('mkl', file![0], file![0].name)
    console.log(fileForUpload)
    // dispatch(name, fileforupload)
  }

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setFile(e.target.files)
  }

  return (
    <>
      <SubHeaderStyled>
        {STR.title1}
        <p>{STR.title2}</p>
      </SubHeaderStyled>
      <UploaderStyled>
        <section>
          <p></p>
          <button type="button"></button>
          <label htmlFor="filePicker">{STR.choose}</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg>
          <input
            id="filePicker"
            type="file"
            ref={ref}
            style={{ visibility: 'hidden' }}
            onChange={onFileChange}
          />
        </section>
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
