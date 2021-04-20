import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./ItemCount.css";
import Visualizer from "./Visualizer";

export default function ItemCount({ initial, stock, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="../../assets/images/'01-fender.jpg'" />
        <Card.Body>
          <Card.Title>Fender Stratocaster</Card.Title>
          <Card.Text>
            Experience the peerless Strat style of Slowhand himself with the
            Eric Clapton Stratocaster, one of our most acclaimed and enduring
            artist signature models. With classic design and special features
            that give it exceptional tonal versatility and effortless feel
            worthy of one of the world’s greatest names in rock and blues, it
            puts pure Clapton Stratocaster tone and feel straight into your
            hands
          </Card.Text>
          <div id="counterContainer">
            <a href="#" id="counterContainerLeft" onClick={decrementCounter}>
              -
            </a>
            <Visualizer stock={stock} selectedNumber={counter} />
            <a href="#" id="counterContainerRight" onClick={incrementCounter}>
              +
            </a>
          </div>
          <Button
            id="addToCartBtn"
            variant="primary"
            onClick={
              counter <= stock
                ? () => onAdd(counter)
                : alert("please enter a less value")
            }
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
