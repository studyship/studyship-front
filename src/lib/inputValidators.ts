const inputLengthLimits = (limitsLength: number) => {
  return (inputValue: string) => {
    return inputValue.length < limitsLength + 1
  }
}

const onlyNumberValidator = (text: string) => {
  const regex = /[^0-9|\n]/g
  return !regex.test(text)
}

export default { inputLengthLimits, onlyNumberValidator }
