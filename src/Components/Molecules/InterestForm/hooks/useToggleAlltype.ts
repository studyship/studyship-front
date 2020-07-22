import { useState } from 'react'
import { InterestListTypes } from 'src/@types'

export const useToggleAlltype = (initailState: Array<InterestListTypes>) => {
  const [initialOptions, setInitialOptions] = useState(initailState)

  const changeActivation = (choicedName: string) => {
    initialOptions.map((option) => {
      if (choicedName === option.category) {
        return {
          ...option,
          isActiveCategory: true,
        }
      } else {
        return option
      }
    })
  }
}
