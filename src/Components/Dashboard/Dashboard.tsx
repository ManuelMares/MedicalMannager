import React from 'react';
import {Text, VStack, Flex} from "@chakra-ui/react";
import {Link, Route, BrowserRouter, withRouter, RouteComponentProps} from "react-router-dom";
import Ipage from '../../Interfaces/Page';


const Dashboard:React.FC<Ipage & RouteComponentProps<any>>  = props => {

    return (
        <VStack>
            <Text data-testid="DashboardTitulo">Hola. Este es el dashboard {props.name}</Text>
        </VStack>
    );
}

export default withRouter(Dashboard)