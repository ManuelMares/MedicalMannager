import React from "react";
import TextInput from "../../../../Components/Form/TextInput";
import Label from "../../../../Components/Form/Label";
const props = {
  name: "text Input",
  placeholder: "Basic usage",
  label: <Label value="Label" />,
};

export default <TextInput {...props} />;
