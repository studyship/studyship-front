import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { mainColorBlack, backgroundColor } from './Colors'
import 'antd/dist/antd.css'

const globalStyle = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:14px;
        font-weight:normal;
        min-height:1000px;
        background-color: ${backgroundColor};
        color:${mainColorBlack};
    }
    @font-face { font-family: 'DM Sans'; src: url('./fonts/DMSans-Bold.ttf') format('font-woff'); font-weight: normal; font-style: normal; unicode-range:U+0041-005A, U+0061-007A; }
    @font-face { font-family: 'DM Sans'; src: url('./fonts/DMSans-Regular.ttf') format('font-woff'); font-weight: normal; font-style: normal; unicode-range:U+0041-005A, U+0061-007A; }
    @font-face { font-family: 'DM Sans'; src: url('./fonts/DMSans-Medium.ttf') format('font-woff'); font-weight: normal; font-style: normal; unicode-range:U+0041-005A, U+0061-007A; }
    @font-face { font-family: 'Noto Sans KR'; src: url('./fonts/NotoSansKR-Bold.woff') format('font-woff'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'Noto Sans KR'; src: url('./fonts/NotoSansKR-Regular.woff') format('font-woff'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'Noto Sans KR'; src: url('./fonts/NotoSansKR-Thin.woff') format('font-woff'); font-weight: normal; font-style: normal; }
`

export default globalStyle
