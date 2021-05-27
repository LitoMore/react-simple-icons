import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RollsRoyce = forwardRef(function RollsRoyce(
  { color = 'currentColor', size = 24, title = 'rolls-royce', ...others },
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
      <path d="M13.363 3.663H9.961v6.865c-.41.196-.857.368-1.341.511a7.94 7.94 0 0 1-.776.182V3.968s.06-1.041-.519-1.393v-.13h5.434c.244.297.463.697.604 1.218zm.958 9.391c2.465-1.182 3.652-3.262 3.674-5.646.015-1.622-.557-2.618-1.197-3.148a1.883 1.883 0 0 0-.117-.089 6.454 6.454 0 0 0-.612-1.618c.118.017.227.036.324.057 1.788.38 3.225 1.436 3.905 3.474.554 1.662.285 3.724-.904 5.377-.281.391-1.03 1.226-1.89 1.842-.156.112-.25.174-.414.277 1.077 1.726 1.608 2.717 2.295 4.6.6 1.644 1.055 3.83 1.117 4.344.15 1.223.515 1.32.599 1.345V24h-4.295v-.13c.132-.07 1.293-.546 1.299-2.367.006-1.337-.32-2.808-.914-4.46a22.925 22.925 0 0 0-1.277-2.829l-.014-.021a8.355 8.355 0 0 1-.872.321c-.223-.516-.45-.983-.707-1.459zm-4.36-.144v1.116c.325-.014 1.34-.096 2.254-.274.207.468.387.912.511 1.257l.017.048a26.3 26.3 0 0 1-1.23.166 33.2 33.2 0 0 1-1.552.131v7.21c0 .159.037 1.008.59 1.306V24H7.254v-.13c.538-.283.59-1.147.59-1.305v-9.27a18.96 18.96 0 0 0 2.118-.385zm.457-11.66l-.462-.007H5.662v10.575c.426-.019 2.013-.152 3.052-.46 3.465-1.025 5.12-3.447 5.146-6.293.015-1.655-.568-2.672-1.222-3.212-.407-.337-.946-.496-1.338-.554-.22-.044-.71-.05-.882-.05zM3.502 20.557V1.554S3.564.492 2.972.133V0h7.346c.613.001 1.415.063 1.907.17 1.824.387 3.291 1.464 3.985 3.544.565 1.696.291 3.8-.922 5.487-.287.4-1.05 1.25-1.93 1.88a6.998 6.998 0 0 1-.422.281c1.1 1.762 1.641 2.773 2.343 4.695.612 1.677 1.076 3.909 1.14 4.432.151 1.248.525 1.374.61 1.4v.132h-4.382l-.001-.133c.136-.072 1.32-.583 1.326-2.442.007-1.363-.326-2.865-.932-4.55a23.36 23.36 0 0 0-1.305-2.887l-.014-.022c-.582.265-1.812.624-2.61.775-.571.108-1.15.197-1.865.277-.623.07-1.227.111-1.584.134v7.384c0 .161.038 1.028.603 1.332v.132H2.9v-.132c.549-.29.603-1.17.603-1.332Z" />
    </svg>
  );
});

RollsRoyce.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default RollsRoyce;