import Badges from "./Badges";

function Card({ href, src, imgAlt }) {

  return (
    <div className="Card">
      <div className="img-container">
        <img src={src} alt={imgAlt} />
        <a href={href}>{imgAlt}</a>
        <div className="badges-container">
          <Badges color={"blue"} size={"small"} icon={"like"} />
          <span style={{ width: "5px" }}></span>
          <Badges color={"red"} size={"small"} icon={"heart"} />
        </div>
      </div>
    </div>
  );
}

export default Card;
