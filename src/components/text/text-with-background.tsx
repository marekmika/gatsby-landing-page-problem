import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../styles/variables'

export const textBackgroundStyles = css`
  position: relative;

  padding-left: 5px;
  padding-right: 5px;
  margin-right: 4px;

  color: ${colors.light};
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: ${colors.dark};
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -4px;
    bottom: 0;
    width: 2px;

    background-color: ${colors.dark};
    z-index: -1;
  }
`

const Text = styled.span`
  ${textBackgroundStyles}
`

interface IProps {
  children: ReactNode
}

const TextWithBackground = (props: IProps) => {
  const { children } = props
  return <Text>{children}</Text>
}

export default TextWithBackground
