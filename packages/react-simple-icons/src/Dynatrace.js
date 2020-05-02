import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Dynatrace = forwardRef(function Dynatrace(
  { color = 'currentColor', size = 24, title = 'Dynatrace', ...others },
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
      <path d="M9.373 0c-.31.006-.93.09-1.521.654C6.98 1.478 2.628 5.61.88 7.27.09 8.024.16 8.865.16 8.934v.377c.067-.292.187-.499.427-.825.496-.616 1.3-.788 1.627-.822a64.233 64.233 0 0 1 .002 0 64.233 64.233 0 0 1 6.527-.549c4.335-.137 7.197.225 7.197.225l6.084-5.793s-3.188-.6-6.82-1.027A93.394 93.394 0 0 0 9.566.006c-.021 0-.09-.008-.193-.006zm13.56 2.508l-6.066 5.79s.222 2.88-.137 7.198c-.189 2.45-.584 4.866-.875 6.494-.052.326-.256 1.114-.925 1.594-.29.198-.491.295-.748.363 1.546-.51 1.091-7.047 1.091-7.047-4.335.137-7.214-.222-7.214-.222L1.975 22.47s3.222.634 6.855 1.045c2.056.24 4.833.429 5.227.463.023 0 .045-.007.068-.012-.013.003-.022.009-.035.012.138 0 .259.015.379.015.085 0 .925.105 1.713-.648 1.748-1.663 6.083-5.81 6.94-6.633.788-.754.72-1.594.72-1.68a81.84 81.84 0 0 0-.207-5.654c-.24-3.65-.701-6.871-.701-6.871zM3.856 8.305C2.125 8.307.348 8.513.16 9.326c.017 1.216.05 3.137.205 5.28.24 3.65.703 6.886.703 6.886l6.082-5.79c-.017.017-.239-2.88.121-7.198H7.27s-1.684-.202-3.415-.2z" />
    </svg>
  );
});

Dynatrace.propTypes = {
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

export default Dynatrace;
