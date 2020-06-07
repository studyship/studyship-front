import React from 'react'
import styled from 'styled-components'

import { Button } from '..'

const SocialLoginButton = styled(Button)`
  margin-bottom: 10px;
  border-radius: 33px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  color: black;
  font-weight: bold;
  font-size: 14px;
`

type SocialLoginButtonProps = {
  text: string
  imgSrc: string
}

const SocialLoginButtonViewer = ({ text, imgSrc }: SocialLoginButtonProps) => (
  <SocialLoginButton text={text} imgSrc={imgSrc} />
)

export default SocialLoginButtonViewer
