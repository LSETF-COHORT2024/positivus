import React from "react";

function Numbering() {
  return (
    <div>
      <div>
        <div className="d-flex flex-sm-row flex-column gap-4 text-start mb-5"></div>
        <Row>
          {variants.map((variant, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card
                bg="white"
                text="dark"
                style={{
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
                      <p style={{ margin: 0 }} className="fw-medium">
                        {title[index]}
                      </p>
                    </div>
                    <i className="fa-brands fa-linkedin-in bg-dark p-2 text-success rounded-circle"></i>
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
      </div>
    </div>
  );
}

export default Numbering;
