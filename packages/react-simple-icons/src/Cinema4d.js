import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cinema4d = forwardRef(function Cinema4d(
  { color = 'currentColor', size = 24, title = 'Cinema 4D', ...others },
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
      <path d="M12.022,5.127C8.786,5.713,6.677,6.917,5.3,8.047c-0.172,0.665-0.273,1.356-0.273,2.072 c0,4.794,4.093,8.68,9.141,8.68c0.753,0,1.467-0.098,2.146-0.264c1.458-1.848,2.651-5.065,2.955-7.728 c0.319-2.786,0.953-3.63,1.742-4.18c0.28-0.195,0.574-0.344,0.885-0.415c-0.887-1.897-2.439-3.388-4.444-4.168 c0.005,0.022,0.014,0.04,0.019,0.062C17.852,3.735,16.115,4.386,12.022,5.127z M23.179,7.898 c-0.032-0.063-0.064-0.134-0.097-0.214c-0.594-1.455-2.022-0.512-2.399,0.344c-0.742,1.686-0.633,2.422-0.934,4.131 s-1.337,4.999-2.828,6.688c-2.13,2.412-4.46,3.484-7.727,3.172s-5.785-3.082-6.717-5.09c-0.782-1.685-0.9-3.596,0.025-6.073 s3.7-4.491,6.237-5.459c2.537-0.968,4.545-1.063,5.96-1.475c1.415-0.413,2.249-1.093,2.197-1.672 c-0.065-0.718-0.757-1.1-1.148-1.26c-1.18-0.379-2.441-0.584-3.751-0.584c-6.611,0-11.97,5.218-11.97,11.655 c0,6.437,5.359,11.655,11.97,11.655s11.97-5.218,11.97-11.655C23.966,10.594,23.687,9.191,23.179,7.898z" />
    </svg>
  );
});

Cinema4d.propTypes = {
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

export default Cinema4d;
