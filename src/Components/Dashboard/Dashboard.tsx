import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import NewPacient from "../Form/FormTemplates/NewPacient";
import { RouteComponentProps, withRouter } from "react-router-dom";
import IPage from "../../config/Interfaces/page";

export const Dashboard: React.FC<IPage & RouteComponentProps> = () => {
  return (
    <VStack>
      <Text data-testid="DashboardTitulo">Hola. Este es el dashboard</Text>
      <Box w="100%">
        <NewPacient/>
      </Box>
    </VStack>
  );
};
