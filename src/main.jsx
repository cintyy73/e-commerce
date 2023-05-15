import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
// import { MenuProvider } from './hooks/MenuContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        {/* <MenuProvider> */}
        <App />
        {/* </MenuProvider> */}
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
