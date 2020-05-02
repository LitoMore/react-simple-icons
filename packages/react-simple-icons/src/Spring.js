import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Spring = forwardRef(function Spring({ color = 'currentColor', size = 24, title = 'Spring', ...others }, ref) {
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
      <path d="M21.822 1.248c-.338.806-.766 1.57-1.281 2.272A12.045 12.045 0 0012.03 0C5.431 0 0 5.43 0 12.031c0 3.293 1.35 6.445 3.737 8.717l.444.393a12.041 12.041 0 007.75 2.83c6.275 0 11.55-4.911 11.997-11.172.328-3.065-.572-6.941-2.106-11.55zM5.447 20.817c-.194.24-.49.38-.8.38a1.033 1.033 0 01-1.028-1.03c0-.564.465-1.03 1.028-1.03a1.032 1.032 0 01.8 1.68zm16.325-3.602c-2.969 3.954-9.31 2.622-13.375 2.812 0 0-.722.044-1.447.162 0 0 .272-.115.625-.25 2.853-.992 4.203-1.185 5.937-2.075 3.266-1.66 6.494-5.293 7.166-9.072-1.244 3.636-5.012 6.76-8.447 8.03-2.353.867-6.603 1.71-6.603 1.71l-.172-.09c-2.894-1.408-2.981-7.672 2.278-9.694 2.303-.886 4.507-.4 6.994-.992 2.656-.63 5.728-2.622 6.978-5.219 1.4 4.154 3.085 10.658.066 14.678z" />
    </svg>
  );
});

Spring.propTypes = {
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

export default Spring;
