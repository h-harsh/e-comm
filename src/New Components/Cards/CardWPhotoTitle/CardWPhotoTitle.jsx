import "./cardWPhotoTitle.css";

const CardWPhotoTitle = ({ title, name, image, height, titp, team }) => {
  return (
    <div
      className="focus-area-card-slim"
      style={{ height: titp ? height : null }}
    >
      <div className="focus-area-sub-cont1-slim">
        <img className="focus-area-img-slim" src={image} alt="" />
      </div>

      <div className="focus-area-sub-cont2-slim">
        <div className="fac-sd1-slim">
          <h4 className="card-sub-title slim-name">{name}</h4>
          <p className="p-text slim-title ">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardWPhotoTitle;
