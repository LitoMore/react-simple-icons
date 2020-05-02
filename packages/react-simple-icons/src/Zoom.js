import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Zoom = forwardRef(function Zoom({ color = 'currentColor', size = 24, title = 'Zoom', ...others }, ref) {
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
      <path d="M4.587 13.63l-.27-.012H1.89l3.235-3.235-.013-.27a.815.815 0 0 0-.795-.795l-.27-.013H.004l.014.27c.034.438.353.77.794.795l.27.013H3.51L.273 13.618l.014.269c.015.433.362.78.795.796l.27.013h4.044l-.014-.27c-.036-.443-.35-.767-.795-.795zm3.237-4.325H7.82a2.695 2.695 0 1 0 .003 0zm1.141 3.839a1.618 1.618 0 1 1-2.288-2.287 1.618 1.618 0 0 1 2.288 2.287zm12.872-3.838a2.157 2.157 0 0 0-1.615.729 2.152 2.152 0 0 0-1.618-.731 2.147 2.147 0 0 0-1.208.37c-.21-.233-.68-.37-.948-.37v5.392l.27-.013c.45-.03.777-.349.795-.796l.013-.27V11.73l.014-.27c.01-.202.04-.382.132-.54a1.078 1.078 0 0 1 1.473-.393 1.078 1.078 0 0 1 .392.392c.093.16.12.339.132.54l.014.271v1.887l.013.269c.027.44.35.768.795.796l.27.013V11.73l.012-.27c.01-.2.04-.384.134-.543.299-.514.959-.69 1.473-.39a1.078 1.078 0 0 1 .392.393c.092.16.12.343.131.54l.014.27v1.887l.013.269c.028.443.35.77.796.796l.27.013V11.46a2.157 2.157 0 0 0-2.16-2.155zm-10.26.788a2.696 2.696 0 1 0 3.81 3.813 2.696 2.696 0 0 0-3.81-3.813zm3.049 3.05a1.618 1.618 0 1 1-2.288-2.288 1.618 1.618 0 0 1 2.288 2.288z" />
    </svg>
  );
});

Zoom.propTypes = {
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

export default Zoom;
