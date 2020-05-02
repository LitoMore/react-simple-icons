import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Adobeaudition = forwardRef(function Adobeaudition(
  { color = 'currentColor', size = 24, title = 'Adobe Audition', ...others },
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
      <path d="M0 .3v23.4h24V.3zm1 1h22v21.4H1zM6.659 13.8l-.772 2.863c-.017.081-.049.137-.145.137H4.309c-.097 0-.113-.032-.097-.145l2.769-9.641a3.091 3.091 0 0 0 .097-.817c0-.065.032-.097.08-.097h2.045c.064 0 .097.016.113.097l3.107 10.474c.016.081 0 .129-.081.129h-1.61a.147.147 0 0 1-.144-.12l-.805-2.88zm2.721-1.6c-.274-1.079-.918-3.429-1.159-4.572h-.016c-.209 1.143-.725 3.059-1.127 4.572zm10.02 3.025c0 .112.016.45.048.998 0 .064-.006.096-.07.112a8.232 8.232 0 0 1-3.012.66c-1.465 0-2.866-.563-2.866-2.817V9.029c0-.081.032-.129.113-.129h1.574c.081 0 .113.048.113.129v4.94c0 .95.415 1.465 1.413 1.465a2.724 2.724 0 0 0 .987-.177V9.029c0-.081.032-.129.113-.129h1.474c.097 0 .113.048.113.129v6.196z" />
    </svg>
  );
});

Adobeaudition.propTypes = {
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

export default Adobeaudition;
