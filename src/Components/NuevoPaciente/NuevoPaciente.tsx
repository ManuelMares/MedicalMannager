import React, {Fragment, useState, forwardRef, FunctionComponent } from 'react';
import './NuevoPaciente.scss';
import '../../index.scss';
import {Text, Checkbox, Stack, VStack, Link , Input, InputGroup, Button, 
    InputRightElement, FormControl, FormLabel, FormErrorMessage, FormHelperText, } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle, faEyeSlash, faEye} from "@fortawesome/free-solid-svg-icons";
import {useSelector, useDispatch} from 'react-redux';
import {SignIn, SignOut} from '../../Actions/Index';
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export const NuevoPaciente:React.FC = () => {
    interface DatosPersonales{
        primerNombre: string,
        primerApellido: string,
        otrosNombres: string,
        otrosApellidos: string,
        fecha: string,
    }

    interface DatosContaco{
        correo: string,
        telefono: string,
        direccion: [{
            estado: string,
            ciudad: string,
            colonia: string, 
            calle: string, 
            numero: string,
            cp: string,
        }]
    }

    interface DatosMedicos{
        tipoSangre: string,
        estatura: string,
        peso: string,
    }

    interface NuevoPaciente{

    }

    const dispatch = useDispatch();
    var IsLoggedIn = false;

    interface RootState {islogged: boolean}  
    IsLoggedIn = useSelector((state: RootState) => {return state.islogged;});

    const [mostrar, setMostrar] = useState<boolean>(false)
    function MostrarPassword(){setMostrar(mostrar ? false: true)}
    const [correo, setCorreo] = useState<string>('')
    const [fecha, setFecha] = useState()
    const [password, setPassword] = useState<string>('')
    const [recordar, setRecordar] = useState<boolean>(false)
    const [startDate, setStartDate] = useState();
    function Enviar(){}

    if(!IsLoggedIn){
        return(
            <Stack w="100%" h="100vh" textSize={{base:"5rem", sm: "5rem", md: "5rem", lg: "2rem", xl: "10rem" }} color="white" fontWeight="600" p="5rem" bgColor="#2C5282" alignItems="center" justifyContent="center" >
                <Text>Para Ingresar un paciente necesita estar registrado</Text>
                <Stack w={{ sm: "10rem", md: "15rem", lg: "15rem", xl: "20rem" }}>
                    <Button mt="1rem" colorScheme="blue" type="submit" onClick={() => dispatch(SignIn())} w="100%"> Ingresar </Button>
                </Stack>
            </Stack>
        ) 
    }

  return (      
    <Stack p={{ base: "0rem", sm: "0.5rem", lg: "2rem"}} h="auto" w="100%"
        bgColor="#2C5282"
        alignItems="center" JustifyContenct="center">
        <Stack w={{ base: "100%", sm: "95%", md: "90%", lg: "75%", xl: "55rem" }} 
            p="1rem" display="flex" alignItems="center" justifyContent="center" 
            bgColor="#90CDF4">
            <Text fontWeight="700" fontSize="2rem" color="white">Forma de registro para Nuevo paciente</Text>
        </Stack>

        <Stack marginBottom="1rem" p={{ base: "1rem", sm: "1.5rem", lg: "2.5rem", xl: "3rem" }} h="auto"  w={{ base: "100%", sm: "95%", md: "90%", lg: "75%", xl: "55rem" }}
            boxShadow="dark-lg" bgColor="white" borderRadius="0.4rem"
            alignItems="flex-start" justifyContent="space-between"> 
            <Text paddingBottom="1rem" fontWeight="600" color="#2B6CB0" fontSize={{base: "0.8rem", md:"1.2rem", lg:"1.4rem"}}>Datos Personales</Text>
            <FormControl  id="email" paddingBottom="1.8rem" >
                <FormLabel >Primer nombre</FormLabel>
                <Input value={correo } type="text" marginBottom="1.8rem" placeholder="Ejem: Rodrigo"/>

                <FormLabel >Otros nombres</FormLabel>
                <Input value={ correo} type="text" marginBottom="1.8rem" placeholder="Use espacios para más de un nombre"/>
                
                <FormLabel >Primer apellido</FormLabel>
                <Input value={correo } type="text" marginBottom="1.8rem" placeholder="Ejem: Rodrigo"/>

                <FormLabel >Otros apellidos</FormLabel>
                <Input value={ correo} type="text" marginBottom="1.8rem" placeholder="Use espacios para más de un apellido"/>

                <FormLabel >Fecha de nacimiento</FormLabel>
                <Stack marginBottom="1.8rem" with="auto" outline="1px solid #EDF2F7" p="1rem" borderRadius="1rem" >
                    <FormLabel >Seleccione una fecha</FormLabel>
                    <DatePicker selected={fecha} onChange={(date:any) => setFecha(date)} 
                    placeholderText="Click aquí"
                    maxDate={new Date()} autoFocus />
                </Stack>
            </FormControl> 
        </Stack>
        
        <Stack marginBottom="1rem" p={{ base: "1rem", sm: "1.5rem", lg: "2.5rem", xl: "3rem" }} h="auto"  w={{ base: "100%", sm: "95%", md: "90%", lg: "75%", xl: "55rem" }}
            boxShadow="dark-lg" bgColor="white" borderRadius="0.4rem"
            alignItems="flex-start" justifyContent="space-between"> 
            <Text fontWeight="600" color="#2B6CB0" fontSize={{base: "0.8rem", md:"1.2rem", lg:"1.4rem"}}>Datos de contacto</Text>   
            <FormControl  id="email" paddingBottom="1.8rem" >
            <FormLabel >Correo</FormLabel>
                <Input value={correo } type="email" marginBottom="1.8rem" placeholder="Ejem: rodrigo@rodriguez.com"/>

                <FormLabel >Telefono</FormLabel>
                <Input value={ correo} type="number" marginBottom="1.8rem" placeholder="Ejem: (044)2281857854"/>
                
                <Text paddingBottom="1rem" fontWeight="600" color="#718096" fontSize={{base: "0.8rem", md:"1rem", lg:"1.2rem"}}>
                    Dirección------------------------------------------------
                </Text>

                <FormLabel >Estado</FormLabel>
                <Input value={correo } type="text" marginBottom="1.8rem" placeholder="Ejem: Chihuahua"/>
                
                <FormLabel >Ciudad</FormLabel>
                <Input value={correo } type="text" marginBottom="1.8rem" placeholder="Ejem: Chihuahua"/>

                <FormLabel >Colonia</FormLabel>
                <Input value={ correo} type="text" marginBottom="1.8rem" placeholder="Ejem: Huixmatlapan"/>
                
                <FormLabel >Calle (y número exterior)</FormLabel>
                <Input value={correo } type="text" marginBottom="1.8rem" placeholder="Ejem: paseo de la luz (4035)"/>
                
                <FormLabel >Numero Interior</FormLabel>
                <Input value={ correo} type="text" marginBottom="1.8rem" placeholder="Ejem: 89"/>

                <FormLabel >Codigo Postal</FormLabel>
                <Input value={ correo} type="text" marginBottom="1.8rem" placeholder="58647"/>
            </FormControl> 
        </Stack>
        
        <Stack marginBottom="1rem" p={{ base: "1rem", sm: "1.5rem", lg: "2.5rem", xl: "3rem" }} h="auto"  w={{ base: "100%", sm: "95%", md: "90%", lg: "75%", xl: "55rem" }}
            boxShadow="dark-lg" bgColor="white" borderRadius="0.4rem"
            alignItems="flex-start" justifyContent="space-between"> 
            <Text paddingBottom="1rem" fontWeight="600" color="#2B6CB0" fontSize={{base: "0.8rem", md:"1.2rem", lg:"1.4rem"}}>Datos Médicos</Text>
            <FormControl  id="email" paddingBottom="1.8rem" >
                <FormLabel >Grupo sanguineo</FormLabel>
                <Input value={correo} type="text" marginBottom="1.8rem" placeholder="Ejem: 0+"/>

                <FormLabel >Estatura (en metros)</FormLabel>
                <Input value={correo } type="text" marginBottom="1.8rem" placeholder="Ejem: 1.02"/>
                
                <Text fontWeight="600" fontSize={{base: "0.8rem", md:"1rem", lg:"1.2rem"}}>Dirección</Text>

                <FormLabel >Peso (en Kilogramos)</FormLabel>
                <Input value={correo } type="text" marginBottom="1.8rem" placeholder="Ejem: 172"/>
            </FormControl> 
        </Stack>


        <Stack flexDirection={{base:"column", md:"row"}} alignItems={{base:"center", md:"flex-start"}} justifyContent="space-around" w={{ base: "100%", sm: "95%", md: "90%", lg: "75%", xl: "55rem" }}>
            <Button marginTop="0.5rem" colorScheme="red" type="submit" onClick={Enviar} w={{ base: "90%", sm: "90%", md: "43%", lg: "38%", xl: "25rem" }}> Descartar </Button>
            <Button marginTop="0.5rem" colorScheme="teal" type="submit" onClick={Enviar} w={{ base: "90%", sm: "90%", md: "43%", lg: "38%", xl: "25rem" }}> Registrar Paciente </Button>
        </Stack>
  </Stack>
  );
}
