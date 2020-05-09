interface ISubTitleProps {
  horizontal: string
}

export interface TAccountModal extends ISubTitleProps {
  children: React.ReactNode
  handleModalInactive: () => void
  title: string | Array<string>
  subTitle: string
}
