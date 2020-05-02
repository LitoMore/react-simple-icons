import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Unrealengine = forwardRef(function Unrealengine(
  { color = 'currentColor', size = 24, title = 'Unreal Engine', ...others },
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
      <path d="M11.999 0C5.427 0 .1 5.373.1 12c0 6.628 5.327 12 11.899 12 6.571 0 11.899-5.372 11.899-12 0-6.627-5.328-12-11.9-12zm0 .528c3.038 0 5.895 1.194 8.043 3.36A11.446 11.446 0 0 1 23.374 12c0 3.064-1.183 5.945-3.332 8.112A11.254 11.254 0 0 1 12 23.472a11.253 11.253 0 0 1-8.044-3.36A11.447 11.447 0 0 1 .623 12c0-3.064 1.184-5.945 3.332-8.112A11.252 11.252 0 0 1 12 .528zm-.595 4.223c-1.938.52-3.732 1.516-6.123 4.258-2.392 2.742-1.938 5.006-1.938 5.006s.66-1.558 2.247-3.199c.752-.777 1.314-1.037 1.698-1.038a.598.598 0 0 1 .632.602v5.567c0 .55-.354.669-.68.663-.279-.005-.537-.102-.537-.102 1.63 2.368 5.526 2.7 5.526 2.7l1.711-1.828.04.035 1.568 1.336c2.866-1.703 4.248-4.86 4.248-4.86-1.279 1.353-2.094 1.669-2.578 1.667-.429-.003-.597-.255-.597-.255-.023-.117-.063-1.81-.078-3.505-.014-1.756-.001-3.513.087-3.518.494-.929 2.073-2.802 2.073-2.802-2.948.581-4.556 2.513-4.556 2.513-.475-.374-1.444-.311-1.444-.311.454.25.907.976.907 1.578v5.92s-.99.873-1.752.873c-.451 0-.729-.247-.881-.449a1.182 1.182 0 0 1-.15-.258V8.033a.634.634 0 0 1-.363.123c-.162 0-.33-.082-.444-.32-.086-.18-.141-.45-.141-.842 0-1.35 1.525-2.243 1.525-2.243z" />
    </svg>
  );
});

Unrealengine.propTypes = {
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

export default Unrealengine;
