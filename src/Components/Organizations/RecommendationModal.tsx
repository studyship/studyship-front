import React from 'react'
import styled from 'styled-components'
import { useFillHeart } from 'src/hooks'
import { Button, NormalText, RowBox } from '../Atoms'
import { AccountModal } from '../Templates'

const Modal = styled(AccountModal)`
  width: 600px;
  height: 313px;
`
const HeartWrapper = styled(RowBox)`
  justify-content: space-between;
`
const Success = styled(Button)`
  border-radius: 33px;
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface RecommendationModalProps {
  handleModalInactive: VoidFunction
  username: string
}

const RecommendationModal = ({
  handleModalInactive,
  username,
}: RecommendationModalProps) => {
  const { renderFillHeart } = useFillHeart()
  return (
    <Modal handleModalInactive={handleModalInactive}>
      <Col>
        <RowBox marginBottom="8px">
          <NormalText fontSize="20px" text={username} fontColor="#60D3E0" />
          <NormalText fontSize="20px" text="님의 활동을 평가해주세요" />
        </RowBox>
        <NormalText
          fontSize="15px"
          text="(아래 완료 버튼을 눌러야 최종 반영이 됩니다)"
          fontColor="#B3B3B3"
        />
        <HeartWrapper marginTop="28px" marginBottom="31px" width="436px">
          {renderFillHeart()}
        </HeartWrapper>
        <Success
          bgColor="#60D3E0"
          width="160px"
          height="48px"
          text="평가하기"
          fontColor="#fff"
        />
      </Col>
    </Modal>
  )
}

export default RecommendationModal
