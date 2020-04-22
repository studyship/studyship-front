const deleteSelectedItemInArray = (
  array: Array<any>,
  selectedIndex: number,
) => {
  const updateArray = array.filter((item, index) => index !== selectedIndex)
  return updateArray
}

export default deleteSelectedItemInArray
