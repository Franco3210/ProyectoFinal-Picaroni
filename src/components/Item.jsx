
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";

const Item = ({ prod }) => {
  const navigate = useNavigate();

  const handleGoToCategory = () => {
    navigate(`/categoria/${prod.category}`);
  };

  return (
    <Card style={{ width: "18rem", cursor: "pointer" }}>
      <Card.Img
        variant="top"
        src={prod.image}
        alt={prod.title}
        style={{ height: "200px", objectFit: "cover" }}
        onClick={handleGoToCategory}   // 👈 click en la imagen
      />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>{prod.description}</Card.Text>
        <Card.Text>
          <strong>${prod.price}</strong>
        </Card.Text>
        <Counter item={prod} />
        <Button variant="primary" onClick={handleGoToCategory}>
          Ver más
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;

