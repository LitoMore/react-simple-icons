import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Greenkeeper = forwardRef(function Greenkeeper(
  { color = 'currentColor', size = 24, title = 'Greenkeeper', ...others },
  ref
) {
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
      <path d="M12.04 22.547a2.206 2.206 0 0 1-2.014-3.108l-2.699-1.8a2.201 2.201 0 1 1 .42-.626l2.702 1.8c.082-.085.172-.164.267-.236l-4.33-8.659a2.209 2.209 0 1 1 .672-.343l4.33 8.659c.077-.024.156-.044.235-.059v-4.128a2.206 2.206 0 0 1 0-4.333v-3.89a2.206 2.206 0 1 1 .755.014v3.866a2.205 2.205 0 0 1 0 4.359v4.097c.082.013.164.03.244.052l4.32-8.638a2.202 2.202 0 1 1 .672.344l-4.309 8.617c.1.07.194.148.28.233l2.616-1.776a2.209 2.209 0 1 1 .44.613l-2.615 1.777a2.206 2.206 0 0 1-1.986 3.165zM12 24C5.373 24 0 18.628 0 12a12 12 0 0 1 3.515-8.485c4.686-4.686 12.284-4.686 16.97 0s4.687 12.284 0 16.97A11.921 11.921 0 0 1 12 24zM12 .755C5.79.755.755 5.79.755 12c0 2.982 1.185 5.843 3.294 7.951 4.376 4.407 11.495 4.433 15.902.057s4.432-11.496.057-15.903A11.173 11.173 0 0 0 12 .755z" />
    </svg>
  );
});

Greenkeeper.propTypes = {
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

export default Greenkeeper;
