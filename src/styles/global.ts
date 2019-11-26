import { createGlobalStyle, css } from 'styled-components'
import { colors } from './variables'

const style = css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&display=swap');

  html {
    font-family: 'Montserrat', sans-serif;
    color: ${colors.black};
  }
`

const Global = createGlobalStyle`
  ${style}
`

export default Global
