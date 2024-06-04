import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function WithHeaderAndQuoteExample(props) {
  const { number, content } = props;

  return (
    <Container fluid className="px-0 w-100 h-100 mb-5">
      <Row className="justify-content-center h-100">
        <Col lg={8} xl={12} xxl={12} className="h-100">
          <Card
            className="bg-custom rounded-5 h-100 bg-card"
            style={{ backgroundColor: "#f3f3f3" }}
          >
            <Card.Body className="d-flex flex-column justify-content-between">
              <div className="text-start d-flex justify-content-between align-items-start">
                <div className="d-flex">
                  <h1>{number}</h1>
                  <p className="fw-bold mt-3 mx-3 my-">{content}</p>
                </div>
                <p className="fw-bold btn-bg rounded-circle text-center p-1">
                  {" "}
                  +{" "}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WithHeaderAndQuoteExample;
