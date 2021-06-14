window.onmessage = function (e) {
  // console.log(e)
  this.postMessage('hello from worker')
}
