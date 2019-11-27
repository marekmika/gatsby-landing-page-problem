import React, { ReactNode, CSSProperties, useState, useEffect } from 'react'
import styled from 'styled-components'

interface IProps {
  id?: string
  style?: CSSProperties | undefined
  className?: string | undefined
  children: ReactNode
}

const Row = styled.div`
  display: flex;
  width: 100%;
`

const SimpleRow = (props: IProps) => {
  const { children, ...rest } = props

  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  return render && <Row {...rest}>{children}</Row>
}

export default SimpleRow
