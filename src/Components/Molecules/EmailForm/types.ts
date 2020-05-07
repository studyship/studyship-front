export interface IEmailForm {
  handleNextStage: (nextTab: string) => void
}

export interface IEmailFormViewer extends IEmailForm {
  bindCheckbox: {
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
}
