export default function ImagePopup() {
  return (
    <dialog className="modal">
      <img className="modal__image" alt="" />
      <span className="modal__title"></span>
      <button className="modal__icon-close"></button>
    </dialog>
  );
}
