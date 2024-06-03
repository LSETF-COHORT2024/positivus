import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import first from "../assets/images/Picture-1.png";
import second from "../assets/images/Picture-2.png";
import third from "../assets/images/Picture-3.png";
import fourth from "../assets/images/Picture-4.png";
import fifth from "../assets/images/Picture-5.png";
import sixth from "../assets/images/Picture-6.png";

const CardComponent = () => {
  const variants = [
    "Primary",
    "Primary",
    "Primary",
    "Primary",
    "Primary",
    "Primary",
  ];
  const images = [first, second, third, fourth, fifth, sixth];
  const name = [
    "John Smith",
    "Jane Doe",
    "Micheal Brawn",
    "Emmily Johnson",
    "Brian Williams",
    "Sarah Kim",
  ];
  const title = [
    "CEO and Founder",
    "Directors of Operations",
    "Senior SEO Specialist",
    "PPC manager",
    "Social Media Specialist",
    "Content Creator",
  ];
  const testimonials = [
    "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    "7+ years of experience in project management and team leadership. Strong organizational",
    "5+ years of experience in SEO and content creation. Proficient in keyword research",
    "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    "4+ years of experience in social media marketing. Proficient in creating content, analyzing metrics, and building engagement",
    "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  ]; // Arrays

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
                  <div className="align-self-end text-start">
                    <p style={{ margin: 0, fontWeight: "bold" }}>
                      {name[index]}
                    </p>
                    <p style={{ margin: 0 }}>{title[index]}</p>
                  </div>
                  <i class="fa-brands fa-linkedin-in bg-dark p-2 text-success rounded-circle"></i>
                </div>
              </div>
              <hr />
              <Card.Body>
                <Card.Text className="text-start">
                  {testimonials[index]}
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
