import { Button, CardFooter } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const TareasCards = () => {
  return (
    <Card className="shadow w-100 my-1">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <CardFooter className="d-flex justify-content-end">
        <Button variant="success" size="sm" className="me-2">
          <i className="bi bi-check-circle"></i>
        </Button>
        <Button variant="info" size="sm" className="me-2">
          <i className="bi bi-eye"></i>
        </Button>
        <Button variant="primary" size="sm" className="me-2">
          <i className="bi bi-pencil"></i>
        </Button>
        <Button variant="danger" size="sm" className="me-2">
          <i className="bi bi-trash"></i>
        </Button>
      </CardFooter>
    </Card>
  );
};
