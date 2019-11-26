export const sizes = {
  header: {
    height: '74px',
    smallDevHeight: '64px',
  },
  /**
   * Minimal breakpoint widths, this means that for example this definition:
   * `sm: '576px'`
   * would mean that there is breakpoint called `sm` which spans from `576px` to next bigger breakpoint (in case this is the largest breakpoint it spans to infinity)
   */
  breakpointsMin: {
    xs: '0px', // Extra small
    sm: '576px', // Small
    md: '768px', // Medium
    lg: '992px', // Large
    xl: '1200px', // Extra large
    hg: '1768px', // Huge
  },
  breakpointsMax: {
    sm: '575.98px', // Small
    md: '767.98px', // Medium
    lg: '991.98px', // Large
    xl: '1199.98px', // Extra large
    hg: '1767.98px', // Huge
  },
}
