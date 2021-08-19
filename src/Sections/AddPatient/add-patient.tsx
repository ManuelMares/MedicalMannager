import TextInput from "../../Components/Form/InputText/text-input";
import Label from "../../Components/Form/Label/label";
import Contenedor from "../../Components/Form/Contenedor/Contenedor";
import { Stack } from "@chakra-ui/react";

const AddPatient = () => {
  const props = {
    name: "textInput",
    placeholder: "Pon algo",
    label: <Label value="Prueba" />,
  };

  return (
    <Stack w="100%" alignItems="center" justifyContent="center">
      <Contenedor childComp={<TextInput {...props} />} />
    </Stack>
  );
};

export default AddPatient;
