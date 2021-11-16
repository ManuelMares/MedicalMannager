import { Box, Stack } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";

export type StackType = ComponentProps<typeof Stack>;
type Props = {
  Form: React.ReactNode;
  Title: React.ReactNode;
} & StackType;

const ContainerForm: FC<Props> = ({ Form,Title, ...rest }) => {
  return (
    <Box>
      
      <Stack
        alignItems="center"
        justifyContent="center"
        borderRadius="5px"
        p="1rem"
        boxShadow="md"
        width="auto"
        margin="1rem"
        bgColor="white"
        {...rest}
      >
        <Stack P="1">{Title}</Stack>
        <Stack
        alignItems="center"
        justifyContent="space-around"
        flexDirection="row"
        wrap="wrap"
        >
          {Form}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ContainerForm;
