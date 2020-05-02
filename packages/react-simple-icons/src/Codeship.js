import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Codeship = forwardRef(function Codeship(
  { color = 'currentColor', size = 24, title = 'Codeship', ...others },
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
      <path d="M12.053 0c-.972 0-2.398.405-2.398.762v2.117a13.032 13.032 0 0 1 2.42-.272 14.387 14.387 0 0 1 2.423.26V.773c0-.367-1.475-.774-2.445-.774zm.022 3.787c-2.042 0-5.068.837-5.068 1.193v2.595a18.793 18.793 0 0 1 5.02-2.473c.012-.013 2.803.749 5.212 2.495l.003.003V4.98c0-.37-3.126-1.193-5.167-1.193zM12.1 6.37c-.763.197-1.514.555-2.214.887a17.585 17.585 0 0 0-4.19 2.767c1.352 1.378 2.161 3.11 2.654 4.72l.037.113.04.037-.052-.037c-.013-.013-1.623-1.661-3.972-1.661-1.242 0-2.68.456-4.193 1.833.147.516.32 1.006.528 1.498v.016l.025.047c2.004 4.575 6.7 7.553 11.693 7.406 4.895-.147 9.348-3.311 11.13-7.859.098-.246.184-.506.272-.752-1.686-1.254-4.332-2.814-5.351-2.617v-.003c-.776.149-1.686 1.266-2.854 2.385.468-1.66 1.307-3.515 2.832-5.114a15.58 15.58 0 0 0-1.243-1.021v-.012C15.717 7.87 13.944 6.899 12.1 6.369zm-.01.897l.612 3.05-.147 2.67-.443 3.959v.018l-.05-.006c-.006-.001-.015-.008-.022-.01v-.027l-.493-3.947-.122-2.654zm.9 9.825l.021.004a7.135 7.135 0 0 1-.143.056c.04-.023.08-.036.121-.06z" />
    </svg>
  );
});

Codeship.propTypes = {
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

export default Codeship;
