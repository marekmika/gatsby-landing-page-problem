import { createMedia } from '@artsy/fresnel';

const ExampleAppMedia = createMedia({
  breakpoints: {
    sm: 575.98, // Small
    md: 767.98, // Medium
    lg: 991.98, // Large
    xl: 1199.98, // Extra large
    hg: 1767.98 // Huge
  }
});

// Generate CSS to be injected into the head
export const mediaStyle = ExampleAppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = ExampleAppMedia;
