import React, { ReactNode, CSSProperties } from 'react'
import styled from 'styled-components'
import { fontStyles } from '../../../styles/variables'

interface IProps {
  children: ReactNode
  style?: CSSProperties | undefined
}

const HeadingStyled = styled.h1`
  max-width: 550px;
  ${fontStyles.heading}
`

const Heading = (props: IProps) => {
  const { children, style, ...rest } = props

  return (
    <HeadingStyled style={style} {...rest}>
      {children}
    </HeadingStyled>
  )
}

export default Heading
