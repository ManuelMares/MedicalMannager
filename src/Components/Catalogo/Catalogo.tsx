import React from 'react';
import {Text, VStack} from "@chakra-ui/react";


export const Catalogo:React.FC = () => {
    return (
        <VStack alignItems="center" justifyContent="center" w="100%" h="100%" p="4rem">
        {
            console.log('estoy en CAtalogo')
        }
            <Text fontSize="2rem" fontWeight="700" data-testid="CatalogoTitulo">Catalogo</Text>
        </VStack>
    );
}