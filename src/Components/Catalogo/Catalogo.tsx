import React from 'react';
import {Text, VStack} from "@chakra-ui/react";
import { withRouter, RouteComponentProps} from "react-router-dom";
import Ipage from '../../Interfaces/Page'



const Catalogo:React.FC<Ipage & RouteComponentProps<any>> = props => {
    return (
        <VStack alignItems="center" justifyContent="center" w="100%" h="100%" p="4rem">
            <Text fontSize="2rem" fontWeight="700" data-testid="CatalogoTitulo">Catalogo: {props.name}</Text>
        </VStack>
    );
}
export default withRouter(Catalogo)