export interface ISelfIntroduceForm {
  handleNextStage: (nextTab: string) => void
}

type TBind = {
  onChange: (e: React.ChangeEvent<any>) => void
  value: string
}

export interface ISelfIntroduceFormViewer extends ISelfIntroduceForm {
  bind: TBind
}
