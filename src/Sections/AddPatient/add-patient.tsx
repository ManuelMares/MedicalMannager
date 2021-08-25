import ContainerForm from "../../Components/Form/ContainerForm/ContainerForm";
import NewPacient from "../../Components/Form/FormTemplates/NewPacient";

import { Stack } from "@chakra-ui/react";
import Label from "../../Components/Form/Label";

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
  const children = [<NewPacient />];

  return (
    <Stack w="100%" alignItems="center" justifyContent="center">
      <ContainerForm Form={children} />
    </Stack>
  );
};

export default AddPatient;
