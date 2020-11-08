import React, { FunctionComponentElement } from 'react'
import { CheckRow } from 'src/Components/Molecules'
import { useInputCheckbox } from '.'

type Type = Array<{ id: string; content: string; createdAt: string }>
const useRenderCheckbox = (checkList: Type) => {
  const binds = checkList.map((list) => useInputCheckbox(false).bind)

  const renderCheckbox = () => {
    return checkList.map((list, i) => (
      <CheckRow bindCheckbox={binds[i]} key={list.id} {...list} />
    ))
  }
  const checkedValue = binds.map((bind) => bind.checked)
  return { checkedValue, renderCheckbox }
}

export default useRenderCheckbox
