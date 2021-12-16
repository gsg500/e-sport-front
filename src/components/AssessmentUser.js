import "../assets/styles/establishmentItem.css";
import { Link } from "react-router-dom";

export default function AssessmentUser(props) {
  return (
    <div className="establishmentConteiner">
    <Link to="assessmentuser/:id" className="establishmentItemLink">
      <div className="establishmentItemTextConteiner">
        <h5 className="establishmentItemTitle">{props.data}</h5>
        <p className="establishmentItemText">
          Velocidade {props.velocity} Chute {props.kick}, Passe {props.pass}, Marcação {props.marking} Drible {props.dribble}
        </p>
      </div>
      </Link>
    </div>
  );
}