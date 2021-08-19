import TextInput from "../../Components/Form/InputText/text-input";
import Label from "../../Components/Form/Label/label";
import Container from ".../../Components/Form/Container/container;
import NewPacient from ".../../Components/Form/FormTemplates/NewPacient;

import { Stack } from "@chakra-ui/react";

const AddPatient = () => {
  
  const nombre = {
    name: "inputNombre",
    placeholder: "Nombre completo",
    label: <Label value="José Emilio pacheco" />,
  };
  const fechaNacimiento = {
    name: "inputFechaNacimiento",
    placeholder: "Fecha de nacimiento",
    label: <Label value="6/09/1996" />,
  };

  

  return (
    <Stack w="100%" alignItems="center" justifyContent="center">
      <Container childComp={NewPacient} />
    </Stack>
  );
};

export default AddPatient;
