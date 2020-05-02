import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Trainerroad = forwardRef(function Trainerroad(
  { color = 'currentColor', size = 24, title = 'TrainerRoad', ...others },
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
      <path d="M3.489 2.392L1.281 14.558c.862-1.684 2.586-2.817 4.574-2.817h.007a5.08 5.08 0 0 1 2.894.9l-.017-.011a3.23 3.23 0 0 0 .878-1.336l.007-.023c.413-1.328-.787-5.473 3.662-5.538 2.222-.031 5.068 1.816 4.992 1.805-3.994-.614-5.263-.787-6.242 1.115-.889 1.726-.657 3.163-1.802 4.24-.979.923-3.32 1.534-4.048 1.383-.33-.069.837-.379 1.921-1.136a4.36 4.36 0 1 0 2.089 4.058l.001-.014c.251.145.489.294.711.444a5.146 5.146 0 0 1-3.087 3.967l-.034.013h9.235c-.733-1.264-3.514-5.267-9.87-6.403.783-.387 7.589-.197 13.546 5.381l3.304-18.192zm6.529 1.588c.592.019 1.176.177 1.664.294 1.338.32 2.533.674 2.372.747-.033.014-.586-.064-.816-.088a4.118 4.118 0 0 0-1.558.072l.028-.006c-2.099.503-2.857 2.962-3 3.183-.017.024-1.186-.6-1.274-1.826-.062-.894.258-1.752 1.525-2.224l.002.002a2.751 2.751 0 0 1 1.057-.154zm5.389 4.093c.651-.008 1.469.085 2.505.305a8.972 8.972 0 0 0-1.865 1.456l-.002.002c-1.07 1.098-2.061 2.566-1.691 3.379s2.652 1.826 4.3 2.92c.852.568 1.515 2.559 1.517 2.566-3.11-2.417-5.369-3.097-7.048-4.1-1.971-1.186-.712-4.058-.114-5.301.342-.704.964-1.209 2.397-1.227zM.759 17.427L0 21.608h3.904c-1.708-.717-2.93-2.284-3.143-4.157l-.002-.024z" />
    </svg>
  );
});

Trainerroad.propTypes = {
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

export default Trainerroad;
