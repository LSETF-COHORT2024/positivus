import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import first from "../assets/images/Picture-1.png";
import second from "../assets/images/Picture-2.png";
import third from "../assets/images/Picture-3.png";
import fourth from "../assets/images/Picture-4.png";
import fifth from "../assets/images/Picture-5.png";
// import sixth from "../assets/images/Picture-6.png";

const CardComponent = () => {
  const variants = [
    "Primary",
    "Primary",
    "Primary",
    "Primary",
    "Primary",
    "Primary",
  ];
  const images = [first, second, third, fourth, fifth]; // Array of images

  return (
    <Container>
      <Row>
        {variants.map((variant, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card
              bg="white"
              text="dark"
              style={{
                width: "23rem",
                boxShadow: "0px 8px 3px #191A23",
                borderRadius: "40px",
                border: "1px solid black",
              }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <img
                    src={images[index]}
                    alt={`Card image ${index + 1}`}
                    width="80px"
                  />
                  <p>Header</p>
                </div>
              </div>
              <hr />
              <Card.Body>
                <Card.Title>{variant} Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardComponent;
