import "./toast.css";
import { useState } from "react";

 export const InToast = ({value, text}) => {
  const [display, setDisplay] = useState(value);

  return display ? (
    <div className="container-toast">
      <p>{text}</p>
      <button className="container-toast-btn" onClick={() => setDisplay(false)}>X</button>
    </div>
  ) : null;
};

