import React, {useEffect, useState} from 'react';
import {Stack, VStack, HStack, Button, Text, useColorMode, Icon} from "@chakra-ui/react"
import {useSelector} from 'react-redux'
import './LinkMenu.scss';
import {Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-regular-svg-icons";
import {faChartLine} from "@fortawesome/free-solid-svg-icons";

type Props = {
    Width: string;
    Icon: React.ReactNode;
    Vinculo: string;
    Name: string;
    FontSize: string;
    Color: string
}



export const LinkMenu: React.FC<Props> = ({ Width, Icon, Vinculo, Name, FontSize, Color})=> {
    const url = '/' + Vinculo
    let location = useLocation();    
    const [bgActive, setBgACtive] = useState<string>("white")

    const DefineWidthMenu = () => {
        if (Width=='auto'){
            return (
                <Stack w={Width} p="0.5rem !important" alignItems="start" justifyContent="flex-start" flexDir='row'
                fontSize={FontSize} backgroundColor={bgActive}>
                    {Icon} 
                </Stack>)
            
        }else{
            return (
                <Stack w={Width} padding="0.5rem !important" alignItems="center" justifyContent="flex-start" flexDir='row'
                fontSize={FontSize} backgroundColor={bgActive}  _hover={{background: "#BDE2F3"}} >
                    {Icon} 
                    <Text fontSize={FontSize} lineHeight="0 !important" m="0 !important" pl="1rem" color={Color} fontWeight="700">
                        {Name}
                    </Text> 
                </Stack>)
        }        
    }
    
    useEffect(() => {
        DefineWidthMenu()
        if(location.pathname.toString() == url){
            setBgACtive("#5C93CB")
        }else{
            setBgACtive("white")
        }
    })

    return(
        <>
            <Link data-testid="linkPrincipal" to={url}> 
                {
                    DefineWidthMenu()                  
                }
            </Link>
        </>
    );
}