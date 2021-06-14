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

    // reader.readAsArrayBuffer(file)
    reader.readAsBinaryString(file)
  })
}
