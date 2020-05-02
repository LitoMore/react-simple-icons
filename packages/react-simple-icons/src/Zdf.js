import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Zdf = forwardRef(function Zdf({ color = 'currentColor', size = 24, title = 'ZDF', ...others }, ref) {
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
      <path d="M7.014 4.984A7.02 7.02 0 0 0 0 12.002a7.017 7.017 0 0 0 13.271 3.174h2.915c.696 0 1.324-.044 1.962-.553.461-.365.749-.884.883-1.56v2.103h1.336v-2.473h3.153v-1.1h-3.16l.02-.445c.005-.724.226-1.162 1.277-1.162H24V8.873h-2.818c-1.517 0-2.141.85-2.141 2.18v.129c-.254-1.565-1.185-2.309-2.889-2.309h-2.855a7.018 7.018 0 0 0-6.283-3.889zM8.02 8.873h3.436c1.742 0 1.992 1.219 1.992 1.9 0 .725-.298 1.873-1.992 1.873h-.844c-1.056 0-1.281.38-1.281 1.104v.336h3.945v1.074H7.982v-1.558c0-1.335.625-2.123 2.137-2.123h.873c.691 0 1.1-.14 1.1-.725 0-.605-.409-.772-1.12-.772h-2.95V8.873zm6.63 1.113h1.472c1.157 0 1.574.496 1.574 2.041 0 1.541-.412 2.035-1.574 2.035H14.65V9.986z" />
    </svg>
  );
});

Zdf.propTypes = {
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

export default Zdf;
