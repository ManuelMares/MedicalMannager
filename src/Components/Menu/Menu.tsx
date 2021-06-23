import React, {useEffect, useState} from 'react';
import MenuOpcion from './MenuOpcion/MenuOpcion';
import './Menu.scss';
import '../../index.scss';
import {Stack, Flex, HStack, Button, Text, useColorMode} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-regular-svg-icons";
import {faMoon, faBars, faUser, faFlask, faProcedures, faDoorOpen, faUserInjured} from "@fortawesome/free-solid-svg-icons";
import {Link, Route, BrowserRouter, withRouter} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {SignIn, SignOut} from '../../Actions/Index';





const Menu:React.FC = () => {
    var IsLoggedIn = false;
    interface RootState {islogged: boolean}    
    IsLoggedIn = useSelector((state: RootState) => {return state.islogged;});
    const dispatch = useDispatch();
    const colorIcono = "white";

    const { colorMode, toggleColorMode } = useColorMode();
    const [abrirMenu, setAbrirMenu] =  useState<boolean>(false);
    const [menuAbierto, setMenuAbierto] = useState<boolean>(false);
    const mantenerMenuAbierto = () => {
        //si se exporta esta variable con redux a una global, puede reducirse el tamaño del dashboard cuando el menú esté fijo
        setMenuAbierto(!menuAbierto)
    }
    const onHover = () =>{!menuAbierto && setAbrirMenu(true)}
    const onMouseOut = () =>{!menuAbierto && setAbrirMenu(false)}
    

    return(                
        <Flex position="fixed" zIndex="1000" boxShadow="0px 10px 20px -5px  #000000b2" bgColor="#3182CE" 
            padding="1rem 0.5rem" h="100vh"  w={abrirMenu? "12rem" : "auto"} flexDirection="column" 
            alignItems="flex-start" justifyContent="space-between" 
            onMouseEnter={onHover}  onMouseLeave={onMouseOut}>
            
            <Flex>   
                <Button m="0" onClick={mantenerMenuAbierto} w={abrirMenu? "11rem" : "2rem"}><FontAwesomeIcon color="#3182CE" icon={faBars}/> </Button>
            </Flex>  
            <Flex flexDirection="column" alignItems="flex-start" justifyContent="space-between">
                <MenuOpcion fuente="1.5rem" tam= {abrirMenu} url="Dashboard" titulo="Dashboard" color={colorIcono} icono={<FontAwesomeIcon icon={faUser} />}/>
                <MenuOpcion fuente="1.5rem" tam= {abrirMenu} url="Catalogo" titulo="Catálogo" color={colorIcono} icono={<FontAwesomeIcon icon={faUser} />}/>
                <MenuOpcion fuente="1rem" tam= {abrirMenu} url="Pacientes" titulo="Pacientes" color={colorIcono} icono={<FontAwesomeIcon icon={faProcedures}  />}/>
                <MenuOpcion fuente="1.5rem" tam= {abrirMenu} url="NuevoPaciente" titulo="Nuevo Paciente" color={colorIcono} icono={<FontAwesomeIcon icon={faUserInjured}  />}/>
            </Flex>                
            <Flex>
                {
                    !IsLoggedIn ?                      
                    <MenuOpcion fuente="1.5rem" tam= {abrirMenu} url="IniciarSesion" titulo="Iniciar Sesion" color={colorIcono} icono={<FontAwesomeIcon icon={faFlask}  />}/>:                    
                    <Flex onClick={() => dispatch(SignOut())} w={abrirMenu ? "11rem" : "auto" }  h="auto" flexDirection="row" p="0.5rem" paddingBotton="1rem" borderRadius="0.5rem"
                    _hover={{background: "#68D391",}} alignItems="center" justifyContent="flexStart">
                        <Flex fontSize="1.5rem"><FontAwesomeIcon icon={faDoorOpen} color={colorIcono} /></Flex>
                        <Flex >{abrirMenu && <Text fontWeight="500">Cerrar Sesion</Text>}</Flex>
                    </Flex>
                }
            </Flex>
        </Flex>
    );
}

export default Menu