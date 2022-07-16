import React, {useState} from 'react';
import './App.css';
import {Box, Button, Container, Modal, Typography} from "@mui/material";
import LoginComponent from "./components/LoginComponent";

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
        
  return (
   <Container>
       <Typography variant='h2' textAlign='center' sx={{bgcolor: 'white', color: '#e6126a'}}>Welcome to <b>RandGame</b></Typography>
        <Box sx={{display: 'flex', justifyContent: 'center', mt: 5}}>
            <Button variant='contained' onClick={handleOpenModal} size='large'>Login</Button>
        </Box>    
       <Modal
           open={modalOpen}
           onClose={handleCloseModal}
       >
           <Box sx={modalStyle}>
               <LoginComponent />
           </Box>
       </Modal>
   </Container> 
  )
}

export default App;
