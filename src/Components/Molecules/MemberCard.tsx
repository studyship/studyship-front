import React from 'react'
import styled from 'styled-components'
import { useRecommendModal } from 'src/hooks'
import { Button, NormalText } from '../Atoms'
import Thumbnail, { ThumbnailProps } from './Thumbnail'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px 0px;
  width: 160px;
  height: 210px;
  background-color: #fff;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
`
const Recommend = styled(Button)`
  border: 1px solid #60d3e0;
  border-radius: 33px;
`

interface MemberCardProps extends ThumbnailProps {
  recommendation: boolean
}
const MemberCard = ({ recommendation, username }: MemberCardProps) => {
  const { handleModalActive, renderModal } = useRecommendModal()
  return (
    <Container>
      {renderModal(username)}
      <Thumbnail username={username} />
      {recommendation ? (
        <Recommend
          width="88px"
          height="28px"
          text="추천 하기"
          bgColor="#fff"
          fontColor="#60D3E0"
          marginTop="9px"
          onClick={handleModalActive}
        />
      ) : (
        <NormalText text="평가 완료" fontSize="18px" />
      )}
    </Container>
  )
}

export default MemberCard
