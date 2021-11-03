import React, {useEffect} from 'react';
import {VentanaModal} from '../VentanaModal/VentanaModal';
import './Menu.scss';
import '../../index.scss';
import {Stack, VStack, HStack, Button, Text, useColorMode} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-regular-svg-icons";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {Link, Route, BrowserRouter} from "react-router-dom";
import {useSelector} from 'react-redux'




export const Menu:React.FC = () => {
    var IsLoggedIn = false;
    interface RootState {
        islogged: boolean
    }

    
    IsLoggedIn = useSelector((state: RootState) => {
        return state.islogged;
    });

    const { colorMode, toggleColorMode } = useColorMode();
    

    return(
        <>
            <Stack w="100%" pl="2rem" pr="2rem" h="3rem" bg="white" boxShadow="0px 10px 20px -5px  #000000b2" zIndex="-1" direction="row" alignItems="center" justifyContent="space-between">
                <Stack> 
                        <Link data-testid="linkPrincipal" to={'/'} className="MenuTexto">Dashboard</Link>
                </Stack>

                <HStack  alignItems="center" >
                        <Link data-testid="linkCatalogo"  to={'/Catalogo'}>Catalogo</Link>
                        {
                            IsLoggedIn ?
                            <Link className="boton rojo" data-testid="linkLogIn"  to={'/IniciarSesion'}>Cerrar Sesión</Link>:
                            <Link className="boton azul" data-testid="linkLogOut" to={'/IniciarSesion'}>Iniciar Sesión</Link>
                        }     
                    {/* <Button size="sm" fontSize="1rem" colorScheme="blue" variant="ghost" onClick={toggleColorMode}>
                        {colorMode === "light" ?           
                        <FontAwesomeIcon color="#000000" icon={faMoon} /> : 
                        <FontAwesomeIcon color="#ffc811" icon={faSun} />}
                    </Button> */}
                </HStack>
            </Stack>
        </>
    );
}