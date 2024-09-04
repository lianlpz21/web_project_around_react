import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";
import EditProfilePopup from "./components/EditProfilePopup";
import api from "./utils/api";
import CurrentUserContext from "./contexts/CurrentUserContext";
import EditAvatarPopup from "./components/EditAvatarPopup";

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

  function handleUpdateUser(userData) {
    api
      .setUserInfo(userData)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeAllPopups();
      })
      .catch((error) => {
        console.log("Error al actualizar el perfil", error);
      });
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .setUserAvatar(avatar)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeAllPopups();
      })
      .catch((error) => {
        console.log("Error al actualizar el avatar", error);
      });
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
          <EditProfilePopup
            isOpen={isEditProfileOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <Footer />

          <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            title="Agregar carta"
            name="add-place"
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
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
