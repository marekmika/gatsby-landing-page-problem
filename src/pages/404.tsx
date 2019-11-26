import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout/layout'
import { injectIntl, IntlFormatters } from 'gatsby-plugin-intl'

const NotFoundPage = ({ intl }: IntlFormatters) => (
  <Layout>
    <h1>{intl.formatMessage({ id: 'notFoundPage.message404' })}</h1>
    <p>
      {intl.formatMessage({ id: 'notFoundPage.text1' })}{' '}
      <Link to="/">{intl.formatMessage({ id: 'notFoundPage.text2' })}</Link>
    </p>
  </Layout>
)

export default injectIntl(NotFoundPage)
