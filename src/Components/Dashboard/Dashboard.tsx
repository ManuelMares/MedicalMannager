import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import NewPacient from "../Form/FormTemplates/NewPacient";

export const Dashboard: React.FC = () => {
  return (
    <VStack>
      <Text data-testid="DashboardTitulo">Hola. Este es el dashboard</Text>
      <Box w="100%">
        <NewPacient/>
      </Box>
    </VStack>
  );
};
