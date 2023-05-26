import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from 'context/UserContext.jsx'
import OrderProvider from 'context/OrderContext.jsx'
import LocalStorageProvider from './context/LocaStorageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <UserProvider>
          <OrderProvider>
            <LocalStorageProvider>
              <App />
            </LocalStorageProvider>
          </OrderProvider>
        </UserProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
