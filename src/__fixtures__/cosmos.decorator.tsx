import React, { ReactNode } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

interface Props {
  children: ReactNode;
}

const Wrapper = (props: Props) => {
  const { children } = props;
  return (
    <ChakraProvider theme={theme}>
      <Box width="100%" m="4">
        {children}
      </Box>
    </ChakraProvider>
  );
};

export default Wrapper;
