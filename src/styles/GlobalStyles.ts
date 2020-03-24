import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

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
        min-height:1000px;
        background-color: black;
        color:white;
    }
`

export default globalStyle
