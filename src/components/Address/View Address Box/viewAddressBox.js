import "./viewAddressBox.css";
import axios from "axios";
import { baseurl } from "../../../utils/apiCalls";

export const ViewAddressBox = ({
  setAddAddress,
  allAddresses,
  fetchAddress,
}) => {
  const deleteAddress = async (addressId) => {
    const response = await axios.delete(
      `${baseurl}/address/remove/${addressId}`
    );
    console.log(response.data);
    if (response.status === 200) {
      fetchAddress();
    }
  };

  return (
    <div>
      <div className="address-display-cont">
      <button className=" add-address-btn p-button p-button-primary"  onClick={() => setAddAddress(true)}>Add new address</button>
        {allAddresses.length > 0 ? (
          allAddresses.map((item) => {
            return (
              <div className="address-display-box only-card">
                <button className=" add-del-btn" onClick={() => deleteAddress(item._id)}>X</button>
                <h5>{item.fullName}</h5>
                <p>
                  {item.buildingName}, {item.area}
                </p>
                <p>{item.landmark}</p>
                <p>
                  {item.city}, {item.pinCode}, {item.state}
                </p>
                <p></p>
              </div>
            );
          })
        ) : (
          <h1>No Addresses added yet</h1>
        )}
      </div>

      
    </div>
  );
};
