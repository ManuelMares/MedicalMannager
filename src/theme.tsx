import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      Input: {
        borderRadius: "0.2em",
      },
    }),
  },
});

export default theme;
