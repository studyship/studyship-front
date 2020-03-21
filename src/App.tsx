import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

function App() {
  const handlePresenter = (sampleArg: string): string => {
    return sampleArg
  }
  return <Container>{handlePresenter('HELLOW')}</Container>
}

export default App
