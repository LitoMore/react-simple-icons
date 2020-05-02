import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Hellofresh = forwardRef(function Hellofresh(
  { color = 'currentColor', size = 24, title = 'HelloFresh', ...others },
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
      <path d="M12.773 1.063a8.14 8.14 0 00-.37.005 11.51 11.51 0 00-.966.11c-2.884.456-5.652 2.003-7.642 4.177A12.53 12.53 0 002.55 6.96a11.8 11.8 0 00-1.858 5.07c-.127 1.127.18 2.498-.267 3.559a4.25 4.25 0 00-.16.45c-.302.942-.727 3.072 1.164 4.042.8.41 1.732.427 2.535.86.23.124.453.255.676.382a13.365 13.365 0 001.402.74c.064.027.124.054.187.079 3.269 1.29 6.995.97 10.1-.62.37-.186.717-.4 1.059-.61.052-.03.106-.058.158-.089.25-.147.493-.3.728-.46a12.552 12.552 0 00.123-.094c.24-.17.462-.338.655-.493a12.552 12.552 0 00.26-.199c.163-.138.321-.279.476-.424a12.158 12.158 0 001.986-2.404 13.458 13.458 0 001.793-4.602c.015-.074.028-.148.041-.222.014-.075.028-.142.04-.213a16.736 16.736 0 00.19-3.484c-.053-1.178.473-2.04-.134-3.174h.002a1.619 1.619 0 00-.5-.565l-.092-.06a.834.834 0 00-.05-.032c-.39-.227-.852-.335-1.294-.5-.096-.035-.177.026-.109.106 1.068 1.253 1.18 2.233-.033.766-2.832-3.424-7.488-3.701-8.856-3.705zM12.75 2.13c.621.007 1.01.07 1.01.07s-2.684.074-5.52 1.701c-2.29 1.315-1.427.046.186-.798 1.607-.843 3.289-.985 4.324-.973zm3.336 2.459c.049-.003.1 0 .152.01 1.45.265.15 4.272-.527 5.214.26 2.126 1.057.41 1.37-.51.097-.286.22-.642.26-.935.133-.942.415-1.671.981-2.06.318-.219.648-.309 1.06-.141 1.314.532.8 4.342-.37 4.81a1.171 1.171 0 01-.598.079v-.002c-.692-.06-.901-.575-1.018-1.399-.534 1.616-1.528 2.736-2.285.75-.19.48-2.024 2.76-2.666.108l-.015-.06c-.185.335-1.37 2.427-2.85 1.687a1.031 1.031 0 01-.299-.245 1.855 1.855 0 01-.351-.636 3.276 3.276 0 01-.149-.729 5.259 5.259 0 01-.008-.586c-.2-.013-.418-.02-.574-.027h-.111c-.015 1.059-.003 2.153.078 2.791a.05.05 0 01-.014.035.05.05 0 01-.029.016c-.42.07-.933.332-.885-.74.03-.587.05-1.478.063-2.082a6.91 6.91 0 00-1.16.19 8.932 8.932 0 00-.371.11c-.007.264-.012.517-.012.742-.026 1.344-.036 3.09.064 3.842a.043.043 0 01-.011.032.043.043 0 01-.026.013c-.441.076-.984.247-.933-.88 0 0 .05-2.167.076-2.928.005-.162.01-.33.013-.502-.238.114-.39.219-.576.322-.055.028-.104.058-.152.086-.048.027-.094.052-.135.078-.083.05-.289.174-.318.19a.078.078 0 01-.086 0 .423.423 0 01-.123-.184c-.06-.176-.05-.43.168-.569a5.55 5.55 0 01.34-.207 7.543 7.543 0 01.894-.408c.011-1.118-.008-2.445-.045-2.81A.054.054 0 014.95 7c.196-.058.964-.24.93.486 0 0-.056 1.154-.092 2.147.105-.021.213-.04.322-.055a7.327 7.327 0 011.194-.076c.03-1.695.006-3.432-.053-3.934a.042.042 0 01.008-.027.042.042 0 01.008-.01.042.042 0 01.015-.008c.174-.053.93-.24.897.465-.029 1.135-.068 2.496-.088 3.55v.009c.236.015.483.034.717.058a3.411 3.411 0 01.695-1.515c.103-.13.566-.585.937-.666.509-.137.842.24.938.476a1.823 1.823 0 01.094.887l-.004.03v.031a1.644 1.644 0 01-.04.182 1.462 1.462 0 01-.093.24 1.446 1.446 0 01-.332.44 1.595 1.595 0 01-.557.29 1.47 1.47 0 01-.506.059 2.254 2.254 0 01-.224-.022l-.11-.017v.013c0 .113-.003.224 0 .332a4.018 4.018 0 00.079.719c.086.379.282.576.529.623.927.247 1.936-1.418 2.11-1.697-.373-1.835.05-5.725 1.37-5.365 1.27.341.035 4.46-.564 5.289.211 2.657 1.697.158 1.818-.02-.17-.685-.189-1.563-.105-2.611.106-1.321.51-2.675 1.244-2.713zm.174.697c-.457.017-.813 2.086-.655 3.897.55-1.071 1.12-3.782.698-3.891a.147.147 0 00-.043-.006zm-2.602.047c-.45.029-.835 2.281-.658 4.037.52-.995 1.123-3.924.701-4.033a.133.133 0 00-.043-.004zm5.365 1.178c-.18.004-.432.117-.613.447-.505.928-.52 3.106.02 3.623.126.121.333.047.422-.023a.925.925 0 00.234-.307c.439-.815.7-2.698.287-3.463-.036-.067-.17-.282-.35-.277zm-8.431 1.35a.255.255 0 00-.076.015.617.617 0 00-.237.168 1.585 1.585 0 00-.209.293 3.29 3.29 0 00-.273.68 5.304 5.304 0 00-.154.683l-.01-.004v.016c.083.011.148.02.16.02a.864.864 0 00.182-.018.823.823 0 00.318-.137 1.035 1.035 0 00.219-.22 1.748 1.748 0 00.279-.569 1.94 1.94 0 00.063-.344 1.054 1.054 0 00-.022-.326.428.428 0 00-.127-.228l-.02-.014-.013-.006c.003 0-.006-.004-.014-.004h-.008a.07.07 0 00-.027-.004.255.255 0 00-.031-.002zm9.4 3.784a.138.138 0 01.022 0 .138.138 0 01.134.145v4.582a.21.21 0 01-.17.2l-.47.083a.138.138 0 01-.17-.14v-1.889a.06.06 0 00-.068-.057l-.73.13a.092.092 0 00-.07.08v1.888a.21.21 0 01-.17.2l-.47.083a.138.138 0 01-.17-.14v-4.582a.21.21 0 01.17-.2l.47-.084a.138.138 0 01.17.14v1.833a.06.06 0 00.07.057l.73-.127a.092.092 0 00.068-.08v-1.834a.21.21 0 01.17-.202l.47-.082a.138.138 0 01.014-.004zm-3.785.608c.563-.007.898.353.898 1.158v.164a.191.191 0 01-.15.176l-.478.086a.11.11 0 01-.127-.108v-.144c0-.498-.136-.65-.395-.604-.272.048-.396.27-.396.526 0 .382.287.61.716.957l-.005.004c.503.409.894.762.894 1.437 0 .764-.497 1.334-1.213 1.461-.748.132-1.21-.31-1.21-1.039v-.342a.21.21 0 01.17-.2l.415-.073a.138.138 0 01.17.14v.28c0 .382.13.576.45.52.217-.038.437-.179.437-.548 0-.457-.352-.702-.758-1.025-.406-.323-.852-.697-.852-1.398 0-.63.351-1.256 1.18-1.403.09-.015.174-.024.254-.025zm-2.014.416a.138.138 0 01.024 0 .138.138 0 01.135.143v.374a.21.21 0 01-.17.202l-1.057.187a.092.092 0 00-.068.078v1.182a.06.06 0 00.068.055l.715-.127a.138.138 0 01.172.14v.348a.21.21 0 01-.172.2l-.715.128a.092.092 0 00-.068.08v1.336a.06.06 0 00.068.057l1.111-.198a.138.138 0 01.17.141v.39a.21.21 0 01-.17.202l-1.822.318a.138.138 0 01-.17-.14v-4.58a.21.21 0 01.17-.202l1.768-.31a.138.138 0 01.011-.004zm-3.351.621c.677.014.824.565.824 1.299 0 .77-.158 1.09-.533 1.353a.089.089 0 00-.041.104h.002l.574 1.828a.154.154 0 01-.123.186l-.461.084a.185.185 0 01-.217-.13l-.492-1.726a.077.077 0 00-.088-.053l-.156.028a.092.092 0 00-.069.082v1.804a.21.21 0 01-.171.202l-.477.084a.138.138 0 01-.17-.141v-4.582a.21.21 0 01.17-.2l1.104-.195c.12-.02.227-.029.324-.027zm-2.23.377a.138.138 0 01.007 0 .138.138 0 01.135.145v.369a.21.21 0 01-.17.199l-1.084.191a.092.092 0 00-.068.082v1.205a.06.06 0 00.068.057l.75-.133a.138.138 0 01.17.14v.362a.21.21 0 01-.17.2l-.75.132a.092.092 0 00-.068.08v1.932a.21.21 0 01-.17.2l-.479.085a.138.138 0 01-.17-.14V14.19a.21.21 0 01.17-.199l1.801-.32a.138.138 0 01.027-.004zm1.898.346a.867.867 0 00-.127.013l-.254.043a.092.092 0 00-.068.08v1.405a.06.06 0 00.068.054l.254-.045v.002c.368-.065.478-.253.478-.853 0-.525-.084-.705-.351-.7Z" />
    </svg>
  );
});

Hellofresh.propTypes = {
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

export default Hellofresh;
