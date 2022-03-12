import "./iconsSection.css";
import {
  BsFillBookFill,
  BsFillBookmarksFill,
  BsFillPencilFill,
} from "react-icons/bs";

const IconsSection = ({ data, title }) => {
  const findIconName = (param) => {
    if (param === "BsFillBookFill") {
      return <BsFillBookFill />;
    } else if (param === "BsFillBookmarksFill") {
      return <BsFillBookmarksFill />;
    } else return <BsFillPencilFill />;
  };
  return (
    <div className="section-container">
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title ">{title}</h3>
        <hr className="section-title-line" />
      </div>
      <div
        className="card-holder"
        style={{ marginTop: "3rem", marginBottom: "2rem" }}
      >
        {data.map((item) => {
          const currIcon = findIconName(item.icon);
          return (
            <div className="card card-iconsSection">
              <div style={{color:item.color}} className="currIcon" >{currIcon}</div>
              <h3 className="iconsSection-title" >{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconsSection;
