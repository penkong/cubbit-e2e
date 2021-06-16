const sjcl = require('sjcl')

export async function ecnryptor(info: string | ArrayBuffer, key: string) {
  let parameters = { iter: 1000 }
  let rp = {}
  const dkey = atob(key)
  await sjcl.misc.cachedPbkdf2(dkey, parameters)
  // produce cipherTextJson
  return btoa(await sjcl.encrypt(dkey, info, parameters, rp))
}

//
//
//
//
//
//
//
//                THIS CRYPTO-JS CURRENTLY DOES NOT WORK WITH WEBPACK 5 CURRENTLY
//

// let crypto: any
// try {
//   crypto = require('crypto-js')
// } catch (err) {
//   console('crypto support is disabled!')
// }
// import CryptoJS from 'crypto-js'
// const CryptoJS = require('crypto-js')
// import crypto from 'crypto-browserify'
// import * as sha256 from 'crypto-js/sha256'
// import CryptoJS from 'crypto-js'
// import HmacMD5 from "crypto-js/hmac-md5";
// import CryptoJS from "crypto-js/core";
// import Base64 from "crypto-js/enc-base64";
// import Utf8 from "crypto-js/enc-utf8";
// import AES from "crypto-js/aes";

// export async function ecnryptor(info: string | ArrayBuffer, key: string) {
//   const value = 'mkz'
//   return await CryptoJS(value)()
// }
