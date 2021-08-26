import TextInput from "../../Components/Form/InputText/text-input";
import Label from "../../Components/Form/Label/label";
import ContainerForm from "../../Components/Form/ContainerForm/ContainerForm";
import NewPacient from "../../Components/Form/FormTemplates/NewPacient";

import { Box } from "@chakra-ui/react";

const AddPatient = () => {
  const children = <NewPacient />;

  return (
    <Box>
      <ContainerForm Form={children}> </ContainerForm>
    </Box>
  );
};

export default AddPatient;
