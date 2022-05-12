import React, { useEffect } from "react";

import { useMediaQuery } from "native-base";

import { ThemeProvider } from "styled-components/native";

const Theme = ({ children }) => {
    const [isLaptop] = useMediaQuery({ maxWidth: 1028 })

    const [isTablet] = useMediaQuery({maxWidth: 820})

    const [isMobile] = useMediaQuery({maxWidth: 375})

    const [isMobileS] = useMediaQuery({maxWidth: 320})
    const [isMobileL] = useMediaQuery({maxWidth: 425})

    const theme = {
      colors: {
        powderWhite: "#FFFDF9",
        persianGreen: "#06B49A",
        lightBlue: "#AFDBD2",
        onyx: "#36313D"
      },
      fonts: ["sans-serif", "Roboto"],
      fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
      },

      isMobile,
      isMobileS,
      isMobileL,
      isTablet,
      isLaptop
    };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

export default Theme;
