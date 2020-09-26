const increaseArrayLenght = (array: Array<any>, increaseVolumn: number) => {
  const increaseArray = [...array]
  let index = 0
  while (increaseVolumn - array.length > index) {
    increaseArray.push(undefined)
    index++
  }
  return increaseArray
}

export default increaseArrayLenght
