import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import AddPatient from "../../Sections/AddPatient/add-patient";

export const Dashboard: React.FC = () => {
  return (
    <VStack>
      <Text data-testid="DashboardTitulo">Hola. Este es el dashboard</Text>
      <Box w="100%">
        <AddPatient />
      </Box>
    </VStack>
  );
};
