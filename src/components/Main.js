import avatar from "../images/avatar.jpg";

export default function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={avatar}
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
          <h1 className="profile__name">Jacques Cousteau</h1>
          <button
            className="profile__edit-btn"
            onClick={props.onEditProfileClick}
          ></button>
          <p className="profile__occupation">Explorador</p>
        </div>
        <button
          className="profile__add-btn"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>

      <section className="cards"></section>

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

      <template id="template">
        <figure className="card">
          <img className="card__image" alt="" />
          <button className="card__trash"></button>
          <footer className="card__footer">
            <figcaption className="card__title"></figcaption>
            <button className="card__like"></button>
            <span className="card__like-counter">0</span>
          </footer>
        </figure>
      </template>
    </main>
  );
}
