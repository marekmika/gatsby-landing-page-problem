interface CSSModule {
  [className: string]: string
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module 'gatsby-plugin-intl' {
  import * as gatsby from 'gatsby'
  import { IntlFormatters } from 'gatsby-plugin-intl'

  export class Link<TState> extends gatsby.Link<TState> {}
  export const navigate: typeof gatsby.navigate
  export const changeLocale: (language: string, to?: string) => void
  export const injectIntl: any
  export type IntlFormatters = IntlFormatters
  export type FormattedMessage = FormattedMessage
}
