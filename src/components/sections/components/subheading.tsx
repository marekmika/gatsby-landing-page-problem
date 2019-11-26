import React, { ReactNode, CSSProperties } from 'react'
import styled from 'styled-components'
import { fontStyles } from '../../../styles/variables'

interface IProps {
  children: ReactNode
  style?: CSSProperties | undefined
}

const SubHeadingStyled = styled.h1`
  max-width: 480px;
  ${fontStyles.subheading}
`

const SubHeading = (props: IProps) => {
  return <SubHeadingStyled style={props.style}>{props.children}</SubHeadingStyled>
}

export default SubHeading
