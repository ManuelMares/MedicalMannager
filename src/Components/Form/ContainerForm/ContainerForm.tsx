import { Box, Stack } from "@chakra-ui/react";
import { ComponentProps, FC, useEffect } from "react";

export type StackType = ComponentProps<typeof Stack>;
type Props = {
  Form: React.ReactNode;
} & StackType;

const ContainerForm: FC<Props> = ({ Form, ...rest }) => {
  return (
    <Box>
      <Stack
        alignItems="center"
        justifyContent="center"
        borderRadius="5px"
        p="1rem"
        boxShadow="md"
        width="auto"
        {...rest}
      >
        {Form}
      </Stack>
    </Box>
  );
};

export default ContainerForm;
