export default function toDataURL(src: string, callback?: (dataURL: string) => void, outputFormat?: string) {
  const img = new Image()
  img.crossOrigin = 'Anonymous'
  img.onload = function (this: HTMLImageElement & { naturalHeight: number; naturalWidth: number }) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    let dataURL: string | undefined
    if (ctx) {
      canvas.height = this.naturalHeight
      canvas.width = this.naturalWidth
      ctx.drawImage(this, 0, 0)
      dataURL = canvas.toDataURL(outputFormat)
    }
    if (dataURL) {
      callback(dataURL)
      return dataURL
    }
  }
  img.src = src
  if (img.complete || img.complete === undefined) {
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='
    img.src = src
  }
}
