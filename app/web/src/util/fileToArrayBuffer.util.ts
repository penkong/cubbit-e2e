export function fileToArrayBuffer(
  file: File
): Promise<string | ArrayBuffer | null> {
  return new Promise(function (resolve, reject) {
    const reader = new FileReader()

    reader.onerror = function onerror(e) {
      reject(e.target!.error)
    }

    reader.onload = function onload(e) {
      resolve(e.target!.result)
    }

    // if crpyto-js bug fix we can leverage array buffer and
    // encrypt other formats like jpeg and pdf and ...
    // reader.readAsArrayBuffer(file)

    reader.readAsDataURL(file)
  })
}
