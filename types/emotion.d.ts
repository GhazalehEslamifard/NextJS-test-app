import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    simple: {
      white: string;
      black: string;
    };
    colors: {
      focused: string;
      shadow: string;
      activated_star: string;
      deactivated_star: string;
      background: string;
      header_background: string;
      title: string;
      delete: string;
    };
    checkbox: {
      checked: string;
      unchecked: string;
      border: string;
    };
    button: {
      delete: string;
      filter: {
        all: string;
        important: string;
      },
    };
  }
}
