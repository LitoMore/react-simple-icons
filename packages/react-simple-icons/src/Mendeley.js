import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mendeley = forwardRef(function Mendeley(
  { color = 'currentColor', size = 24, title = 'Mendeley', ...others },
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
      <path d="M11.973 9.191h.019a2.349 2.349 0 011.5 4.155 1.803 1.803 0 01-.854.451 2.342 2.342 0 01-.647.092h-.019c-.224 0-.441-.033-.647-.092a1.808 1.808 0 01-.854-.451 2.34 2.34 0 01-.849-1.806 2.352 2.352 0 012.351-2.349m-9.948 9.45c1.262.158 2.382-.76 2.501-2.052a2.438 2.438 0 00-.213-1.233c-1.768-3.879 6.955-3.968 5.481-.307l-.01.016c-.697 1.115-.319 2.563.839 3.232.426.248.898.35 1.359.33.461.02.933-.082 1.359-.33 1.158-.67 1.536-2.117.839-3.232l-.01-.016c-1.474-3.661 7.25-3.572 5.48.307a2.44 2.44 0 00-.212 1.233c.12 1.292 1.239 2.21 2.502 2.052a2.339 2.339 0 001.421-.735s.587-.487.578-1.729c-.008-1.013-.578-1.574-.578-1.574a2.206 2.206 0 00-1.81-.644c-1.619-.036-1.859-1.304-1.402-3.694.168-.424.241-.878.226-1.332a3.408 3.408 0 00-2.125-3.287c-.039-.017-.078-.03-.118-.046a1.51 1.51 0 00-.134-.046 3.407 3.407 0 00-3.994 1.449c-.815.895-1.184 1.438-2.022 1.438-.797 0-1.208-.543-2.022-1.438a3.404 3.404 0 00-4.127-1.404c-.04.016-.079.029-.119.046A3.407 3.407 0 003.59 8.932c-.016.454.058.908.225 1.332.457 2.391.217 3.658-1.401 3.694-.793-.085-1.385.242-1.983.841-.6.598-.55 2.2 0 2.899.399.509.94.861 1.594.943" />
    </svg>
  );
});

Mendeley.propTypes = {
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

export default Mendeley;
