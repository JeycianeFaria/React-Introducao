import react from "react";
import './layouts/Card.css';

function Card(props) {
  return (
    <div className="Card">
      <div className="Titulo">{props.titulo}</div>
      <div className="Conteudo">{props.conteudo}</div>
    </div>
  );
}

export default Card;
