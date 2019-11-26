import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Weight = 300 | 600 | 700

interface IProps {
  children: ReactNode
  weight?: Weight | undefined
}

const Text = styled.span<{ weight: Weight | undefined }>`
  font-weight: ${props => props.weight || 'bold'};
`

const TextWithWeight = (props: IProps) => {
  const { children, weight } = props
  return <Text weight={weight}>{children}</Text>
}

export default TextWithWeight
