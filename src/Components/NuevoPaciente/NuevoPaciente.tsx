import React, {Fragment, useState, forwardRef, FunctionComponent, useEffect } from 'react';
import './NuevoPaciente.scss';
import {Paciente, IPaciente} from './Interfaces';
import '../../index.scss';
import {Text, Flex, Stack, VStack, Link , Input, InputGroup, Button, 
    InputRightElement, FormControl, FormLabel, FormErrorMessage, FormHelperText, Divider, } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle, faEyeSlash, faEye} from "@fortawesome/free-solid-svg-icons";
import {useSelector, useDispatch} from 'react-redux';
import {SignIn, SignOut} from '../../Actions/Index';
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { withRouter, RouteComponentProps} from "react-router-dom";
import Ipage from '../../Interfaces/Page';
import { useForm, SubmitHandler } from "react-hook-form";

const NuevoPaciente:React.FC<Ipage & RouteComponentProps<any>> = props => {
    const paciente: IPaciente = {
        primerNombre: "",
        primerApellido: "",
        otrosNombres: "",
        otrosApellidos: "",
        fechaNacimiento: "",
        
        estado: "",
        ciudad: "",
        colonia: "",
        calle: "",
        numero: "",
        cp: "",
        
        correo: "",
        telefono: "",
        
        tipoSangre: "",
        estatura: "",
        peso: ""
    }
    
    const dispatch = useDispatch();
    var IsLoggedIn = false;
    interface RootState {islogged: boolean}  
    IsLoggedIn = useSelector((state: RootState) => {return state.islogged;});
    function Enviar(){}
    
    function Dato (data: any){
        console.log(data);
        paciente.primerNombre = data;
        console.log("paciente:  " + paciente.primerNombre)
    }

    
    const { register, formState: { errors }, handleSubmit } = useForm<IPaciente>();
    const onSubmit: SubmitHandler<IPaciente> = data => console.log(data);

    const Error = (texto:Array<string>) => {
        console.log(`error: ${texto.length}`);
        return(
            texto.map((t, index) => {
                return(
                    <Text key={index} fontWeight="400" color="red" p="0.5rem" boxShadow= "0 0 1pt 1pt red" bgColor="#FEB2B2" borderRadius="5px">
                        {t}
                    </Text>
                )
            })
        )
    }


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

            <form onSubmit={handleSubmit(onSubmit)}>                 
                <Text fontWeight="600" color="#2B6CB0" fontSize={{base: "0.8rem", md:"1.2rem", lg:"1.4rem"}} >Datos Personales</Text>                
                <Flex flexDirection="row" flexWrap="wrap" flexAlign="center" justifyContent="space-between" 
                p="1rem" outline="1px solid #CBD5E0" borderRadius="1rem" marginBottom="3rem">
                    <Stack width="45%" marginTop="0" p="0"> 
                        <FormLabel m="0" p="0" >Primer nombre</FormLabel>
                        <Input paddingRight="1rem" placeholder="Ejem: Rodrigo"
                        {...register("primerNombre", { required: true, maxLength: 35 })}/>
                        {errors.primerNombre && Error(['El primer nombre es obligatorio', 'No puede exceder los 35 caracteres'])}
                    </Stack>
                    
                    <Stack width="45%"  marginTop="0" p="0"> 
                        <FormLabel  m="0" p="0">Otros nombres</FormLabel>
                        <Input type="text" paddingRight="1rem" placeholder="Use espacios para más de un nombre"
                        {...register("otrosNombres")}/>
                    </Stack>
                    <Stack width="45%" marginTop="1rem" p="0"> 
                        <FormLabel  m="0" p="0" >Primer apellido</FormLabel>
                        <Input type="text" paddingRight="1rem" placeholder="Ejem: Rodrigo"
                        {...register("primerApellido", { required: true, maxLength: 35 })}/>
                        {errors.primerNombre && Error(["El primer apellido es obligatorio"])}
                    </Stack>
                    <Stack width="45%" marginTop="1rem" p="0"> 
                        <FormLabel  m="0" p="0" >Otros apellidos</FormLabel>
                        <Input type="text" paddingRight="1rem" placeholder="Use espacios para más de un apellido"
                        {...register("otrosApellidos")}/>
                    </Stack>
                    <Stack width="45%" marginTop="1rem"> 
                        <FormLabel  m="0" p="0" >Fecha de nacimiento</FormLabel>
                        <Stack outline="1px solid #EDF2F7" p="0.2rem 0.2rem 0.2rem 1rem" borderRadius="1rem" >
                            <DatePicker selected={paciente.fechaNacimiento} onChange={(fecha:any) => {paciente.fechaNacimiento = fecha}} 
                            placeholderText="Click aquí" maxDate={new Date()}/>
                        </Stack>
                    </Stack>
                </Flex>


                <Text fontWeight="600" color="#2B6CB0" fontSize={{base: "0.8rem", md:"1.2rem", lg:"1.4rem"}} >Datos de Contacto</Text>                
                <Flex flexDirection="row" flexWrap="wrap" flexAlign="center" justifyContent="space-between" 
                p="1rem" outline="1px solid #CBD5E0" borderRadius="1rem" marginBottom="3rem">
                    <Stack width="45%" p="0" marginTop="0rem"> 
                        <FormLabel m="0" p="0" >Correo</FormLabel>
                        <Input type="email" marginBottom="1.8rem" placeholder="Ejem: rodrigo@rodriguez.com"
                        {...register("correo", { required: true, pattern:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}/>
                        {errors.primerNombre && Error(["El correo electrónico es obligatorio", "El formato debe ser 'rodrigo@rodriguez.com'"])}
                    </Stack>
                    <Stack width="45%"  marginTop="0" p="0"> 
                        <FormLabel m="0" p="0" >Telefono</FormLabel>
                        <Input type="string" marginBottom="1.8rem" placeholder="Ejem: 2285859656"
                        {...register("telefono", { required: true, maxLength: 10 })}/>
                        {errors.primerNombre && Error(["El teléfono obligatorio", "No debe incluir extensión (10 dígitos)"])}
                    </Stack>
                    <Text p="1rem" m="1rem" fontWeight="600" color="#718096" fontSize={{base: "0.8rem", md:"1rem", lg:"1.2rem"}}>
                        Dirección------------------------------------------------------------
                    </Text>
                    <Stack width="45%"  marginTop="1rem" p="0"> 
                        <FormLabel m="0" p="0" >Estado</FormLabel>
                        <Input type="text" marginBottom="1.8rem" placeholder="Ejem: Chihuahua"
                        {...register("estado")}/>
                    </Stack>
                    <Stack width="45%"  marginTop="1rem" p="0"> 
                        <FormLabel m="0" p="0" >Ciudad</FormLabel>
                        <Input type="text" marginBottom="1.8rem" placeholder="Ejem: Chihuahua"
                        {...register("ciudad")}/>
                    </Stack>
                    <Stack width="45%"  marginTop="1rem" p="0"> 
                        <FormLabel m="0" p="0" >Colonia</FormLabel>
                        <Input type="text" marginBottom="1.8rem" placeholder="Ejem: Huixmatlapan"
                        {...register("colonia")}/>
                    </Stack>
                    <Stack width="45%"  marginTop="1rem" p="0"> 
                        <FormLabel m="0" p="0" >Calle (y número exterior)</FormLabel>
                        <Input type="text" marginBottom="1.8rem" placeholder="Ejem: paseo de la luz (4035)"
                        {...register("calle")}/>
                    </Stack>
                    <Stack width="45%"  marginTop="1rem" p="0"> 
                        <FormLabel m="0" p="0" >Numero Interior</FormLabel>
                        <Input type="text" marginBottom="1.8rem" placeholder="Ejem: 89"
                        {...register("numero")}/>
                    </Stack>
                    <Stack width="45%"  marginTop="1rem" p="0"> 
                        <FormLabel m="0" p="0" >Codigo Postal</FormLabel>
                        <Input type="text" marginBottom="1.8rem" placeholder="58647"
                        {...register("cp")}/>
                    </Stack>
                </Flex>



                <Text fontWeight="600" color="#2B6CB0" fontSize={{base: "0.8rem", md:"1.2rem", lg:"1.4rem"}}>Datos Médicos</Text>                
                <Flex flexDirection="row" flexWrap="wrap" flexAlign="center" justifyContent="space-between"
                p="1rem" outline="1px solid #CBD5E0" borderRadius="1rem" marginBottom="3rem">
                    <Stack width="45%" p="0" marginTop="0rem"> 
                            <FormLabel  marginTop="0" p="0" >Estatura (en metros)</FormLabel>
                            <Input value={paciente.estatura } type="text" marginBottom="1.8rem" placeholder="Ejem: 1.02"/>
                    </Stack>
                    <Stack width="45%" p="0" marginTop="0rem" > 
                            <FormLabel m="0" p="0" >Peso (en Kilogramos)</FormLabel>
                            <Input value={paciente.peso } type="text" marginBottom="1.8rem" placeholder="Ejem: 172"/>
                    </Stack>
                    <Stack width="45%" marginTop="1rem" p="0"> 
                            <FormLabel m="0" p="0">Grupo sanguineo</FormLabel>
                            <Input value={paciente.tipoSangre} type="text" marginBottom="1.8rem" placeholder="Ejem: 0+"/>
                    </Stack>
                </Flex>

                <Stack flexDirection={{base:"column", md:"row"}} alignItems={{base:"center", md:"flex-start"}} justifyContent="space-around" w="100%">
                    <Button marginTop="0.5rem" colorScheme="red" type="submit"w="45%"> Descartar </Button>
                    <Button marginTop="0.5rem" colorScheme="teal" w="45%"> Registrar Paciente </Button>
                </Stack>
            </form>
        </Stack>
    </Stack>
    );
}

export default withRouter(NuevoPaciente)