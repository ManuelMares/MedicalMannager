import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";
import ContainerForm from "../ContainerForm/ContainerForm";
import Label from "../Label";
import TextInput from "../TextInput";
import Title from "../Title";

const NewPacient = () => {
  const titulo = <Title value="Forma para Nuevo Paciente"/>

  const nombreCompleto = {
    name: "inputNombre",
    placeholder: "Nombre completo",
    label: <Label value="Rodrigo Rodriguez Rodriguez" />,
  };  
  const fechaNacimiento = {
    name: "inputFechaNacimiento",
    placeholder: "7/10/1997",
    label: <Label value="Fecha de nacimiento" />,
  };  
  const genero = {
    name: "inputGenero",
    placeholder: "Masculino",
    label: <Label value="Género" />,
  };

  
  const direccion = {
    name: "inputDireccion",
    placeholder: "calle el paseo, 89",
    label: <Label value="Dirección" />,
  };  
  const telefono = {
    name: "inputTelefono",
    placeholder: "2254646978",
    label: <Label value="Teléfono" />,
  };
  const correoElectronico = {
    name: "inputCorreoElectronico",
    placeholder: "rodrigo@rodriguez.com",
    label: <Label value="Correo Electrónico" />,
  };

  
  const padecimientos = {
    name: "inputPadecimientos",
    placeholder: "Diabetes",
    label: <Label value="Padecimientos" />,
  };
  const alergias = {
    name: "inputAlergias",
    placeholder: "naproxeno",
    label: <Label value="Alérgias" />,
  };
  const historialMedico = {
    name: "inputHistorialMedico",
    placeholder: "Coronavirus",
    label: <Label value="Historial Médico" />,
  };


  const Forma = [<TextInput {...nombreCompleto} />, <TextInput {...fechaNacimiento} />, <TextInput {...genero} />,
    <TextInput {...direccion} />, <TextInput {...telefono} />, <TextInput {...correoElectronico}/>,
    <TextInput {...padecimientos} />, <TextInput {...alergias} />, <TextInput {...historialMedico}/>
    ];  

  return (
    <Box>
      <ContainerForm Title={titulo} Form={Forma} />
    </Box>
  );

};

export default NewPacient;
