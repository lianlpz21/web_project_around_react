import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

export default function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(props.card);
  }

  // Verificando si el usuario actual es el propietario de la tarjeta actual
  const isOwn = props.card.owner._id === currentUser._id;
  console.log(isOwn);
  // Creando una variable que después establecerás en `className` para el botón eliminar
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
  }`;

  // Verifica si el usuario actual le dio "like" a la tarjeta
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // Crea una variable que después establecerás en `className` para el botón like
  const cardLikeButtonClassName = `card__like ${
    isLiked ? "card__like_active" : ""
  }`;

  return (
    <figure className="card">
      <img
        onClick={handleClick}
        className="card__image"
        alt={props.card.name}
        src={props.card.link}
      />

      <button className={cardDeleteButtonClassName}></button>
      <footer className="card__footer">
        <figcaption className="card__title">{props.card.name}</figcaption>
        <button className={cardLikeButtonClassName}></button>
        <span className="card__like-counter">{props.card.likes.length}</span>
      </footer>
    </figure>
  );
}
