export type PluseTypes = {
  isChoose: boolean | number
}

export type RotatePlusProps = {
  isChoose: boolean
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
