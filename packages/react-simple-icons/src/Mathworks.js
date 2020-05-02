import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mathworks = forwardRef(function Mathworks(
  { color = 'currentColor', size = 24, title = 'Mathworks', ...others },
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
      <path d="M4.323 16.248C3.13 15.354 1.64 14.31 0 13.118l5.814-2.236 2.385 1.789c-1.789 2.087-2.981 2.832-3.876 3.578zm15.95-6.26c-.447-1.193-.745-2.385-1.193-3.578-.447-1.342-.894-2.534-1.64-3.578-.298-.447-.894-1.491-1.64-1.491-.149 0-.298.149-.447.149-.447.149-1.043 1.043-1.193 1.64-.447.745-1.342 1.938-1.938 2.683-.149.298-.447.596-.596.745-.447.298-.894.745-1.491 1.043-.149 0-.298.149-.447.149-.447 0-.745.298-1.043.447-.447.447-.894 1.043-1.342 1.491 0 .149-.149.298-.298.447l2.236 1.64c1.64-1.938 3.578-3.876 4.919-7.602 0 0-.447 4.025-4.025 8.348-2.236 2.534-4.025 3.876-4.323 4.174 0 0 .596-.149 1.193.149 1.193.447 1.789 2.087 2.236 3.279.298.894.745 1.64 1.043 2.534 1.193-.298 1.938-.745 2.683-1.491s1.491-1.64 2.236-2.385c1.342-1.64 2.981-3.727 5.068-2.683.298.149.745.447.894.596.447.298.745.596 1.193 1.043.745.596 1.043 1.043 1.64 1.342-1.491-2.981-2.534-5.963-3.727-9.093z" />
    </svg>
  );
});

Mathworks.propTypes = {
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

export default Mathworks;
