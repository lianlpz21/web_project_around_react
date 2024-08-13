import avatar from "../images/avatar.jpg";

function Main() {
  return (
    <main>
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
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <button className="profile__edit-btn"></button>
          <p className="profile__occupation">Explorador</p>
        </div>
        <button className="profile__add-btn"></button>
      </section>

      <form className="popup popup__update-avatar" id="popup-update-avatar">
        <button
          type="button"
          className="popup__close-button popup__icon"
          id="popup-update-avatar-close"
        ></button>
        <fieldset className="popup__container popup__container-avatar">
          <h3 className="popup__title">Actualizar Foto de Perfil</h3>
          <input
            required
            id="input__avatar-url"
            type="url"
            placeholder="Enlace a la nueva foto de perfil"
            className="popup__input popup__input-avatar"
            name="avatar-url"
          />
          <span className="error-message" id="input__avatar-url-error"></span>
          <button type="submit" className="popup__btn">
            Actualizar
          </button>
        </fieldset>
      </form>

      <form className="popup" id="form__edit-opener">
        <button className="popup__icon" id="profile__popup-icon"></button>
        <fieldset className="popup__container">
          <h3 className="popup__title">Editar perfil</h3>
          <input
            required
            id="input__name"
            type="text"
            placeholder="Nombre"
            className="popup__input popup__input-cards"
            name="name"
            autoComplete="given-name"
            minLength="2"
            maxLength="40"
          />
          <span className="error-message" id="input__name-error"></span>
          <input
            required
            id="input__job"
            type="text"
            placeholder="Acerca de mi"
            className="popup__input popup__input-cards"
            name="job"
            minLength="2"
            maxLength="400"
          />
          <span className="error-message" id="input__job-error"></span>
          <button disabled type="submit" className="popup__btn">
            Guardar
          </button>
        </fieldset>
      </form>
      <div className="overlay"></div>

      <form action="#" className="popup" id="form__add-cards-opener">
        <button className="popup__icon" id="cards__close-btn"></button>
        <fieldset className="popup__container" id="cards-form">
          <h3 className="popup__title">Nuevo lugar</h3>
          <input
            required
            id="input__title"
            className="popup__input"
            type="text"
            placeholder="Titulo"
            name="title"
            minLength="2"
            maxLength="30"
          />
          <span className="error-message" id="input__title-error"></span>
          <input
            required
            id="input__url"
            className="popup__input"
            type="url"
            placeholder="Enlace a la imagen"
            name="url"
          />
          <span className="error-message" id="input__url-error"></span>
          <button disabled className="popup__btn" type="submit">
            Crear
          </button>
        </fieldset>
      </form>

      <section className="cards"></section>

      <dialog className="modal">
        <img className="modal__image" alt="" />
        <span className="modal__title"></span>
        <button className="modal__icon-close"></button>
      </dialog>

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

export default Main;
