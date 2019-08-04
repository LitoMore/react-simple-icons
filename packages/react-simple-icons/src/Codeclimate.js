import React from 'react';
import PropTypes from 'prop-types';

const Codeclimate = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M 16.046875 5.039062 L 24 12.992188 L 21.292969 15.703125 L 16.046875 10.457031 L 14.203125 12.308594 L 11.488281 9.597656 Z M 10.652344 10.4375 L 13.359375 13.152344 L 15.90625 15.691406 L 13.191406 18.398438 L 7.953125 13.160156 L 3.777344 17.335938 L 2.707031 18.398438 L 0 15.691406 L 7.953125 7.738281 Z M 10.652344 10.4375" />
    </svg>
  );
};

Codeclimate.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Codeclimate.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Codeclimate;