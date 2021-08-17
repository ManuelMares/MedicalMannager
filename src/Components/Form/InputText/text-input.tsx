import { Box, Input } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";

export type BoxType = ComponentProps<typeof Box>;
export type InputType = ComponentProps<typeof Input>;
type Props = {
  key?: string;
  name: string;
  placeholder: string;
  label?: any;
  rest?: InputType;
  wrapperParams?: BoxType;
};

const TextInput: FC<Props> = ({
  key = "formControl",
  name,
  placeholder,
  label,
  rest,
  wrapperParams,
}) => {
  return (
    <Box mx="2em" {...wrapperParams}>
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
