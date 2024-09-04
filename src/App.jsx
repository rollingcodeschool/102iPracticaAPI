import { Button, Container } from "react-bootstrap"
import Frase from "./components/Frase"
import logo from './assets/logosimpson.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  
  return (
    <Container className="text-center my-5">
      <img src={logo} alt="Logo simpson" className="w-50 mb-4"/>
      <Frase></Frase>
      <Button variant="warning" className="mt-4">Enviar</Button>
    </Container>
  )
}

export default App
