import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { mainColorBlack } from './Colors'

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
        background-color: #F8F9FA;
        color:${mainColorBlack};
    }
    @font-face { font-family: 'DM Sans'; src: url('./fonts/DMSans-Bold.ttf') format('truetype'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'DM Sans'; src: url('./fonts/DMSans-Regular.ttf') format('truetype'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'DM Sans'; src: url('./fonts/DMSans-Medium.ttf') format('truetype'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'Noto Sans KR'; src: url('./fonts/NotoSansKR-Bold.woff') format('font-woff'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'Noto Sans KR'; src: url('./fonts/NotoSansKR-Regular.woff') format('font-woff'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'Noto Sans KR'; src: url('./fonts/NotoSansKR-Thin.woff') format('font-woff'); font-weight: normal; font-style: normal; }

    *:lang(en) { 
    font-family: Noto Sans KR; 
    } 
    *:lang(ko) { 
    font-family: DM Sans; 
    } 
`

export default globalStyle
