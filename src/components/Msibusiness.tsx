
    import * as React from 'react';

    export type MsibusinessProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Msibusiness = React.forwardRef<SVGSVGElement, MsibusinessProps>(function Msibusiness({color = 'currentColor', size = 24, title = "msibusiness", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="m15.215 10.794 3.78 2.416h-2.663l-3.78-2.416h2.663zM5.656 8.518l-.438 1.626-.175.65-.652 2.416-.175.65-.437 1.622h1.869l.437-1.622.175-.65.651-2.416.175-.65.438-1.626H5.656zm6.06 5.342-.437 1.622h4.947l2.543-1.622h-7.053zm3.556-5.342-2.548 1.626h7.086l.438-1.626h-4.976zm6.86 0-.438 1.626-.175.65-.651 2.416-.175.65-.437 1.622h1.869l.437-1.622.175-.65.651-2.416.175-.65L24 8.518h-1.868zm-20.255 0-.438 1.626-.175.65-.651 2.416-.175.65L0 15.482h1.869l.437-1.622.175-.65.651-2.416.175-.65.438-1.626H1.877zm7.536 0-.438 1.626-.175.65-.651 2.416-.175.65-.437 1.622h1.869l.437-1.622.175-.65.651-2.416.175-.65.438-1.626H9.413z" />
        </svg>
      );
    });

    export default Msibusiness
  