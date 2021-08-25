import { ReactElement } from "react";
import Label from "../Label";
import TextInput from "../TextInput";
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

  return <>Forma</>;
};

export default NewPacient;
