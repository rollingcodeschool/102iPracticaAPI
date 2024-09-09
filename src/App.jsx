import { Button, Container, Spinner } from "react-bootstrap";
import Frase from "./components/Frase";
import logo from "./assets/logosimpson.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [frasePersonaje, setFrasePersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      setMostrarSpinner(true)
      console.log("hola mundo");
      //enviar una solicitud get
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const datos = await respuesta.json();
      console.log(respuesta);
      if (respuesta.status === 200) {
        setFrasePersonaje(datos[0]);
        setMostrarSpinner(false)
      }
    } catch (error) {
      console.log(error);
      //agregar un mensaje final para el usuario
    }
  };

  return (
    <Container className="text-center my-5">
      <img src={logo} alt="Logo simpson" className="w-50 mb-4" />
      {mostrarSpinner ? (
        <div>
          <Spinner animation="grow" variant="info" />
        </div>
      ) : (
        <Frase frasePersonaje={frasePersonaje}></Frase>
      )}
      <Button variant="warning" className="mt-4" onClick={consultarAPI}>
        Enviar
      </Button>
    </Container>
  );
}

export default App;
