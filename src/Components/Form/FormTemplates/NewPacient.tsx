import { ReactElement } from "react";
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

  return <>Forma</>;
};

export default NewPacient;
