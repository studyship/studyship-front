import React, { useState } from 'react'
import styled from 'styled-components'
import { HorizontalBar, NormalText } from '.'
import { ReactComponent as UpDownIcon } from 'src/styles/icons/ss_dropdown_arrow.svg'

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
`
const MenuWrapper = styled.div<{ enabled: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 120px;
  background-color: #fff;
  cursor: ${({ enabled }) => enabled && 'pointer'};
`
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0px;
`
const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 100px;
  margin-top: 30px;
  background-color: #ccc;
  overflow-y: auto;
`
const Sentence = styled.div``
type ContentType = {
  id: number
  name: string
  value: unknown
}
interface DropdownProps {
  onClick: (value: unknown) => void
  isOpen?: boolean
  contents: ContentType[]
  placeholder?: string
  defaultActiveIndex?: number
  enabled?: boolean
}

const DropdownMenu = ({
  onClick,
  isOpen = false,
  contents,
  placeholder = '메뉴 선택',
  defaultActiveIndex,
  enabled = true,
}: DropdownProps) => {
  const [selectedMenu, setSelectedMenu] = useState('')
  return (
    <Dropdown>
      <MenuWrapper enabled={enabled}>
        <Menu>
          <NormalText
            text={selectedMenu.length > 0 ? selectedMenu : placeholder}
            fontSize="15px"
            fontColor="#cccccc"
          />
          <UpDownIcon fill={enabled ? 'black' : '#b3b3b3'} />
        </Menu>
        <HorizontalBar color="#b3b3b3" />
      </MenuWrapper>
      {isOpen && (
        <Content>
          {contents.map(({ name, value, id }) => (
            <Sentence
              key={id}
              onClick={() => {
                setSelectedMenu(name)
                onClick(value)
              }}
            >
              {name}
            </Sentence>
          ))}
        </Content>
      )}
    </Dropdown>
  )
}

export default DropdownMenu
