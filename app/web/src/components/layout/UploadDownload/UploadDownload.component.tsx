import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
// import { useDispatch } from 'react-redux'

import { history } from '../../../util'
import {
  BtnStyled,
  BtnRowStyled,
  UploaderStyled,
  SubHeaderStyled
} from './UploadDownload.styled'

// import fs from 'fs'
// import { sl } from './sl.txt'
// const CryptoJS = require('crypto-js')
// const crypto = require('crypto-browserify')
// import * as sha256 from 'crypto-js/sha256'
const sjcl = require('sjcl')
// ---

async function encrypter(info: any) {
  // const ENCRYPTION_KEY = '12345678901234567890123456789012' // Must be 256 bits (32 characters)
  // const IV_LENGTH = 16 // For AES, this is always 16
  // let iv = crypto.randomBytes(IV_LENGTH)
  // console.log(1)
  // let cipher = crypto.createCipheriv(
  //   'aes-256-cbc',
  //   Buffer.from(ENCRYPTION_KEY),
  //   iv
  // )
  // console.log(2)
  // // console.log(info)
  // let encrypted = cipher.update(info)
  // console.log(3)

  // encrypted = Buffer.concat([encrypted, cipher.final()])

  // return iv.toString('hex') + ':' + encrypted.toString('hex')
  // console.log(info)
  // return await crypto.AES.encrypt(
  //   JSON.stringify('fsdfsdfsdfsdf'),
  //   'my-secret-key@123'
  // ).toString()

  var password = 'password'
  // var text = 'my secret text'
  var parameters = { iter: 1000 }
  var rp = {}
  var cipherTextJson = {}

  await sjcl.misc.cachedPbkdf2(password, parameters)
  // await sjcl.encrypt(password, text, parameters, rp)
  console.log(1)

  cipherTextJson = await sjcl.encrypt(password, info, parameters, rp)
  console.log(2)
  console.log(cipherTextJson)
  // var decryptedText = await sjcl.decrypt(password, cipherTextJson)
  // console.log(decryptedText)
}

const STR = {
  title1: 'Advnced online file encryption and decryption.',
  title2: 'Secure any file type and maintain your privcy!',
  choose: 'Choose file!',
  btnEnc: 'Encrypt and upload',
  btnDl: 'Download and decrypt'
}

export const UploadDownload = () => {
  const forDrop = useRef<any>()
  const [file, setFile] = useState<string | ArrayBuffer | null | undefined>()

  const { t } = useTranslation()

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
  }, [t, file])

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
    try {
      // const fd = new FormData()
      // fd.append('mkl', file![0], file![0].name)
      // console.log(fd)
      // dispatch(name, fileforupload)
      // fileData.readAsText(file)
      // console.log(fileData)
      console.log(await encrypter(file))
    } catch (error) {
      console.log(error)
    }
  }

  // const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const onFileChange = (filed: File) => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      let fileData = new FileReader()
      fileData.onloadend = function (e) {
        // setFile(e.target?.result)
        const c = fileData.result
        setFile(c)
      }
      fileData.readAsText(filed)
    }
  }

  return (
    <>
      <SubHeaderStyled>{t('adver')}</SubHeaderStyled>

      <UploaderStyled>
        <div className="droparea" ref={forDrop}>
          {!file ? (
            <>
              <input
                type="file"
                id="filePicker"
                // accept=""
                onChange={e => onFileChange(e.target.files![0])}
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
              <p>or drop files here</p>
            </>
          ) : (
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
                    file && setFile(null)
                  }}
                >
                  remove
                </div>
              )}
            </div>
          )}
        </div>
      </UploaderStyled>
      {/* <button onClick={() => {}}>sssssslllllllllllllllllllllll</button> */}

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
