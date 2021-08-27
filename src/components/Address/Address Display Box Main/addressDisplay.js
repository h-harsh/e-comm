import { useEffect, useState } from "react";
import "./addressDisplay.css";
import { baseurl } from "../../../utils/apiCalls";
import axios from "axios";
import { ViewAddressBox } from "../View Address Box/viewAddressBox";
import { AddAddressBox } from "../Add Address Box/addAddressBox";

export const AddressDisplay = () => {
  const [addAddress, setAddAddress] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    pinCode: null,
    buildingName: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
  });

  const [allAddresses, setAllAddresses] = useState([]);

  const fetchAddress = async () => {
    const response = await axios.get(`${baseurl}/address`);

    if (response.status === 200) {
      setAllAddresses(response.data.allAddresses);
    }
  };

  useEffect(() => fetchAddress(), [addAddress]);

  return (
    <div style={{marginTop:'2rem'}} >
      {addAddress ? (
        <AddAddressBox
          setAddAddress={setAddAddress}
          setData={setData}
          data={data}
          fetchAddress={fetchAddress}
        />
      ) : (
        <ViewAddressBox
          setAddAddress={setAddAddress}
          allAddresses={allAddresses}
          fetchAddress={fetchAddress}
        />
      )}
    </div>
  );
};
