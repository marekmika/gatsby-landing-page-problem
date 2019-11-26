import React, { CSSProperties, ReactElement } from 'react'
import styled from 'styled-components'
import GrandientLine from './grandient-line'
import Subheading from './subheading'
import Heading from './heading'

interface ContainerIProps {
  text: ReactElement
  style?: CSSProperties | undefined
  heading?: string
  subheading?: string
  marginTop: string
}

const ContainerStyled = styled.div<{ marginTop: string }>`
  width: 100%;
  position: relative;
  margin-top: ${props => props.marginTop};
  z-index: 2;
`

const Container = (props: ContainerIProps) => {
  const { subheading, marginTop, heading, text, ...rest } = props
  return (
    <ContainerStyled {...props} marginTop={marginTop} {...rest}>
      {subheading && <Subheading>{subheading}</Subheading>}
      {heading && <Heading>{heading}</Heading>}
      <GrandientLine />
      {text}
    </ContainerStyled>
  )
}

export default Container
