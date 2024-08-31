import "./index.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import PopupWithForm from "./components/PopupWithForm.js";
import ImagePopup from "./components/ImagePopup.js";
import api from "./utils/api.js";
import CurrentUserContext from "./contexts/CurrentUserContext.js";

function App() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const userInfo = await api.getUserInfo();
        setCurrentUser(userInfo);
        console.log(userInfo);
      } catch (error) {
        console.log("Error al obtener la información del usuario", error);
      }
    }
    fetchUserInfo();
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfileOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="App body">
      <div className="page">
        <Header />
        <CurrentUserContext.Provider value={currentUser}>
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
        </CurrentUserContext.Provider>

        <Footer />
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          title="Cambiar foto de perfil"
          name="avatar"
          buttonText="Guardar"
        >
          <input
            required
            id="input__avatar-url"
            type="url"
            placeholder="Enlace a la nueva foto de perfil"
            className="popup__input popup__input-avatar"
            name="avatar-url"
          />
          <span className="error-message" id="input__avatar-url-error"></span>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isEditProfileOpen}
          onClose={closeAllPopups}
          title="Editar perfil"
          name="Editar"
          buttonText="Guardar"
        >
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
        </PopupWithForm>

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title="Agregar carta"
          name="avatar"
          buttonText="Guardar"
        >
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
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
