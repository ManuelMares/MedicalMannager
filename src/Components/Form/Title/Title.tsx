import React, { ComponentProps, FC } from "react";
import { Text } from "@chakra-ui/react";

export type TextType = ComponentProps<typeof Text>;
type Props = {
  value: string;
} & TextType;

const Title: FC<Props> = (props) => {
  const { value, ...rest } = props;
  return (
    <Text
      data-testid="title"
      color="black"
      fontWeight="600"
      fontSize="1.6em"
      textShadow="1px 1px 2px #717171"
      mb="2"
      {...rest}
    >
      {value}
    </Text>
  );
};

export default Title;
