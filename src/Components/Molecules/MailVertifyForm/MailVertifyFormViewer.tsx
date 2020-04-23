import React from 'react'
import styled, { keyframes } from 'styled-components'
import { mainColorBlue } from 'src/styles/Colors'
import onlyShipBigLogo from 'src/styles/icons/ss_logo_only_ship_big.png'
import { Icon, ThinText, NormalText } from 'src/Components/Atoms'
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const animate = keyframes`
    0%{
        left:-8px;
    }
    100%{
        left:-30px
    }
`
const Loader = styled.div`
  width: 200px;
  height: 60px;
  color: transparent;
  overflow: hidden;
  &:before {
    content: 'loaderloaderloaderloader';
    position: relative;
    top: -40px;
    font-size: 3.5em;
    text-decoration-style: wavy;
    text-decoration-color: ${mainColorBlue};
    text-decoration-line: underline;
    animation: ${animate} 1s linear infinite;
  }
`
const Logo = styled.div`
  width: 210px;
  height: 110px;
`
const Email = styled(ThinText)`
  margin-bottom: 28px;
`
const Info = styled(NormalText)`
  margin-bottom: 5px;
`

const MailVertifyFormViewer = () => {
  return (
    <Container>
      <Logo>
        <Icon imgSrc={onlyShipBigLogo} />
      </Logo>
      <Loader />
      <Email fontSize="24px" text="doscm164@naver.com" />
      <Info fontSize="18px" text="메일 인증을 완료해주세요!" />
      <Info fontSize="18px" text="인증 완료하고 스터디쉽 100% 즐기기 :)" />
    </Container>
  )
}

export default MailVertifyFormViewer
