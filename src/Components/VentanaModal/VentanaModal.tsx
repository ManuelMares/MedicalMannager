import React, {useState} from 'react';
import {useDisclosure , Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from "@chakra-ui/react"

interface Props{
  titulo: string;
  children: JSX.Element | null;
}
export const VentanaModal:React.FC<Props> = ({titulo, children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button data-testid="BotonModal" onClick={onOpen}>Iniciar sesión</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent boxShadow="dark-lg" border="1px" borderColor="#3182CE" borderRadius="5px" h="auto" w="30%">
          <ModalHeader color="#2B6CB0"  data-testid="TituloModal" >{titulo}</ModalHeader>
          <ModalCloseButton />
          <ModalBody> {children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
