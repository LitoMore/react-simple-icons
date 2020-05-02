import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Jeep = forwardRef(function Jeep({ color = 'currentColor', size = 24, title = 'Jeep', ...others }, ref) {
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
      <path d="M20.056 12.325c-.021 1.07.21 1.637 1.09 1.637.882 0 1.008-.965 1.008-1.7 0-.734-.168-1.447-1.091-1.447-.567 0-.986.44-1.007 1.51m-1.784 4.47v-7.24h1.805v.826c.065-.14.11-.236.251-.406.122-.147.462-.566 1.364-.566.902 0 2.308.63 2.308 2.853 0 1.72-.84 2.98-2.287 2.98-.797 0-1.154-.278-1.364-.441a1.098 1.098 0 0 1-.251-.252v2.245h-1.826M16.03 11.55c0-.525-.294-1.028-.966-1.028-.65 0-.88.461-.88 1.028zm-1.091-2.203c1.531 0 2.874.587 2.874 3.294h-3.63c0 .86.357 1.217.986 1.217.63 0 .84-.504.84-.504h1.783c0 .776-1.07 1.826-2.685 1.805-1.847 0-2.749-1.364-2.749-2.77s.797-3.042 2.58-3.042m-4.741 2.203c0-.525-.293-1.028-.965-1.028-.65 0-.881.461-.881 1.028zM9.106 9.346c1.532 0 2.874.587 2.874 3.294H8.35c0 .86.357 1.217.987 1.217.629 0 .839-.504.839-.504h1.783c0 .776-1.07 1.826-2.685 1.805-1.847 0-2.749-1.364-2.749-2.77s.798-3.042 2.58-3.042m-4.972-2.14h1.952v5.12c0 .88-.378 2.727-3.085 2.727-2.706 0-3-1.72-3-2.686v-.944h1.888v.923c0 .567.378 1.091 1.091 1.091.714 0 1.154-.398 1.154-1.07V7.206Z" />
    </svg>
  );
});

Jeep.propTypes = {
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

export default Jeep;
