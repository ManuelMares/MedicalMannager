import ContainerForm from "../../Components/Form/ContainerForm/ContainerForm";
import NewPacient from "../../Components/Form/FormTemplates/NewPacient";

import { Box } from "@chakra-ui/react";

const AddPatient = () => {
  const children = <NewPacient />;

  return (
    <Box>
      <ContainerForm Form={children} />
    </Box>
  );
};

export default AddPatient;
