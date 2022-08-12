
    import * as React from 'react';

    export type TomorrowlandProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Tomorrowland = React.forwardRef<SVGSVGElement, TomorrowlandProps>(function Tomorrowland({color = 'currentColor', size = 24, title = "tomorrowland", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M11.97 0c-.009.01-.35.35-.747.758-.826.835-1.504 1.271-2.524 1.62-.582.205-.836.243-1.496.204-.427-.02-.883-.067-1-.115-.194-.058-.223-.04-.223.174 0 .33-.251 1.02-.523 1.437l-.234.35.244.3c.126.175.281.311.33.311.048 0 .31-.175.592-.389.738-.563 2.039-1.212 3.048-1.513.797-.253.99-.274 2.563-.274 1.573 0 1.766.021 2.563.274 1.01.3 2.31.95 3.048 1.513.282.214.544.39.592.39.049 0 .204-.137.33-.302l.244-.31-.283-.448a4.197 4.197 0 01-.416-.98c-.107-.437-.165-.523-.31-.494-.107.02-.534.057-.971.076-.621.03-.913.001-1.408-.164-1.03-.35-1.825-.845-2.641-1.67-.417-.417-.768-.758-.777-.748zm-.284 3.328a2.38 2.38 0 00-.317.022c-1.369.213-2.504.882-3.203 1.882l-.273.39.273.388c.301.437.805.873 1.805 1.572.825.583 1.583 1.408 1.787 1.97.097.243.193.438.232.428.03 0 .175-.251.32-.552.302-.641.846-1.225 1.73-1.846.96-.68 1.512-1.164 1.794-1.572l.264-.38-.291-.427a4.434 4.434 0 00-2.32-1.66c-.45-.126-1.267-.22-1.801-.215zm-7.502.031l-.475.524C3.059 4.6 2.155 5.99 1.902 6.66c-.63 1.7-.464 3.127.536 4.486.796 1.078 2.357 2.165 4.095 2.854.447.165.807.34.807.379 0 .029-.126.088-.291.127-.456.097-1.408.766-1.66 1.174-.185.29-.233.504-.223.96.01 1.35.97 2.526 2.834 3.477.602.301 1.184.553 1.291.553.32 0 1.108-.874 1.477-1.66.699-1.437 1-3.408.912-5.912-.078-2.272-.32-3.059-1.252-4.04-.272-.29-.827-.727-1.235-.97C6 6.117 4.465 4.738 4.243 3.64l-.06-.282zm15.634.094c-.036-.003-.047.037-.05.11-.01.96-1.728 2.525-4.961 4.525-.408.243-.963.68-1.235.97-.932.981-1.174 1.768-1.252 4.04-.087 2.504.213 4.475.912 5.912.37.786 1.157 1.66 1.477 1.66.107 0 .68-.242 1.271-.543 1.874-.951 2.844-2.137 2.854-3.486.01-.457-.038-.67-.223-.961-.252-.408-1.204-1.077-1.66-1.174-.165-.039-.29-.098-.29-.127 0-.039.36-.214.806-.379 1.738-.69 3.3-1.776 4.096-2.854 1-1.359 1.166-2.787.535-4.486-.262-.699-1.176-2.088-1.827-2.787-.267-.291-.393-.415-.453-.42zm-7.994.533l.274.004c.757.03 1.018.078 1.484.291.505.233 1.621 1.165 1.621 1.35 0 .126-1.183 1.02-1.746 1.31-.476.253-.632.282-1.457.282-.883 0-.951-.02-1.602-.37a7.076 7.076 0 01-1.156-.785l-.484-.418L9 5.36c.36-.447 1-.904 1.611-1.157.425-.178.634-.221 1.213-.217zm.188.19a1.362 1.362 0 00-.692.174c-1.34.708-.844 2.728.68 2.728 1.485 0 2.01-1.951.719-2.69a1.475 1.475 0 00-.707-.212zm-.282.635c.157-.001.3.096.387.287.214.456-.476.98-.767.591-.224-.281-.224-.466.01-.699a.543.543 0 01.37-.18zm-9.943 6.46c-.039-.019-.078.563-.078 1.291 0 2.593.67 4.428 2.379 6.467 1.466 1.748 4.282 3.612 7.058 4.65l.844.321.807-.32c4.165-1.65 7.416-4.34 8.717-7.223.534-1.165.7-1.933.748-3.477.029-.786.029-1.504-.01-1.591-.049-.127-.135-.078-.436.261-.359.408-.37.457-.427 1.301-.272 4.088-3.224 7.534-7.33 8.563-1 .252-3.311.225-4.33-.047-4.03-1.107-6.856-4.477-7.118-8.516-.058-.825-.078-.893-.398-1.262-.194-.213-.377-.408-.426-.418Z" />
        </svg>
      );
    });

    export default Tomorrowland
  