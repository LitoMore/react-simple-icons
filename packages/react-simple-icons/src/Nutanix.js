import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Nutanix = forwardRef(function Nutanix({ color = 'currentColor', size = 24, title = 'Nutanix', ...others }, ref) {
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
      <path d="M.393 3.617A.395.395 0 000 4.012c0 .12.054.225.139.297l8.507 7.404a.39.39 0 01-.013.588l-8.52 7.412a.393.393 0 00.28.67h4.86c.103 0 .195-.04.265-.104l9.17-7.98a.396.396 0 00.001-.596L5.518 3.721a.386.386 0 00-.264-.104H.393zm18.359 0a.389.389 0 00-.273.113l-4.717 4.106a.392.392 0 00-.04.564l2.428 2.114a.393.393 0 00.291.129.394.394 0 00.278-.118l7.127-6.203a.389.389 0 00.154-.31.395.395 0 00-.393-.395h-4.855zm-2.31 9.742c-.116 0-.22.05-.292.13l-2.427 2.113a.392.392 0 00.039.564l4.717 4.104c.07.07.166.113.273.113h4.855a.393.393 0 00.239-.705l-7.127-6.203a.393.393 0 00-.278-.116Z" />
    </svg>
  );
});

Nutanix.propTypes = {
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

export default Nutanix;
