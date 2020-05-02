import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Everplaces = forwardRef(function Everplaces(
  { color = 'currentColor', size = 24, title = 'Everplaces', ...others },
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
      <path d="M10.839 23.972C4.76 23.388 0 18.257 0 12.028c0-6.623 5.377-12 12-12s12 5.377 12 12c0 6.23-4.76 11.359-10.839 11.943v-7.046c2.22-.525 3.87-2.521 3.87-4.897 0-2.778-2.253-5.033-5.031-5.033S6.968 9.25 6.968 12.028c0 2.377 1.653 4.372 3.87 4.897l.001 7.047zm-.388-14.655c.642 0 1.162.521 1.162 1.162 0 .641-.521 1.162-1.162 1.162-.641 0-1.16-.521-1.16-1.162 0-.641.52-1.161 1.16-1.162z" />
    </svg>
  );
});

Everplaces.propTypes = {
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

export default Everplaces;
