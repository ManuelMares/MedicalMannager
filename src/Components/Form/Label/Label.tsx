import React, { ComponentProps, FC } from "react";
import { Text } from "@chakra-ui/react";

export type TextType = ComponentProps<typeof Text>;
type Props = {
  value: string;
} & TextType;

const Label: FC<Props> = (props) => {
  const { value, ...rest } = props;
  return (
    <Text
      data-testid="label"
      color="black"
      fontWeight="500"
      fontSize="1.1em"
      mb="2"
      {...rest}
    >
      {value}
    </Text>
  );
};

export default Label;
