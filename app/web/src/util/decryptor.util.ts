const sjcl = require('sjcl')

export async function decryptor(info: string, key: string) {
  return await sjcl.decrypt(atob(key), atob(info))
}
