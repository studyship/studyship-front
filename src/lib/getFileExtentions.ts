const getFileExtentions = (fileSrc: string) => {
  const extentions = fileSrc.split('.')
  return extentions[extentions.length - 1]
}

export default getFileExtentions
