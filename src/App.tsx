import React from 'react';
import { Players } from './features/players/Players';
import './App.css';
import { Box, Image } from '@chakra-ui/react';
import FormComponent from './features/Form/Form';

function App() {
  return (
    <div className="App">
      <Box className="App-header" mx={{ base: "10px", md: "0" }}>
        <Image mt={30} src={'https://res.cloudinary.com/ducmbpfde/image/upload/v1625836216/nba_logo_npw9re.png'} className="App-logo" alt="logo" />
        <Box w="100%">
          <FormComponent></FormComponent>
        </Box>
        <Players />
      </Box>
    </div>
  );
}

export default App;
