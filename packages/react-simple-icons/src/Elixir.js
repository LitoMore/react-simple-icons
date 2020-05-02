import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Elixir = forwardRef(function Elixir({ color = 'currentColor', size = 24, title = 'Elixir', ...others }, ref) {
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
      <path d="M19.789,16.578c0,3.75-2.926,7.422-7.739,7.422c-5.246,0-7.839-3.708-7.839-8.285 c0-5.207,3.89-12.946,7.995-15.639c0.277-0.182,0.643,0.041,0.611,0.371c-0.03,0.313-0.046,0.631-0.046,0.951 c0,2.067,0.641,3.985,1.738,5.563c0.522,0.795,1.092,1.477,1.763,2.351c0.94,1.226,1.636,1.905,2.642,3.84 c0.005,0.01,0.01,0.018,0.015,0.028C19.48,14.197,19.789,15.352,19.789,16.578z" />
    </svg>
  );
});

Elixir.propTypes = {
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

export default Elixir;
