import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Adobepremiere = forwardRef(function Adobepremiere(
  { color = 'currentColor', size = 24, title = 'Adobe Premiere', ...others },
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
      <path d="M6.297 5.778c0-.066.016-.116.099-.116.643-.033 1.584-.05 2.574-.05 2.772 0 3.976 1.519 3.976 3.466 0 2.54-1.838 3.63-4.099 3.63-.379 0-.511-.017-.775-.017v3.843c0 .083-.033.116-.116.116H6.412c-.082 0-.115-.033-.115-.116zm1.775 5.313c.231.016.412.016.808.016 1.172 0 2.268-.412 2.268-1.996 0-1.27-.783-1.914-2.119-1.914-.396 0-.776.016-.957.033zm6.4-.908c0-.115 0-.412-.05-.973 0-.083.012-.1.078-.132a10.42 10.42 0 0 1 3.656-.693c.083 0 .116.016.116.099v1.452c0 .082-.027.099-.11.099-.626-.033-1.544.05-1.89.198v6.301c0 .083-.033.116-.116.116h-1.569c-.082 0-.115-.033-.115-.116zM0 .3v23.4h24V.3zm1 1h22v21.4H1Z" />
    </svg>
  );
});

Adobepremiere.propTypes = {
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

export default Adobepremiere;
