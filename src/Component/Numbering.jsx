import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function WithHeaderAndQuoteExample() {
  return (
    <Container fluid className="px-0 w-100 h-100">
      <Row className="justify-content-center h-100">
        <Col lg={8} xl={12} xxl={12} className="h-100">
          <Card className="bg-custom rounded h-100">
            <Card.Body className="d-flex flex-column justify-content-between">
              <h1 className="text-start d-flex block-column justify-content-space-between align-items-start">
                01
                <span className="font-size-smaller fw-normal mt-3 mx-3 my-">
                  Consultation
                </span>
                <span className="font-size-smaller fw-normal mt-3 mx-5 align-item-end">
                  -
                </span>
              </h1>

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
