import React, { ReactNode, CSSProperties } from 'react'
import styled from 'styled-components'
import { fontStyles } from '../../../styles/variables'

interface IProps {
  children: ReactNode
  style?: CSSProperties | undefined
}

const TextStyled = styled.div`
  max-width: 480px;
  padding-top: 24px;
  ${fontStyles.text}
`

const Text = (props: IProps) => {
  return <TextStyled style={props.style}>{props.children}</TextStyled>
}

export default Text
