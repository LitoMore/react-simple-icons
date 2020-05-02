import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Rust = forwardRef(function Rust({ color = 'currentColor', size = 24, title = 'Rust', ...others }, ref) {
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
      <path d="M23.687 11.709l-.995-.616a13.559 13.559 0 0 0-.028-.29l.855-.797a.344.344 0 0 0-.114-.571l-1.093-.409a8.392 8.392 0 0 0-.086-.282l.682-.947a.342.342 0 0 0-.223-.538l-1.152-.187a9.243 9.243 0 0 0-.139-.259l.484-1.063c.05-.108.039-.234-.027-.332s-.178-.156-.297-.152l-1.17.041a6.662 6.662 0 0 0-.185-.224l.269-1.139a.343.343 0 0 0-.412-.412l-1.139.269a13.847 13.847 0 0 0-.225-.185l.041-1.17a.34.34 0 0 0-.484-.324l-1.063.485c-.086-.047-.172-.094-.259-.139l-.188-1.153a.344.344 0 0 0-.538-.223l-.948.682a8.383 8.383 0 0 0-.282-.085L14.562.596a.344.344 0 0 0-.571-.114l-.797.856a9.18 9.18 0 0 0-.29-.028l-.616-.995a.342.342 0 0 0-.582 0l-.616.995c-.097.008-.194.018-.29.028l-.798-.856a.342.342 0 0 0-.571.114l-.409 1.093c-.095.027-.188.056-.282.085l-.947-.682a.344.344 0 0 0-.538.223l-.188 1.153a9.243 9.243 0 0 0-.259.139l-1.063-.485a.342.342 0 0 0-.484.324l.041 1.17c-.076.06-.151.122-.225.185l-1.139-.269a.343.343 0 0 0-.412.412l.268 1.139c-.062.074-.124.149-.184.224l-1.17-.041a.342.342 0 0 0-.324.484l.485 1.063a9.055 9.055 0 0 0-.139.259l-1.152.187a.344.344 0 0 0-.223.538l.682.947c-.03.094-.058.187-.086.282L.59 9.435a.344.344 0 0 0-.114.571l.855.797a9.18 9.18 0 0 0-.028.29l-.995.616a.34.34 0 0 0 0 .582l.995.616c.008.097.018.194.028.29l-.855.798a.342.342 0 0 0 .114.571l1.093.409c.027.095.056.189.086.282l-.682.947a.341.341 0 0 0 .224.538l1.152.187c.045.087.091.173.139.259l-.485 1.063a.342.342 0 0 0 .324.484l1.169-.041c.061.076.122.151.185.225l-.268 1.14a.342.342 0 0 0 .412.411l1.139-.268c.074.063.149.124.225.184l-.041 1.17a.34.34 0 0 0 .484.323l1.063-.484c.086.048.172.094.259.139l.188 1.152a.344.344 0 0 0 .538.224l.947-.682c.094.03.187.059.282.086l.409 1.093a.341.341 0 0 0 .571.114l.798-.855c.096.011.193.02.29.029l.616.995a.343.343 0 0 0 .582 0l.616-.995c.097-.009.194-.018.29-.029l.797.855a.344.344 0 0 0 .571-.114l.409-1.093c.095-.027.189-.056.282-.086l.947.682a.341.341 0 0 0 .538-.224l.188-1.152c.087-.045.173-.092.259-.139l1.063.484a.343.343 0 0 0 .484-.323l-.041-1.17c.076-.06.151-.121.224-.184l1.139.268a.343.343 0 0 0 .412-.411l-.268-1.14c.062-.074.124-.149.184-.225l1.17.041a.34.34 0 0 0 .324-.484l-.484-1.063c.047-.086.094-.172.139-.259l1.152-.187a.344.344 0 0 0 .223-.538l-.682-.947.086-.282 1.093-.409a.342.342 0 0 0 .114-.571l-.855-.798c.01-.096.02-.193.028-.29l.995-.616a.34.34 0 0 0 0-.582zm-6.659 8.253a.705.705 0 0 1 .295-1.379.705.705 0 1 1-.296 1.379zm-.338-2.286a.641.641 0 0 0-.762.494l-.353 1.648c-1.09.495-2.3.77-3.575.77a8.63 8.63 0 0 1-3.65-.804l-.353-1.648a.64.64 0 0 0-.762-.493l-1.455.312a8.615 8.615 0 0 1-.752-.887h7.08c.08 0 .134-.014.134-.087v-2.505c0-.073-.053-.087-.134-.087h-2.071v-1.588h2.24c.204 0 1.093.058 1.377 1.194.089.349.284 1.486.418 1.85.133.408.675 1.223 1.253 1.223h3.528a.74.74 0 0 0 .128-.013 8.68 8.68 0 0 1-.802.941l-1.489-.32zm-9.793 2.252a.705.705 0 1 1-.296-1.379.705.705 0 0 1 .296 1.379zM4.211 9.036a.705.705 0 1 1-1.288.572.705.705 0 0 1 1.288-.572zm-.825 1.957l1.516-.674a.642.642 0 0 0 .326-.848l-.312-.706h1.228v5.534H3.667a8.668 8.668 0 0 1-.28-3.307zm6.652-.537V8.825h2.924c.151 0 1.066.175 1.066.859 0 .568-.702.772-1.279.772h-2.711zm10.626 1.468c0 .216-.008.431-.024.643h-.889c-.089 0-.125.058-.125.146v.408c0 .961-.542 1.17-1.017 1.223-.452.051-.953-.189-1.015-.466-.267-1.5-.711-1.821-1.413-2.374.871-.553 1.777-1.369 1.777-2.461 0-1.179-.809-1.922-1.36-2.287-.773-.51-1.629-.612-1.86-.612H5.545a8.658 8.658 0 0 1 4.847-2.736l1.084 1.137a.64.64 0 0 0 .907.021l1.212-1.16a8.668 8.668 0 0 1 5.931 4.224l-.83 1.875a.644.644 0 0 0 .326.848l1.598.71c.028.284.042.57.042.861zm-9.187-9.482a.703.703 0 1 1 .972 1.019.705.705 0 0 1-.972-1.019zm8.237 6.628c.157-.356.573-.516.928-.358a.705.705 0 1 1-.929.359z" />
    </svg>
  );
});

Rust.propTypes = {
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

export default Rust;
