import quadras from "../assets/img/serie-ouro-28082018.jpg"
import "../assets/styles/establishmentItem.css"

export default function EstablishmentItem(){

    return(
        <div className="establishmentItemConteiner">
        <div className="establishmentItemImageConteiner">
          <img src={quadras} alt="Super quadras" className="establishmentItemImage" />
        </div>
        <div className="establishmentItemTextConteiner">
        <h5 className="establishmentItemTitle">Super quadras</h5>
        <p className="establishmentItemText">Rua Rio de Janeiro nº 5769, Bairro São Francisco, Patos-PB</p>
        <p className="establishmentItemText">Futsal, Handebol, Basquete</p>
        </div>
      </div>
    )
}