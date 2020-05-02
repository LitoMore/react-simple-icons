import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Airbus = forwardRef(function Airbus({ color = 'currentColor', size = 24, title = 'Airbus', ...others }, ref) {
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
      <path d="M11.062 11.296c0 .74-.389 1.161-.993 1.304-.007 0 .967 1.531.967 1.531h-1.18l-1.427-2.277h1.006c.435 0 .597-.24.597-.532 0-.285-.156-.532-.59-.532H8.266v3.341H7.228V9.869h2.206c1.096 0 1.628.616 1.628 1.427m-5.573 2.835h1.038V9.869H5.489v4.262zM2.174 9.869L0 14.131h1.168l.352-.714h1.75l-.435-.895h-.873l.646-1.311h.013l1.453 2.92h1.194L3.095 9.869h-.921zm12.678 2.05c.409.143.688.519.688 1.019 0 .72-.577 1.194-1.46 1.194h-2.524V9.869h2.427c.863 0 1.376.461 1.376 1.148-.001.428-.176.72-.507.902m-2.258-.396h1.382a.368.368 0 0 0 .376-.376.367.367 0 0 0-.37-.376h-1.388v.752zm1.414 1.713a.435.435 0 0 0 .448-.441c0-.247-.195-.428-.448-.428h-1.414v.869h1.414m4.808-.986c0 .647-.298 1.006-.889 1.006-.584 0-.882-.359-.882-1.006V9.869h-1.064v2.303c0 1.317.694 2.05 1.946 2.05s1.953-.733 1.953-2.05V9.869h-1.064v2.381zm3.834-.688c-.985-.24-1.2-.263-1.2-.545 0-.218.246-.324.662-.324.551 0 1.139.138 1.473.344l.331-.869c-.428-.227-1.058-.389-1.791-.389-1.097 0-1.713.545-1.713 1.278 0 .789.46 1.109 1.518 1.337.824.182.999.295.999.526 0 .251-.227.363-.675.363a3.565 3.565 0 0 1-1.706-.415l-.318.908c.513.273 1.278.448 2.05.448 1.077 0 1.719-.5 1.719-1.337.001-.673-.433-1.104-1.349-1.325" />
    </svg>
  );
});

Airbus.propTypes = {
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

export default Airbus;
