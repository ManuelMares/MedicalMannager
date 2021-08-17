import { Box, Input } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";

export type BoxType = ComponentProps<typeof Box>;
export type LabelType = ComponentProps<typeof Input>;
type Props = {
  key?: string;
  name: string;
  placeholder: string;
  label?: any;
  rest?: LabelType;
};

const TextInput: FC<Props> = ({
  key = "formControl",
  name,
  placeholder,
  label,
  rest,
}) => {
  return (
    <Box mx="2em">
      {label}
      <Input
        {...key}
        {...name}
        data-test-id="text-input"
        color="black"
        borderRadius="0.2em"
        {...placeholder}
        {...rest}
        onChange={() => {}}
      />
    </Box>
  );
};

export default TextInput;
