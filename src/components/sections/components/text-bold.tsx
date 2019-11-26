import React, { ReactNode, CSSProperties } from 'react'
import styled from 'styled-components'
import { fontStyles } from '../../../styles/variables'

interface IProps {
  children: ReactNode
  style?: CSSProperties | undefined
}

const TextBoldStyled = styled.span`
  ${fontStyles.textBold}
`

const TextBold = (props: IProps) => {
  return <TextBoldStyled style={props.style}>{props.children}</TextBoldStyled>
}

export default TextBold
