import React from "react";
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
    <Box data-testid="text-input-wrapper" mx="2em" {...wrapperParams}>
      {label}
      <Input
        data-testid="text-input"
        color="black"
        borderRadius="0.2em"
        onChange={() => {}}
        key={key}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    </Box>
  );
};

export default TextInput;
