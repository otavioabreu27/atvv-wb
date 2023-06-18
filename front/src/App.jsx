import { useState } from 'react'
import { Clientes } from './pages/Clientes';
import './App.css'

function App() {
  const [tela, setTela] = useState('clientes')
  
  function renderizaTela() {
    if (tela == 'clientes') {
      return Clientes
    }
  }
  
  return (
    <>
      {renderizaTela()}
    </>
  )
}

export default App
