import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Salesforce = forwardRef(function Salesforce(
  { color = 'currentColor', size = 24, title = 'Salesforce', ...others },
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
      <path d="M10.005 5.416c.75-.796 1.845-1.306 3.046-1.306 1.56 0 2.954.9 3.689 2.205.63-.3 1.35-.45 2.101-.45 2.849 0 5.159 2.34 5.159 5.22s-2.311 5.22-5.176 5.22c-.345 0-.689-.044-1.02-.104-.645 1.17-1.875 1.95-3.3 1.95-.6 0-1.155-.15-1.65-.375-.659 1.546-2.189 2.624-3.975 2.624-1.859 0-3.45-1.169-4.05-2.819-.27.061-.54.075-.825.075-2.204 0-4.005-1.8-4.005-4.05 0-1.5.811-2.805 2.01-3.51-.255-.57-.39-1.2-.39-1.846 0-2.58 2.1-4.649 4.65-4.649 1.53 0 2.85.704 3.72 1.8" />
    </svg>
  );
});

Salesforce.propTypes = {
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

export default Salesforce;
