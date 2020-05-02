import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Peugeot = forwardRef(function Peugeot({ color = 'currentColor', size = 24, title = 'Peugeot', ...others }, ref) {
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
      <path d="M23.444 22.188c-.45-1.321-2.252-4.655-3.664-6.547-.3-.42-.18-.631-.03-.751s.691-.601 1.321-1.291c.631-.721.781-1.532.33-2.703S19.51 6.962 19.21 6.061c-.36-1.051-.39-1.532-.18-2.102.24-.691.601-.721.901-.691.15 0 .27.15.27.24 0 .3.03.661.3 1.442.481 1.231 1.652 2.042 2.042 2.192.27.12.3-.09.3-.18-.03-.09-.42-1.622-.691-2.763-.3-1.201-.45-1.472-.721-1.712-.42-.42-1.081-.631-1.652-.601-1.231.06-1.802 1.231-1.862 1.351-.06.09-.09.18-.21.09-.36-.24-1.381-1.111-1.472-1.652-.06-.33-.12-.36-.42-.481C14.584.713 13.503.293 12.301.083c-.481-.09-.511-.12-1.051-.03-.961.18-1.532.39-2.252.781-.39.21-.45.36-.511.45-.12 0-.21.09-.33.15-.24.09-1.111.39-1.412.571-.18.12-.3.21-.18.45.18.36.661 1.141.901 1.351.12.12.481.21.541.21.09.03.15.03.18-.03s.03-.15.21-.27c.24-.18.661-.27.901-.3.18 0 .3-.03.39.06.09.06.3.3.39.511.06.24.03.3-.09.36s-.511.15-.961.18c-.45.03-.571-.09-.601-.12-.03-.03-.09-.06-.12 0-.06.09-.18.18-.36.27-.09.06-.15.15-.06.3.27.481.661 1.021.991 1.141.27.09.42 0 .721-.21.272-.208.452-.208.542-.148.09.06.24.21.21.33-.06.241-.57.812-.66.932-.09.12-.18.18-.33.09-.241-.12-3.755-1.952-4.235-2.132-.511-.21-.841-.24-1.351-.27-.42-.03-.961.03-1.291.09-.24.06-.39.15-.631.39-.33.3-.661.661-.691.991-.03.24.24.691.27.721.03.03.06.09.21.09.15-.03.481-.21.901-.12.39.06.42.36.42.601 0 .03.06.12.15.12.15 0 .39 0 .661.12.33.15.991.661 1.111.781.09.09.09.18-.09.18-.841.06-2.132.33-2.703.511-.42.15-.901.33-1.081.631-.21.33-.45.901-.511 1.291-.06.39.36.871.45.991.09.06.12.12.27.06.21-.12.691-.42 1.171-.45.3-.03.39.24.481.36.06.09.15.03.39-.03.45-.12 3.003-.09 3.904-.03.42.03.991.09 1.412.3.42.24 1.171.961 1.171.961s-1.021 1.682-1.562 2.703c-.511.931-.871 1.622-1.051 2.012-.18.36-.3.901-.27 1.291.06.601.06.901.06 1.171 0 .24-.24.27-.541.33-.45.12-1.321.18-2.012.36-.631.15-.871.3-.991.811-.09.39-.21 1.351-.24 1.802 0 .18 0 .27.21.21.12-.03.511-.09.991-.12.601-.06 1.231-.03 1.742-.03.931 0 3.634.15 3.814.18.24.03.27 0 .27-.18-.03-.21-.06-.901-.06-1.291 0-.42-.06-.811.3-1.231.36-.39 3.123-3.484 3.273-3.634.12-.12.21-.27.42-.09.21.18 2.493 1.832 2.943 2.162s.901.45 1.412.45c.39 0 .481.661.15.721-.33.06-.841.18-1.171.24-.541.12-.691.3-.871.661-.15.3-.3 1.802-.3 1.952 0 .09 0 .24.15.21.661-.12 1.712-.18 2.853-.15 1.291.03 2.553.15 2.733.15.18 0 .21 0 .3-.15.15-.27.661-.811 1.081-1.171.153-.12.153-.18.063-.45zm-4.985-9.1c-.33.12-.541 0-.691-.15-.15-.15-1.472-1.712-1.892-2.192-.21-.24-.36-.781.27-1.021.511-.18 1.472-.481 1.712-.631.27-.15.39-.27.42-.541.03-.27.03-.571.03-.661 0-.09.12-.18.21-.06.06.09.27.541.571 1.081.42.781.961 1.772 1.141 2.222.18.42.09.721-.18 1.021-.33.392-1.351.842-1.591.932z" />
    </svg>
  );
});

Peugeot.propTypes = {
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

export default Peugeot;
