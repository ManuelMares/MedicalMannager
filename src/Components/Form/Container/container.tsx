import { Box, Stack } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";

export type StackType = ComponentProps<typeof Stack>;
type Props = {
  length?: string;
  height?: string;
  bgColor?: string;
  wrapperParams?: StackType;
  childComp?: React.ReactNode;
};

const Container: FC<Props> = ({ wrapperParams, childComp }) => {
  return (
    <Box>
      <Stack
        alignItems="center"
        justifyContent="center"
        borderRadius="5px"
        p="1rem"
        boxShadow="md"
        width="auto"
        {...wrapperParams}
      >
        {childComp.map(function (d, idx) {
          return { d };
        })}
      </Stack>
    </Box>
  );
};

export default Container;
