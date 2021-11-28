import React, {FC, useEffect, useState} from 'react';
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
    //TODO: use location to indicate which url you are on
    const url = '/' + Vinculo
    let location = useLocation();    
    const [bgActive, setBgACtive] = useState<string>("white")

    const isWidthAuto = Width !== 'auto';
    const itemAlignment = isWidthAuto ? 'center' : 'start'
    const itemBackground = isWidthAuto ? "#BDE2F3" : ''


    const ButtonText: FC = () =>{
        return(
        <>            
            {isWidthAuto && 
            <Text lineHeight="0 !important" m="0 !important" pl="1rem" color={Color} fontWeight="700">
                {Name}
            </Text>}
        </>)
    }


    return(
        <>
            <Link data-testid="linkPrincipal" to={url}>    
             <Stack w={Width} p="0.5rem !important" justifyContent="flex-start" flexDir='row'
                fontSize={FontSize} backgroundColor={bgActive}  alignItems={itemAlignment}  _hover={{background: itemBackground}}>
                    {Icon}
                    <ButtonText/>                   
                </Stack>
            </Link>
        </>
    );
}