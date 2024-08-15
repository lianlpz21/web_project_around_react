export default function Card(props) {
  return (
    <figure className="card">
      <img
        className="card__image"
        alt=""
        style={{ backgroundImage: `url(${props.link})` }}
      />
      <button className="card__trash"></button>
      <footer className="card__footer">
        <figcaption className="card__title">{props.name}</figcaption>
        <button className="card__like"></button>
        <span className="card__like-counter">{props.likes.length}</span>
      </footer>
    </figure>
  );
}
