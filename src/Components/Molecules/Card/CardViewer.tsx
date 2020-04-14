import React from 'react'
import styled from 'styled-components'
import { Title } from 'src/Components/Atoms'
import { ITitle } from 'src/Components/Atoms/Title/types'
import { descriptionColor } from 'src/styles/Colors'

const Container = styled.div`
  flex: 0 0 auto;
  margin-bottom: 30px;
  padding: 27px 22px;
  width: 355px;
  height: 192px;
  border: 0.5px solid #e3e3e0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 0px 20px;
  :first-child,
  :last-child {
    margin-left: 0px;
  }

  @media screen and (max-width: 450px) {
    flex: 0 0 90%;
    display: flex;
    margin: 0px 10px;
    -webkit-overflow-scrolling: touch; /* 끝에서 바운스 되도록*/
    scroll-snap-type: x mandatory;
    scroll-snap-align: start;
  }
`
const STitle = styled(Title)`
  margin-bottom: 27px;
`
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
const CardDescription = styled.div`
  color: ${descriptionColor};
  font-size: 14px;
  margin: 14px 0px;
`

interface ICard {
  titleStyles: ITitle
}

const CardViewer = ({ titleStyles }: ICard) => {
  return (
    <Container>
      <Title
        type={titleStyles.type}
        text={titleStyles.text}
        size={titleStyles.size}
      />
      <DescriptionBox>
        <CardDescription>qwe</CardDescription>
        <CardDescription>asd</CardDescription>
        <CardDescription>zxc</CardDescription>
        <CardDescription>123</CardDescription>
      </DescriptionBox>
    </Container>
  )
}

export default CardViewer
