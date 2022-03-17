import { baseurl } from "../../../utils/apiCalls";
import axios from "axios";
import './addAddressBox.css';
import { toast } from "react-toastify";

export const AddAddressBox = ({
  setAddAddress,
  setData,
  data,
  fetchAddress,
}) => {
  const saveAddress = async (e) => {
    e.preventDefault();
    setAddAddress(false);
    console.log(data);
    try {
      const response = await axios.post(`${baseurl}/address/new`, { data });
      fetchAddress();
      console.log(response);
      toast.success("Address added")
    } catch (error) {
      console.log(error.response.data);
    }
    
  };

  return (
    <div className="acc-mang-outer ">
    {/* <h2>Adding address</h2> */}
    <div className="acc-mang-p1 only-card ">
      <form onSubmit={saveAddress}  >
        
        <div className="innzer" >
         <p> Full Name{" "}</p>
          <input
            type="text"
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
          />
        </div>
        <div className="innzer" >
         <p> Pin Code{" "}</p>
          <input
            type="text"
            length="6"
            maxLength="6"
            size={6}
            pattern={`[0-9]{6}`}
            onChange={(e) => setData({ ...data, pinCode: e.target.value })}
          />
        </div>
        <div className="innzer" >
         <p> Building No./Name{" "}</p>
          <input
            onChange={(e) => setData({ ...data, buildingName: e.target.value })}
          />
        </div>
        <div className="innzer" >
         <p> Area/Locailty{" "}</p>
          <input onChange={(e) => setData({ ...data, area: e.target.value })} />
        </div>
        <div className="innzer" >
         <p> Landmark{" "}</p>
          <input
            onChange={(e) => setData({ ...data, landmark: e.target.value })}
          />
        </div>
        <div className="innzer" >
         <p> City{" "}</p>
          <input onChange={(e) => setData({ ...data, city: e.target.value })} />
        </div>
        <div className="innzer" >
         <p> State{" "}</p>
          <input
            onChange={(e) => setData({ ...data, state: e.target.value })}
          />
        </div>
        <input className="nm-btn2 submit-add-btn p-button p-button-primary" type="submit"  />
      </form>
      </div>
    </div>
  );
};


