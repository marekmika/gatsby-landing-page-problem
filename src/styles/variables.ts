import { css } from 'styled-components'
import { sizes } from './sizes'

export const spacing = {
  size01: '4px',
  size02: '8px',
  size03: '12px',
  size04: '16px',
  size05: '24px',
  size06: '32px',
  size07: '48px',
  size08: '64px',
  size09: '96px',
  size10: '128px',
  size11: '192px',
  size12: '256px',
  size13: '384px',
  size14: '512px',
  size15: '640px',
  size16: '768px',
}

export const fontSize = {
  mobileText: '14px',
  mobileHeading: '21px',
  mobilesubheading: '18px',
  label: '14px',
  text: '18px',
  footerHeading: '20px',
  heading: '46px',
  extraHeading: '42px',
  subheading: '32px',
  menuitem: '21px',
  contactheader: '42px',
  contactbutton: '21px',
  labelinput: '14px',
  contactinput: '18px',
  teamheader: '42px',
  teammembername: '28px',
  teammemberabout: '18px',
}

export const colors = {
  light: '#FFFFFF',
  dark: '#444444',
  error: '#EB5557',
  background: '#F2F2F2',
  black: 'black',
  grey: '#ECECEC',
}

export const fontStyle = {
  montserratRegular: 'Regular 18px/22px Montserrat;',
  montserratExtraBold: 'ExtraBold 46px/50px Montserrat',
  montserratExtraBoldSmall: 'ExtraBold 28px/34px Montserrat',
  montserratBold: 'Bold 20px/24px Montserrat',
  montserratSemiBold: 'SemiBold 14px/18px Montserrat',
  opensansLight: 'Light 18px/24px Open Sans',
  openSans: 'Open Sans',
}

const subheading = css`
  font: ${fontStyle.montserratExtraBoldSmall};
  font-size: ${fontSize.subheading};
  line-height: 1.25;

  @media (max-width: ${sizes.breakpointsMax.md}) {
    font-size: ${fontSize.mobilesubheading};
  }
`
const heading = css`
  line-height: 1.25;
  font-weight: 800;
  font: ${fontStyle.montserratExtraBold};
  font-size: ${fontSize.heading};

  @media (max-width: ${sizes.breakpointsMax.md}) {
    font-size: ${fontSize.mobileHeading};
    font-weight: 800;
  }
`

const text = css`
  line-height: 1.4;
  font: ${fontStyle.openSans};
  font-size: ${fontSize.text};

  @media (max-width: ${sizes.breakpointsMax.md}) {
    font-size: ${fontSize.mobileText};
  }
`

const textBold = css`
  font: ${fontStyle.openSans};
  font-size: ${fontSize.text};
  font-weight: bold;

  @media (max-width: ${sizes.breakpointsMax.md}) {
    font-size: ${fontSize.mobileText};
  }
`

const labelBold = css`
  font: ${fontStyle.openSans};
  font-size: ${fontSize.label};
  font-weight: bold;
`

const textList = css`
  line-height: 1.5;
  font: ${fontStyle.openSans};
  font-size: ${fontSize.text};

  @media (max-width: ${sizes.breakpointsMax.md}) {
    font-size: ${fontSize.mobileText};
  }
`

const footerHeading = css`
  font: ${fontStyle.montserratBold};
  font-size: ${fontSize.footerHeading};
`

const extraHeading = css`
  font: ${fontStyle.montserratBold};
  font-size: ${fontSize.footerHeading};
`

const footerSubHeading = css`
  font: ${fontStyle.montserratRegular};
`

const label = css`
  font-size: ${fontSize.label};
  font-weight: 600;
`
const menuitem = css`
  font: ${fontStyle.montserratRegular};
  font-size: ${fontSize.menuitem};
`
const contactheader = css`
  font: ${fontStyle.montserratExtraBold};
  font-size: ${fontSize.contactheader};
  font-weight: 800;
`
const labelinput = css`
  font: ${fontStyle.montserratSemiBold};
  font-size: ${fontSize.labelinput};
`
const contactbutton = css`
  font: ${fontStyle.montserratBold};
  font-size: ${fontSize.contactbutton};
`
const contactinput = css`
  ${fontStyle.opensansLight};
  font-size: ${fontSize.contactinput};
`
const teamheader = css`
  ${fontStyle.montserratExtraBold};
  font-size: ${fontSize.contactheader};
`
const teammembername = css`
  ${fontStyle.montserratBold};
  font-size: ${fontSize.teammembername};
  font-weight: 800;
`
const teammemberabout = css`
  ${fontStyle.montserratRegular};
  font-size: ${fontSize.teammemberabout};
`
export const fontStyles = {
  extraHeading,
  heading,
  subheading,
  footerSubHeading,
  footerHeading,
  text,
  textBold,
  label,
  menuitem,
  labelBold,
  textList,
  contactheader,
  contactbutton,
  contactinput,
  labelinput,
  teamheader,
  teammembername,
  teammemberabout,
}
