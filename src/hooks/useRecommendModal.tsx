import React from 'react'
import { useModalHandler, ModalTemplate } from '@devgw-react/blank-modal'
import { RecommendationModal } from 'src/Components/Organizations'

const useRecommendModal = () => {
  const {
    handleModalActive,
    handleModalInactive,
    isVisible,
  } = useModalHandler()
  const renderModal = (username: string) => {
    return (
      <ModalTemplate
        isVisible={isVisible}
        handleModalInactive={handleModalInactive}
      >
        <RecommendationModal
          username={username}
          handleModalInactive={handleModalInactive}
        />
      </ModalTemplate>
    )
  }
  return {
    handleModalActive,
    renderModal,
    isVisible,
  }
}

export default useRecommendModal
