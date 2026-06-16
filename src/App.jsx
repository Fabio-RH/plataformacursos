import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import Footer from './components/shared/Footer/Footer.jsx'
import ToggleBar from './components/auth/toggleBar/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<ToggleBar option1="Login" option2="Criar Conta" 
  onToggle={(option) => console.log(`Opção selecionada: ${option}`)} />

<Footer/>
    </>
  )
}

export default App
