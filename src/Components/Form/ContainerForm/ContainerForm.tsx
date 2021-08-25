import { Box, Stack } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";

export type StackType = ComponentProps<typeof Stack>;
type Props = {
  Form: React.ReactNode[];
};
const ContainerForm: FC<Props> = ({ Form }) => {
  return (
    <Box>
      <Stack
        alignItems="center"
        justifyContent="center"
        borderRadius="5px"
        p="1rem"
        boxShadow="md"
        width="auto"
      >
        {Form}
      </Stack>
    </Box>
  );
};

export default ContainerForm;
