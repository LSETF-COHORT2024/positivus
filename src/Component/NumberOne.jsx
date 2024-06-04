import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function WithHeaderAndQuoteExample() {
  return (
    <Container fluid className="px-0 w-100 h-100 mb-5 ">
      <Row className="justify-content-center h-100  ">
        <Col lg={8} xl={12} xxl={12} className="h-100 ">
          <Card
            className="bg-custom rounded-5 h-100 bg-card"
            style={{ backgroundColor: "#b9ff66" }}
          >
            <Card.Body className="d-flex flex-column justify-content-between">
              <div className="text-start d-flex justify-content-between align-items-start">
                <div className="d-flex">
                  <h1>01</h1>
                  <p className="fw-bold mt-3 mx-3 my-">Consultation</p>
                </div>
                <p className="fw-bold btn-bg rounded-circle text-center p-1">
                  -
                </p>
              </div>

              <hr />
              <p className="text-start flex-grow-1">
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WithHeaderAndQuoteExample;
