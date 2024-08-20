// import avatar from "../images/avatar.jpg";
import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getUserInfo() {
      const response = await api.getUserInfo();
      setUserAvatar(response.avatar);
      setUserName(response.name);
      setUserDescription(response.about);
    }
    getUserInfo();
  }, []);

  useEffect(() => {
    async function getCards() {
      const response = await api.getInitialCards();
      setCards(response);
    }
    getCards();
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <div
            style={{ backgroundImage: `url(${userAvatar})` }}
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
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-btn"
            onClick={props.onEditProfileClick}
          ></button>
          <p className="profile__occupation">{userDescription}</p>
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
