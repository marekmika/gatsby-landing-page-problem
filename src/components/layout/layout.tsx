import React, { ReactNode } from 'react'
import Global from '../../styles/global'
import Reset from '../../styles/reset'
import SEO from '../seo'
import Header from '../header'

interface IProps {
  children: ReactNode
}

const Layout = (props: IProps) => {
  const { children } = props

  return (
    <>
      <Header />
      <SEO />
      <Reset />
      <Global />
      <main style={{ overflow: 'hidden' }}>{children}</main>
    </>
  )
}

export default Layout
