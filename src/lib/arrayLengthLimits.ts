const arrayLengthLimits = (array: Array<any>, limitsLength: number) => {
  return array.filter((item, index) => index < limitsLength)
}
export default arrayLengthLimits
