import React, {useState} from 'react';
import './IniciarSesion.css';
import '../../index.scss';
import {Text, Checkbox, Stack, VStack, Link , Input, InputGroup, Button, InputRightElement, FormControl, FormLabel, FormErrorMessage, FormHelperText, } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle, faEyeSlash, faEye} from "@fortawesome/free-solid-svg-icons";
import {useSelector, useDispatch} from 'react-redux';
import {SignIn, SignOut} from '../../Actions/Index';
import { createBreakpoints } from "@chakra-ui/theme-tools"

export const IniciarSesion:React.FC = () => {
  const dispatch = useDispatch();
  var IsLoggedIn = false;

  interface RootState {islogged: boolean}  
  IsLoggedIn = useSelector((state: RootState) => {return state.islogged;});

  const [mostrar, setMostrar] = useState<boolean>(false)
  function MostrarPassword(){setMostrar(mostrar ? false: true)}
  const [correo, setCorreo] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [recordar, setRecordar] = useState<boolean>(false)
  function Enviar(){}


  if(IsLoggedIn){
    return(
        <Stack w="100%" h="100vh" textSize={{base:"5rem", sm: "5rem", md: "5rem", lg: "2rem", xl: "10rem" }} color="white" fontWeight="600" p="5rem" bgColor="#2C5282" alignItems="center" justifyContent="center" >
            <Text>Ya hay una sesión iniciada. ¿Desea cerrar la sesión actual?</Text>
            <Stack w={{ sm: "10rem", md: "15rem", lg: "15rem", xl: "20rem" }}>
              <Link  to={'/'} className="boton rojo">Cerrar Sesión</Link>
            </Stack>
        </Stack>
    ) 
  }

  return (
    <VStack p={{ base: "0rem", sm: "0.5rem", lg: "2rem", xl: "3rem" }} alignItems="center" justifyContent="center" h="100%" w="100%" bgColor="#2C5282">

      <Stack   alignItems="center" justifyContent="center" flexDirection="row" p="0.5rem">
        <FontAwesomeIcon icon={faUserCircle} className="LogIn_icono"/>
        <Text fontWeight="600" fontSize="1.8rem" color ="white">Medical Manager</Text>
      </Stack>  

      <VStack p={{ base: "1rem", sm: "1.5rem", lg: "2.5rem", xl: "3rem" }} boxShadow="dark-lg" bgColor="white" border="1px" borderColor="#3182CE" borderRadius="1rem" h="auto" w={{ base: "100%", sm: "90%", md: "50%", lg: "45%", xl: "35rem" }} alignItems="center" justifyContent="center" >        
        <Stack   alignItems="flex-start" justifyContent="flex-start" paddingBottom="0.5rem" w="100%" >
          <Text fontWeight="600" fontSize="1.3rem" p="0" >Iniciar sesión <br/> 
          <span className="LogIn_SecondaryText">ingrese sus credenciales para accesar a:</span></Text>
        </Stack>  

        <Stack   alignItems="center" justifyContent="center" p="0.5rem" bgColor="#C4F1F9" w="100%">
          <Text fontWeight="600" fontSize="1rem" color="#2C5282">MedicalManager.com</Text>
        </Stack>  

        <FormControl  id="email" paddingBottom="1.8rem" >
          <FormLabel color="#2B6CB0">Correo</FormLabel>
          <Input value={correo} type="email" marginBottom="1.8rem" placeholder="Ejem: rodrigo@rodriguez.com"/>
          
          <FormLabel color="#2B6CB0" >Contraseña</FormLabel>
          <InputGroup size="md" marginBottom="0.8rem">
            <Input value={password} pr="4.5rem" type={mostrar ? "text" : "password"}placeholder="********"/>
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" colorScheme="blue" variant="outline" onClick={MostrarPassword}> {mostrar ==true ?                 
                <FontAwesomeIcon icon={faEyeSlash} /> :                 
                <FontAwesomeIcon icon={faEye} />}
              </Button>
            </InputRightElement>
          </InputGroup > 
          <Stack alignItems="center" justifyContent="space-between"  flexDirection="row" >
            <Checkbox colorScheme="blue" fontSize="0.5rem" fontWeight="400" mt="0.5rem" isChecked={recordar} onChange={() => setRecordar(!recordar)}>Recordar mis datos</Checkbox>        
            <Link color="#2C5282" fontWeight={600} href="#" fontSize="1rem"> Recuperar Contraseña</Link>
          </Stack>


          <Stack  alignItems="center" justifyContent="center" pt="2rem">
            <Button mt="1rem" colorScheme="blue" type="submit" onClick={() => dispatch(SignIn())} w="100%"> Ingresar </Button>
            <Button mt="1rem" colorScheme="blue" type="submit" onClick={() => dispatch(SignOut())} w="100%"> Salir </Button>
          </Stack>
        </FormControl>        
      </VStack>
    </VStack>
  );
}
