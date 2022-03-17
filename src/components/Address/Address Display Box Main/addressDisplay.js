import { useEffect, useState } from "react";
import "./addressDisplay.css";
import { baseurl } from "../../../utils/apiCalls";
import axios from "axios";
import { ViewAddressBox } from "../View Address Box/viewAddressBox";
import { AddAddressBox } from "../Add Address Box/addAddressBox";
import { SelectAddressBox } from "../Select Addresss Box/selectAddressBox";
import Loader from "react-loader-spinner"; 

export const AddressDisplay = ({ select }) => {
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

  const [allAddresses, setAllAddresses] = useState(null);

  const fetchAddress = async () => {
    const response = await axios.get(`${baseurl}/address`);

    if (response.status === 200) {
      setAllAddresses(response.data.allAddresses);
    }
  };

  useEffect(() => fetchAddress(), [addAddress]);

  return (
    <div style={{ paddingTop: "2rem" }} >
      { allAddresses === null ? (
        <div className="loader-prod">
        <Loader
          type="ThreeDots"
          color="black"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
      ) : 
      addAddress ? (
        <AddAddressBox
          setAddAddress={setAddAddress}
          setData={setData}
          data={data}
          fetchAddress={fetchAddress}
        />
      ) : select === true ? (
        <SelectAddressBox 
        setAddAddress={setAddAddress}
          allAddresses={allAddresses}
          fetchAddress={fetchAddress}
        />
      ) : (
        <ViewAddressBox
          setAddAddress={setAddAddress}
          allAddresses={allAddresses}
          fetchAddress={fetchAddress}
        />
      )
      }
    </div>
  );
};
