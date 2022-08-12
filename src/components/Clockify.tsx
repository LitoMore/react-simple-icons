
    import * as React from 'react';

    export type ClockifyProps = React.ComponentPropsWithoutRef<'svg'> & {
      /**
       * Hex color or color name
       */
      title?: string;
      /**
       * The size of the Icon.
       */
      color?: string;
      /**
       * The title provides an accessible short text description to the SVG
       */
      size?: string | number;
    };

    const Clockify = React.forwardRef<SVGSVGElement, ClockifyProps>(function Clockify({color = 'currentColor', size = 24, title = "clockify", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M13.3512 20.4035c1.1108 0 2.169-.2217 3.139-.6157l2.6913 2.6944C17.4555 23.4458 15.4688 24 13.3512 24 6.729 24 1.3594 18.627 1.3594 12.0006 1.3594 5.3729 6.7289 0 13.3512 0c2.0964 0 4.0652.5406 5.7789 1.4865L16.4834 4.136c-.9687-.3918-2.0236-.6134-3.1322-.6134-4.6379 0-8.3976 3.779-8.3976 8.441 0 4.6609 3.7597 8.4399 8.3976 8.4399zm2.176-12.1544l5.5104-5.5139 1.5773 1.5772-5.5104 5.514zm-2.2328 5.6348c-1.0784 0-1.952-.8775-1.952-1.961 0-1.0825.8736-1.9611 1.952-1.9611 1.0784 0 1.952.8786 1.952 1.961 0 1.0836-.8736 1.9611-1.952 1.9611zm9.3462 5.6953l-1.5772 1.5783-5.5105-5.514 1.5774-1.5783z" />
        </svg>
      );
    });

    export default Clockify
  