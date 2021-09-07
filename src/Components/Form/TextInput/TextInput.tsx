import React from "react";
import { Box, Input, Stack } from "@chakra-ui/react";
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
    <Stack data-testid="text-input-wrapper" {...wrapperParams}
    margin="0.5rem"
    p="1rem"
    >
      {label}
      <Input
        data-testid="text-input"
        color="black"
        borderRadius="0.2em"
        w="25rem"
        onChange={() => {}}
        key={key}
        name={name}
        placeholder={placeholder}
        {...rest}
        backgroundColor ="white"
      />
    </Stack>
  );
};

export default TextInput;

