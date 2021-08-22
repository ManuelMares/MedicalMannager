import { Box, Stack } from "@chakra-ui/react";
import { ComponentProps, FC, useEffect } from "react";

export type StackType = ComponentProps<typeof Stack>;
type Props = {
  Form?: React.FC[];
};

const arregloDefault: React.ReactNode[] = [
  <div>Hola</div>,
  <div>Cómo</div>,
  <div>Estás</div>,
];

const ContainerForm: FC<Props> = ({ Form }) => {
  useEffect(() => {
    console.log({ Form});
  });

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
        {Form.map((objeto: React.ReactNode) => objeto)}
      </Stack>
    </Box>
  );
};

export default ContainerForm;
