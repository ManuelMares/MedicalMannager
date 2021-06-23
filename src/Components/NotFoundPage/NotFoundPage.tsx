import React from 'react';
import {Text, VStack} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";
import { withRouter, RouteComponentProps} from "react-router-dom";
import Ipage from '../../Interfaces/Page';


const NotFoundPage:React.FC<Ipage & RouteComponentProps<any>> = props => {
    let location = useLocation();
    return (
        <VStack alignItems="center" justifyContent="center" w="100%" h="100%" p="4rem">
            {
                console.log('estoy en notfound')
            }
            <Text fontSize="3rem" fontWeight="900">Error 404: Página no encontrada</Text>
            <Text data-testid="location-display">{location.pathname}</Text>
        </VStack>
    );
}

export default withRouter(NotFoundPage)