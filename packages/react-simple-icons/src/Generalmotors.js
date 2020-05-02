import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Generalmotors = forwardRef(function Generalmotors(
  { color = 'currentColor', size = 24, title = 'General Motors', ...others },
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
      <path d="M0 .002v23.996h24V.002zm8.254 5.836c2.293 0 2.293 1.788 2.293 2.412v.636H9.176V8.25c0-.345 0-1.177-.9-1.177-.89 0-.89.818-.89 1.177v4.415c0 .692.214 1.216.89 1.216.674 0 .9-.492.9-1.216v-1.427H8.39v-1.084h2.157v4.884l-1.326-.013v-.479c-.113.183-.647.662-1.414.661-1.296-.009-1.796-.905-1.796-2.272V8.25c0-.37 0-2.412 2.243-2.412zm3.703.186h2.028l.993 6.597 1.015-6.597h2.006v9.014h-1.337V8.25l-1.127 6.788H14.38L13.292 8.25v6.775h-1.335zM6.003 16.072H18.01v1.949H6.003Z" />
    </svg>
  );
});

Generalmotors.propTypes = {
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

export default Generalmotors;
