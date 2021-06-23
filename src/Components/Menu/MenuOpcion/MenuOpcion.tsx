import React, {useState} from 'react';
import './MenuOpcion.scss';
import '../../../index.scss';
import {Stack, Flex, HStack, Button, Text, useColorMode} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-regular-svg-icons";
import {faMoon, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link, Route, BrowserRouter, withRouter} from "react-router-dom";
import {useLocation} from "react-router-dom";

interface Props {
    tam: boolean,
    titulo: string,
    icono: React.ReactNode,
    url: string,
    fuente: string,
    color: string,
}


const MenuOpcion:React.FC<Props> = (props): JSX.Element => {
    let location = useLocation();
    return(     
        <Route>
            {
                location.pathname == `/${props.url}` ?
                <Flex w={props.tam ? "11rem" : "auto" }  h="auto" paddingRight="0" flexDirection="row" p="0.5rem" paddingBotton="1rem" borderRadius="0.5rem"
                    bgColor="#48BB78" alignItems="center" justifyContent="flexStart">
                    <Flex paddingRight={props.tam ? "1rem" : "0"} fontSize={props.fuente} color="white">{props.icono}</Flex>
                    <Flex >{props.tam && <Text  fontWeight="600" color="white">{props.titulo}</Text>}</Flex>
                </Flex>:                
                <Link to={`/${props.url}`}>
                    <Flex w={props.tam ? "11rem" : "auto" }  h="auto" paddingRight="0" flexDirection="row" p="0.5rem" paddingBotton="1rem" borderRadius="0.5rem"
                        _hover={{background: "#68D391",}} alignItems="center" justifyContent="flexStart">
                        <Flex color={props.color} paddingRight={props.tam ? "1rem" : "0"} fontSize={props.fuente}>{props.icono}</Flex>
                        <Flex>{props.tam && <Text fontWeight="600" color="white">{props.titulo}</Text>}</Flex>
                    </Flex>
                </Link> 
            }
        </Route> 
    );
}

export default MenuOpcion