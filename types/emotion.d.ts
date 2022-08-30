import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    simple: {
      white: string;
    };
    colors: {
      focused: string;
      shadow: string;
      activated_star: string;
      deactivated_star: string;
      list_background: string;
    };
    checkbox: {
      checked: string;
      unchecked: string;
      border: string;
    };
  }
}
