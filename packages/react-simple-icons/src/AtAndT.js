import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AtAndT = forwardRef(function AtAndT({ color = 'currentColor', size = 24, title = 'AT&T', ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M4.633 21.429a11.967 11.967 0 0 0 7.344 2.516c3.026 0 5.785-1.123 7.89-2.968.026-.022.014-.037-.011-.022-.945.63-3.638 2.008-7.879 2.008-3.685 0-6.014-.822-7.329-1.556-.025-.013-.034.006-.015.022m8.157.612c2.948 0 6.187-.804 8.124-2.394.53-.434 1.035-1.01 1.487-1.785.26-.446.515-.976.722-1.497.01-.025-.006-.038-.025-.01-1.802 2.652-7.018 4.305-12.404 4.305-3.807 0-7.904-1.217-9.508-3.542-.016-.021-.031-.012-.022.012 1.494 3.176 6.027 4.91 11.626 4.91m-3.22-5.267c-6.13 0-9.02-2.855-9.545-4.804-.006-.028-.025-.022-.025.004 0 .655.066 1.502.179 2.064.053.273.276.702.602 1.045 1.485 1.547 5.186 3.715 11.595 3.715 8.732 0 10.729-2.909 11.136-3.866.292-.684.443-1.92.443-2.958 0-.252-.006-.452-.016-.65 0-.032-.018-.034-.025-.003-.436 2.34-7.897 5.453-14.344 5.453M1.155 6.836C.803 7.533.415 8.71.298 9.318c-.05.26-.029.386.063.58.734 1.56 4.45 4.054 13.12 4.054 5.289 0 9.397-1.3 10.063-3.67.122-.437.129-.898-.029-1.519-.176-.694-.505-1.503-.784-2.071-.01-.019-.025-.016-.022.006.103 3.11-8.569 5.114-12.945 5.114-4.74 0-8.694-1.888-8.694-4.273 0-.229.048-.458.107-.696.006-.022-.013-.026-.022-.007m18.732-3.818c.05.079.076.163.076.276 0 1.33-4.072 3.684-10.553 3.684-4.762 0-5.653-1.767-5.653-2.89 0-.402.154-.813.493-1.23.018-.025.003-.034-.019-.016a12.001 12.001 0 0 0-1.685 1.751c-.239.301-.387.568-.387.728 0 2.328 5.838 4.016 11.297 4.016 5.816 0 8.412-1.899 8.412-3.567 0-.596-.232-.945-.826-1.62-.386-.439-.75-.796-1.136-1.148-.019-.015-.032-.003-.019.016m-1.783-1.33A11.845 11.845 0 0 0 11.977 0c-2.262 0-4.41.633-6.211 1.738-.54.332-.845.599-.845.942 0 1.01 2.36 2.095 6.548 2.095 4.143 0 7.357-1.19 7.357-2.334 0-.273-.239-.464-.722-.753" />
    </svg>
  );
});

AtAndT.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The <title> element provides an accessible, short-text description of any SVG
   */
  title: PropTypes.string,
};

export default AtAndT;
