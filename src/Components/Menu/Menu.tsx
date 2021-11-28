import React, {useEffect, useState} from 'react';
import './Menu.scss';
import '../../index.scss';
import {Stack, VStack, HStack, Button, Text, useColorMode, ScaleFade, Slide} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-regular-svg-icons";
import {faChartLine, faListAlt, faUser, faUserInjured, faBars} from "@fortawesome/free-solid-svg-icons";
import {Link, Route, BrowserRouter, useLocation} from "react-router-dom";
import {useSelector} from 'react-redux'
import { LinkMenu } from './LinkMenu/LinkMenu';




export const Menu:React.FC = () => {
    var IsLoggedIn = false;
    interface RootState {
        islogged: boolean
    }
    
    IsLoggedIn = useSelector((state: RootState) => {
        return state.islogged;
    });

    const [expandedMenu, setExpandedMenu] = useState<boolean>(false)
    const [keepExpandedMenu, setKeepExpandedMenu] = useState<boolean>(false)
    const [onlyIcons, setOnlyIcons] = useState<string>('')
    const [widthMenu, setwidthMenu] = useState<string>('')
    const [fontSize, setFontSize] = useState<string>('1.5rem')
    const [fontColor, setFontColor] = useState<string>('#2C5282')
    const { colorMode, toggleColorMode } = useColorMode();
    
    useEffect(() => {
        if(keepExpandedMenu){}
        else{
            expandedMenu ? setwidthMenu ('15rem') : setwidthMenu('auto') 
            expandedMenu ? setOnlyIcons ('15rem') : setOnlyIcons('auto')
        }
    }, [expandedMenu])
    
    useEffect(() => {
        if(keepExpandedMenu){
            setOnlyIcons ('15rem')
            setwidthMenu ('15rem')
        }else{
            setOnlyIcons('auto')
            setwidthMenu('auto') 
        }console.log("funciona!")
    }, [keepExpandedMenu])
    
    return(
        <>        
            <Stack pos="sticky" w={widthMenu} h="100vh" bg="white" boxShadow="0px 10px 20px -5px  #000000b2" zIndex="5" direction="column" position="fixed"
                onMouseEnter={() => setExpandedMenu(!expandedMenu)} 
                onMouseLeave={() => setExpandedMenu(!expandedMenu)}>
                <Stack w={widthMenu} h="10vh" justifyContent="center" alignItems="center" m='0' p="0">
                    <Button w="100%" m="0 !important" p="0 !important" onClick={() => setKeepExpandedMenu(!keepExpandedMenu)} 
                    background="none" _hover={{background: "#9EC5E0"}} rounded="none"> 
                        <FontAwesomeIcon color={fontColor} icon={faBars} fontSize={fontSize}/>
                    </Button>
                </Stack>
                <Stack w="100%" h="80vh" justifyContent="center" m='0'> 
                    <LinkMenu Width={onlyIcons} Icon={<FontAwesomeIcon color={fontColor} icon={faUserInjured} fontSize={fontSize}/>} Vinculo="NewPacient" Name="Vinculo" FontSize={fontSize} Color={fontColor}/>
                    <LinkMenu Width={onlyIcons} Icon={<FontAwesomeIcon color={fontColor} icon={faChartLine} fontSize={fontSize}/>} Vinculo="Dashboard" Name="Dashboard" FontSize={fontSize} Color={fontColor}/>
                    <LinkMenu Width={onlyIcons} Icon={<FontAwesomeIcon color={fontColor} icon={faListAlt} fontSize={fontSize}/>} Vinculo="Catalogo" Name="Cataloge" FontSize={fontSize} Color={fontColor}/>
                </Stack>
                <Stack w="100%" h="10vh"  m='0'> 
                    {
                        IsLoggedIn ?
                        <LinkMenu Width={onlyIcons} Icon={<FontAwesomeIcon color={fontColor} icon={faUser} fontSize={fontSize}/>} Vinculo="IniciarSesion" Name="Iniciar Sesion" FontSize={fontSize} Color={fontColor}/>:
                        <LinkMenu Width={onlyIcons} Icon={<FontAwesomeIcon color={fontColor} icon={faUser} fontSize={fontSize}/>} Vinculo="IniciarSesion" Name="Cerrar Sesion" FontSize={fontSize} Color={fontColor}/>
                    }  
                </Stack>   
            </Stack>
        </>
    );
}