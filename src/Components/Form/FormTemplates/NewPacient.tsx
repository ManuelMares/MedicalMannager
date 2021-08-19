import TextInput from "../InputText/text-input";
import Label from "../Label/label";
import { Box } from "@chakra-ui/react";

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

  return (
    <>
      <TextInput {...nombre}/>
      <TextInput {...fechaNacimiento}/>
    </>
  );
};

export default NewPacient;
