import { Card } from "react-bootstrap";

const Frase = () => {
  return (
    <section>
      <img
        src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
        alt="personaje"
        className="character mb-4"
      />
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Personaje</Card.Title>
          <Card.Text>Frase</Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
