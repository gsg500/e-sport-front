import "../assets/styles/establishmentItem.css";
import { Link } from "react-router-dom";

export default function EstablishmentItem(props) {
  return (
    <div className="establishmentItemConteiner">
    <Link to={`/establishment/${props._id}`} className="establishmentItemLink">
      <div className="establishmentItemImageConteiner">
        <img src={props.pictureUrl} alt={props.name} className="establishmentItemImage"/>
      </div>
      <div className="establishmentItemTextConteiner">
        <h5 className="establishmentItemTitle">{props.name}</h5>
        <p className="establishmentItemText">
          Rua {props.adress.street} nº {props.adress.number}, Bairro{" "}
          {props.adress.Bairro}, {props.adress.city}-{props.adress.state}
        </p>
        <p className="establishmentItemText">{props.fieldTypes}</p>
      </div>
      </Link>
      <Link to={`/establishmentDelete/${props._id}`} className="establishmentItemLink">Excluir Registro</Link>
    </div>
  );
}

