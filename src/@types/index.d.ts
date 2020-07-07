export type RotatePlusProps = {
  isChoose?: boolean
  plusColor?: string
  closeColor?: string
  size?: string
}
export interface IUnit {
  cursorType?: 'default' | 'pointer'
  isActive: number
  isBorderStyle?: number
}

export interface List {
  groupName: string
  groupItems: Array<GroupItem>
}

export interface GroupItem {
  type: string
  isActiveItem: boolean
}

export interface InterestListTypes {
  isActiveCategory: boolean
  category: string
  list: Array<List>
}

export interface HandleNextStageType {
  handleNextStage: (nextTab: string) => void
}

// top arrow tooltip
export interface TooltipProps extends TooltipStyleProps {
  children: React.ReactChild
  direction?: 'up' | 'left' | 'down' | 'right'
}
export type TooltipStyleProps = {
  bgColor?: string
  borderRadius?: string
}

// AccountChoiceFormProps
export interface AccountChoiceFormProps {
  handleNextStage: (nextTab: string) => void
}

// account modal tab types
export type TabTypes = {
  title?: string | Array<string>
  subTitle?: string
  horizontal?: string
  tab: string
  form: React.ReactNode
}

// text input handler
export type InputBinder = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// textarea input handler
export type TextAreaBinder = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

/// style props

// margin
export type MarginStyleProps = {
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
}
// padding
export type PaddingStyleProps = {
  paddingTop?: string
  paddingBottom?: string
  paddingLeft?: string
  paddingRight?: string
}
// tab options type
export type TabOptionTypes = {
  [key: string]: any
  id: number
  isSeleted: boolean
}
// selectbox types
export type SelectedBoxOptionTypes = {
  value: string
  label: string
}
export type SelectBoxOptionTypes = Array<SelectedBoxOptionTypes>
// seletBox binder
export type SeletBoxBinderTypes = {
  onChange: (selectedOption: SelectedBoxOptionTypes) => void
  value: SelectedBoxOptionTypes
}
