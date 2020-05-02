import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Dependabot = forwardRef(function Dependabot(
  { color = 'currentColor', size = 24, title = 'Dependabot', ...others },
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
      <path d="M10.949.314a1.918 1.918 0 0 1 2.102 0l9.333 6.118c.541.354.866.957.866 1.604v7.928c0 .647-.326 1.25-.866 1.604l-9.333 6.118a1.918 1.918 0 0 1-2.102 0l-9.333-6.118a1.916 1.916 0 0 1-.866-1.604V8.036c0-.647.326-1.25.866-1.604L10.949.314zM12.75 7.5v.75h-6A.75.75 0 0 0 6 9v3h-.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25H6v1.5c0 .415.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V15h.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H18V9a.75.75 0 0 0-.75-.75H13.5V5.5a.25.25 0 0 0-.25-.25H11.5a.25.25 0 0 0-.25.25v1.75c0 .138.112.25.25.25h1.25zm3.286 5.089l-1.572 1.572a.303.303 0 0 1-.428 0l-.947-.947a.303.303 0 0 1 0-.428l.322-.322a.303.303 0 0 1 .428 0l.41.411 1.037-1.036a.303.303 0 0 1 .428 0l.322.322a.303.303 0 0 1 0 .428zM9.464 14.16v.001a.303.303 0 0 1-.428 0l-.948-.947a.302.302 0 0 1 0-.428l.323-.322a.303.303 0 0 1 .427 0l.412.411 1.036-1.037a.303.303 0 0 1 .427 0l.323.322a.303.303 0 0 1 0 .428L9.464 14.16z" />
    </svg>
  );
});

Dependabot.propTypes = {
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

export default Dependabot;
