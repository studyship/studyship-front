import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
`

interface ITab {
  selected: boolean
}

const Tab = styled.button<ITab>`
  margin-right: 20px;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.41px;
  font-weight: ${(props: any) => (props.selected ? 'bold' : 'normal')};
  text-decoration-line: ${(props: any) =>
    props.selected ? 'underline' : 'none'};
  color: ${(props: any) => (props.selected ? '#333333' : '#B3B3B3')};

  background: none;
  color: inherit;
  border: none;
  padding: 0px;
  cursor: pointer;
  outline: inherit;
`

interface ITabs {
  index: number
  onChange: (arg: number) => void
}

const Tabs = ({ onChange, index }: ITabs) => {
  return (
    <Container>
      <Tab onClick={() => onChange(0)} selected={index === 0}>
        내가 만든 스터디
      </Tab>
      <Tab onClick={() => onChange(1)} selected={index === 1}>
        가입한 스터디
      </Tab>
      <Tab onClick={() => onChange(2)} selected={index === 2}>
        북마크
      </Tab>
    </Container>
  )
}

export default Tabs
