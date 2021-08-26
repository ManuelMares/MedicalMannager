import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";
import ContainerForm from "../ContainerForm";
import TextInput from "../InputText/text-input";
import Label from "../Label/label";

const NewPacient = () => {
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

  const Forma = [<TextInput {...nombre} />, <TextInput {...fechaNacimiento} />];

  

  return (
    <Box>
      <ContainerForm Form={Forma}> </ContainerForm>
    </Box>
  );

};

export default NewPacient;
