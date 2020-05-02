import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Octave = forwardRef(function Octave({ color = 'currentColor', size = 24, title = 'Octave', ...others }, ref) {
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
      <path d="M10.492.008C8.08-.082 5.837.723 4.21 2.492c-1.3 1.413-2.024 3.255-2.225 5.274h-.42C.702 7.766 0 8.468 0 9.33v4.74c0 .862.702 1.565 1.564 1.565h2.09a16.887 16.887 0 0 0 2.567 3.685c4.458 4.845 10.69 6.032 14.552 3.014h2.1c.577 0 1.05-.473 1.05-1.05V18.42a1.03 1.03 0 0 0-.257-.668c.857-3.431-.045-7.637-2.518-11.211.002-.017.01-.032.01-.049V4.48a.821.821 0 0 0-.816-.818H18.64C16.13 1.372 13.208.11 10.492.008zm1.748 2.178c1.78-.009 3.688.621 5.422 1.85a.796.796 0 0 0-.15.444v2.012c0 .448.368.819.816.819h2.014a.787.787 0 0 0 .392-.116c2.246 3.3 2.733 7.317 1.239 10.174H20.01c-.578 0-1.051.474-1.051 1.05v1.792c-2.989 1.3-7 .222-9.957-2.99a12.734 12.734 0 0 1-1.549-2.096c.256-.279.416-.647.416-1.055V9.33c0-.862-.702-1.564-1.564-1.564h-.409c.237-1.363.78-2.61 1.686-3.594 1.224-1.33 2.878-1.978 4.658-1.986zm6.088 2.01h2.014c.162 0 .283.122.283.284v2.012c0 .163-.12.285-.283.285h-2.014a.28.28 0 0 1-.285-.285V4.48a.28.28 0 0 1 .285-.285zM1.564 8.298h4.74c.577 0 1.032.455 1.032 1.031v4.74c0 .576-.455 1.032-1.031 1.032h-4.74A1.023 1.023 0 0 1 .532 14.07V9.33c0-.576.455-1.031 1.031-1.031zm18.446 9.603h2.863c.291 0 .52.226.52.518v2.863a.512.512 0 0 1-.52.518H20.01a.51.51 0 0 1-.518-.518V18.42a.51.51 0 0 1 .518-.518z" />
    </svg>
  );
});

Octave.propTypes = {
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

export default Octave;
