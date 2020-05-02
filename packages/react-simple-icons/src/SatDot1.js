import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SatDot1 = forwardRef(function SatDot1({ color = 'currentColor', size = 24, title = 'Sat.1', ...others }, ref) {
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
      <path d="M11.344.006c-.292.01-.586.028-.881.06C.37 1.154 3.963 16.69 4.492 18.205.527 9.78 2.859 4.5 4.61 2.712c.049-.05-.004-.136-.05-.095C.604 5.824.25 9.45.25 9.45c-.684 3.952 3.158 7.834 4.246 8.766-2.967-2-3.841-3.436-4.382-5.417-.016-.06-.118-.08-.113 0 .081 1.064.185 2.49 1.005 4.174.752.973 2.815 1.247 3.49 1.246h.003l-.003-.006c.883-3.249 2.674-8.92 5.495-12.74 2.728-3.538 4.83-4.65 5.403-4.905.048-.023.025-.077-.03-.114-.128-.082-1.979-.513-4.02-.448zM4.498 18.22c.715 1.21 2.93 4.546 6.976 5.7 1.382.277 5.618-.02 8.602-3.011.054-.053.007-.175-.106-.099-1.97 1.344-8.14 2.682-15.472-2.59zm0 0l-.003.002c-1.053.447-2.22.28-2.73.044-.065-.031-.125-.02-.09.044.748 1.264 1.166 1.7 2.11 2.545.051.053.104.04.08-.064-.01-.046-.189-1.342.63-2.565-.105.822-.206 3.105.692 3.711 1.058.722 2.147 1.414 4.084 1.829.076.018.145-.071.071-.11-3.166-1.546-3.912-3.474-4.845-5.433l.001-.003zM17.613 1.398c-.226.026-.462.215-1.016.552C9.973 6.36 5.058 17.035 4.498 18.216c0 0 11.07-2.39 17.856-9.29 1.06-1.085 1.138-.85.64-2.054-.239-.597-.866-1.813-1.95-3.036-.854-.955-1.97-1.703-2.466-2.01-.52-.316-.738-.454-.965-.428zM4.498 18.216c1.363.78 16.116 7.064 18.959-2.725.665-2.284.576-4.675.468-4.964-.022-.062-.073-.034-.076-.014-.35.516-1.828 2.42-5.78 4.495-4.242 2.111-10.229 2.906-13.57 3.208z" />
    </svg>
  );
});

SatDot1.propTypes = {
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

export default SatDot1;
