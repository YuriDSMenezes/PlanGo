import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      seconday: string;
      red: string;
      violet: string;
      green: string;
      text: string;
      textBold: string;
      textLight: string;
      borderColor: string;
      white: string;
      textDark: string;
    };
    background: {
      light: string;
      white: string;
    };
  }
}
