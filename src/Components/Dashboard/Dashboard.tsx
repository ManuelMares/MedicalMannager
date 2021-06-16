import React from 'react';
import {Text, VStack} from "@chakra-ui/react";


export const Dashboard:React.FC = () => {

    return (
        <VStack>
            <Text data-testid="DashboardTitulo">Hola. Este es el dashboard</Text>
        </VStack>
    );
}