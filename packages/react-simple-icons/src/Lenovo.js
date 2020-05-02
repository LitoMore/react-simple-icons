import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Lenovo = forwardRef(function Lenovo({ color = 'currentColor', size = 24, title = 'Lenovo', ...others }, ref) {
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
      <path d="M20.254 11.421a.81.81 0 00-.815.866.839.839 0 00.827.867.816.816 0 00.815-.867A.838.838 0 0020.254 11.421zM13.744 11.421a.81.81 0 00-.815.866.839.839 0 00.827.867.816.816 0 00.815-.867A.838.838 0 0013.744 11.421zM6.733 11.369a.786.786 0 00-.651.307.987.987 0 00-.171.736L7.388 11.8A.709.709 0 006.733 11.369z M0,8v8H24V8Zm5.006,5.827H2.227v-4h.857v3.224H5.006Zm1.817-.621a1.289,1.289,0,0,0,.884-.326l.534.411a2.025,2.025,0,0,1-1.431.588A1.594,1.594,0,1,1,6.717,10.7a1.543,1.543,0,0,1,1.216.5,1.671,1.671,0,0,1,.37.86l-2.162.9A.937.937,0,0,0,6.823,13.206Zm4.883.621h-.845V12.075a.679.679,0,0,0-.712-.651.66.66,0,0,0-.7.651v1.752H8.606V10.748h.846v.441h0a1.278,1.278,0,0,1,1-.493,1.185,1.185,0,0,1,1.25,1.222Zm1.984.052a1.593,1.593,0,1,1,1.66-1.592A1.6,1.6,0,0,1,13.69,13.879Zm2.8-.053-1.267-3.078h.966l.764,2.1.764-2.1h.966l-1.267,3.078Zm3.711.053a1.593,1.593,0,1,1,1.66-1.592A1.6,1.6,0,0,1,20.2,13.879Zm2-.418H22.06v.366h-.085v-.366h-.137v-.077H22.2Zm.541.366h-.082v-.315l-.137.213H22.51l-.136-.213v.315h-.082v-.443h.09l.134.21.134-.21h.088Z" />
    </svg>
  );
});

Lenovo.propTypes = {
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

export default Lenovo;
