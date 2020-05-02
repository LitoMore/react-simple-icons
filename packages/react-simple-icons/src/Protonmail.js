import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Protonmail = forwardRef(function Protonmail(
  { color = 'currentColor', size = 24, title = 'ProtonMail', ...others },
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
      <path d="M12 20.352s-1.096-.108-1.955-.705c-.86-.596-6.58-4.688-6.58-4.688v8.098S3.513 24 4.55 24h14.9c1.036 0 1.085-.942 1.085-.942v-8.1s-5.723 4.092-6.58 4.69c-.86.595-1.955.704-1.955.704zM12 .002S4.925-.23 3.465 7.624v5.35s.06.572 1.67 1.735c1.607 1.162 5.773 4.436 6.867 4.436 1.088 0 5.254-3.273 6.865-4.437 1.607-1.164 1.668-1.737 1.668-1.737v-5.35C19.075-.228 12 .004 12 .004zm4.846 10.536h-9.69V7.624C8.14 3.724 12 3.67 12 3.67s3.863.054 4.846 3.954v2.914z" />
    </svg>
  );
});

Protonmail.propTypes = {
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

export default Protonmail;
