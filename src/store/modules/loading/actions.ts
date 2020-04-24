import { createAction } from 'typesafe-actions'

export const START = 'loading/START'
export const FINISH = 'loading/FINISH'

export const startLoading = createAction(START)<string>()
export const finishLoading = createAction(START)<string>()
