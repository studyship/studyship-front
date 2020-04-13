export interface IFontStyles {
  type: 'bold' | 'normal' | 'thin'
  size?: string
}
export interface ITitle extends IFontStyles {
  text: string
  className?: string
}
