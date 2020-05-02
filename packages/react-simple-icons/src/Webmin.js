import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Webmin = forwardRef(function Webmin({ color = 'currentColor', size = 24, title = 'Webmin', ...others }, ref) {
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
      <path d="M9.3 0C7.75.006 6.64 1.157 6.798 3.006c.102 1.227.209 2.473.313 3.729-1.08.455-2.218.934-3.428 1.446-1.255.536-2.123 1.609-2.457 2.885-.34 1.3-.135 2.808.723 4.143.763 1.195 1.856 2.006 3.255 2.445-.08 1.092.03 2.08.34 2.955.138.389.316.755.533 1.098.798 1.269 1.978 2.029 3.183 2.235a3.783 3.783 0 0 0 3.294-.998c.98-.945 1.907-1.838 2.79-2.684 1.047.63 2.056 1.235 3.038 1.827 1.604.957 3.243-.084 3.63-2.115.162-.847.09-1.792-.21-2.862.57-.351.925-.901 1.066-1.671.305-1.634-.503-3.782-1.827-4.88-.702-.582-1.427-1.177-2.164-1.783l-.005-.023c-.186-1.05-.367-2.08-.548-3.09-.306-1.724-1.799-3.538-3.374-4.04-.722-.23-1.393-.158-2.035.225-.779-.824-1.593-1.38-2.48-1.664A3.682 3.682 0 0 0 9.301 0zm1.019 2.479c.12-.003.25.012.381.048.467.125.912.49 1.155.932.198.368.29.67.37 1.298l.404 3.143c.013.099.027.195.038.293.115.889.644 1.528 1.33 1.619.659.087 1.01-.43.89-1.26a12.25 12.25 0 0 0-.038-.278l-.442-3.005c-.063-.425-.084-.75-.05-.96.052-.465.422-.707.896-.579.479.131.927.572 1.134 1.097.106.266.154.473.236.964.157.941.312 1.89.472 2.868.013.087.028.174.039.267.019.09.045.169.068.25l.002.014.001.002.023.084v-.002c0-.004 0-.007-.002-.01l.003.007v.003c.099.374.344.746.706 1.03.065.052.139.103.205.16.73.573 1.442 1.14 2.141 1.686.421.33.573.484.74.717.269.38.382.934.287 1.359-.087.393-.341.627-.658.59-.26-.031-.48-.137-.924-.465-.734-.55-1.484-1.112-2.26-1.684-.068-.048-.144-.1-.213-.152-.646-.476-1.208-.385-1.424.265-.222.666.09 1.449.754 1.914.072.05.153.107.223.158.81.567 1.605 1.12 2.38 1.66.329.229.573.444.735.638.357.409.527 1.08.404 1.642-.132.593-.514.902-.978.796-.235-.05-.411-.144-.832-.417-.817-.53-1.657-1.079-2.523-1.637-.08-.05-.16-.104-.237-.16-.273-.166-.537-.242-.768-.233h-.002c-.26-.017-.531.078-.792.286-.072.06-.146.117-.213.18-.809.666-1.647 1.375-2.535 2.122-.48.4-.696.557-1.017.67-.645.246-1.358-.03-1.804-.739-.421-.692-.404-1.589.032-2.154.185-.252.498-.54.93-.846.94-.672 1.83-1.305 2.676-1.912.077-.052.152-.104.228-.159.641-.455.764-1.26.312-2.011-.44-.75-1.17-.976-1.86-.559a5.307 5.307 0 0 0-.235.146c-.895.549-1.834 1.128-2.824 1.739-.638.384-.976.509-1.452.531-.59.03-1.205-.332-1.564-.904-.407-.636-.421-1.427-.03-1.918.22-.288.455-.463 1.13-.809 1.043-.54 2.045-1.048 2.995-1.525.082-.05.163-.084.247-.125.058-.029.112-.063.159-.097.425-.188.632-.657.566-1.293-.012-.107-.02-.21-.037-.312a375.257 375.257 0 0 0-.351-3.316c-.07-.66-.063-.892.021-1.154.1-.313.39-.493.752-.503zM7.11 6.736l.002.026a.022.022 0 0 1-.003-.005v-.018l.001-.002zm.004.043l.006.087c-.003-.026-.005-.051-.01-.08 0-.003.003-.005.004-.008zm.01.136l.003.025h-.002v-.015c0-.003.002-.005 0-.008v-.001zm.005.04v.012c-.001-.003-.003-.005-.003-.008.002 0 .002-.002.003-.004zm10.1 2.322l.002.012c0 .002 0 .004.003.007l-.006-.018zm.005.019c.005.015.008.034.013.05l-.01-.044a.011.011 0 0 1-.003-.007z" />
    </svg>
  );
});

Webmin.propTypes = {
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

export default Webmin;
