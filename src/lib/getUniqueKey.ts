import { v5 as uuidv5 } from 'uuid'

const getUniqueKey = (index: number | string) => {
  const uniqueKey = uuidv5(`${index}`, uuidv5.DNS)
  return uniqueKey
}

export default getUniqueKey
