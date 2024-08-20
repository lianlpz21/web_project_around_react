export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <figure className="card">
      <img
        onClick={handleClick}
        className="card__image"
        alt={props.card.name}
        src={props.card.link}
      />

      <button className="card__trash"></button>
      <footer className="card__footer">
        <figcaption className="card__title">{props.card.name}</figcaption>
        <button className="card__like"></button>
        <span className="card__like-counter">{props.card.likes.length}</span>
      </footer>
    </figure>
  );
}
