import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FreedesktopDotOrg = forwardRef(function FreedesktopDotOrg(
  { color = 'currentColor', size = 24, title = 'freedesktop.org', ...others },
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
      <path d="M17.702 1.934a4.375 4.375 0 0 0-1.264.14L3.3 5.502a4.418 4.418 0 0 0-3.156 5.384L2.2 18.77a4.418 4.418 0 0 0 5.384 3.157l13.139-3.429c2.212-.577 3.573-2.745 3.222-4.958h.045l-.111-.425-2.057-7.884a4.421 4.421 0 0 0-4.12-3.296zm-.02.677a3.73 3.73 0 0 1 3.483 2.791l1.946 7.458.11.425c.523 2-.67 4.034-2.67 4.555L7.412 21.268a3.729 3.729 0 0 1-4.555-2.67L.8 10.715a3.729 3.729 0 0 1 2.671-4.556L16.61 2.731a3.77 3.77 0 0 1 1.072-.12zm-.392 1.024a5.386 5.386 0 0 0-1.197.139L4.431 6.817c-2.428.706-3.107 2.016-2.624 4.265l1.75 6.704c.482 2.114 2.282 3.102 4.372 2.44l11.662-3.043c2.123-.504 3.107-2.096 2.624-4.265l-1.749-6.704c-.392-1.677-1.55-2.572-3.176-2.579zm1.25 3.554a.46.46 0 0 1 .472.345l.623 2.388.01.042a.457.457 0 0 1-.33.564l-3.405.888a.457.457 0 0 1-.564-.33l-.633-2.43a.457.457 0 0 1 .33-.565l3.405-.888a.468.468 0 0 1 .093-.014zm-10.216.658a.64.64 0 0 1 .655.48l.777 2.978a.638.638 0 0 1-.46.784l-4.172 1.089a.638.638 0 0 1-.784-.46L3.563 9.74a.638.638 0 0 1 .46-.785l4.172-1.088a.646.646 0 0 1 .13-.02zm5.859 1.466l.173.663-4.12.476-.174-.663zm.898 2.542c.183.147.41.237.648.252l-1.57 2.362a.892.892 0 0 0-.642-.26zm-5.626.894l2.032 1.96-.52.136a.867.867 0 0 0-.22.095l-2.062-1.99zm4.064 2.137a.209.209 0 0 1 .215.157l.435 1.669a.206.206 0 0 1-.15.258l-2.338.61a.206.206 0 0 1-.257-.152l-.436-1.668a.206.206 0 0 1 .151-.258l2.338-.61a.207.207 0 0 1 .042-.006Z" />
    </svg>
  );
});

FreedesktopDotOrg.propTypes = {
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

export default FreedesktopDotOrg;
