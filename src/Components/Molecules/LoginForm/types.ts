export interface ILoginForm {
  handleNextStage: (tab: string) => void
  handleModalInactive: () => void
}

export interface ILoginFormViewer extends ILoginForm {
  bindCheckbox: {
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
  handleSubmit: () => void
}
