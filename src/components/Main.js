// import avatar from "../images/avatar.jpg";
import { useState, useEffect, useContext } from "react";
import api from "../utils/api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    async function getCards() {
      const response = await api.getInitialCards();
      setCards(response);
    }
    getCards();
  }, []);

  if (!currentUser) {
    return <div>Cargando...</div>;
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.error(err));
  }

  function handleCardDelete(cardId) {
    api
      .deleteCard(cardId)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardId));
      })
      .catch((err) => console.error(err));
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <div
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
            alt="imagen de perfil"
            className="profile__avatar"
          />
          <button
            className="profile__avatar-edit-btn"
            id="edit-avatar-btn"
            onClick={props.onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__edit-btn"
            onClick={props.onEditProfileClick}
          ></button>
          <p className="profile__occupation">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-btn"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>

      <section className="cards">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          );
        })}
      </section>

      <form className="popup popup_type_confirm" id="popup_confirm">
        <div className="popup__content">
          <button
            type="button"
            className="popup__close-button popup__icon"
            id="popup__close-confirm-btn"
          ></button>
          <h3 className="popup__title">¿Estás seguro?</h3>
          <div className="popup__form" name="confirm">
            <button type="submit" className="popup__btn popup__btn-confirm">
              Sí
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
