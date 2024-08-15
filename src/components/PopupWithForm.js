export default function PopupWithForm(props) {
  return (
    <form
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
      name={props.name}
    >
      {props.children}
      <div className="overlay"></div>
      <div className="popup-content">
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close-button popup__icon"
          id="popup-update-avatar-close"
        ></button>
        <fieldset className="popup__container popup__container-avatar">
          <h3 className="popup__title">{props.title}</h3>
          <button type="submit" className="popup__btn">
            {props.buttonText}
          </button>
        </fieldset>
      </div>
    </form>
  );
}
