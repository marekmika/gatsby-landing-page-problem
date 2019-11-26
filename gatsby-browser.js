export const onClientEntry = () => {
  console.log('aaabfbfdbdfbdfbdfbdfbdfbdf')
  debugger
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  console.log('TYPEOF ', typeof window.IntersectionObserver)
  import(`intersection-observer`)
  console.log(`# IntersectionObserver is polyfilled!`)
}
