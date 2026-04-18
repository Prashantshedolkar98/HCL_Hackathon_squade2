import React, { useState, useEffect } from "react";
import mockData from "../../MOCKDATA.json";
import { FormTextField } from "./form/FormTextField";
import { Alert } from "react-bootstrap";


type IUserData = {
  customer_ID: string;
  f_name: string;
  l_name: string;
  dob: string;
  panNumber: string;
  annualIncome: string;
  tracking_ID: string;
  email: string;
  status: string;
};

const AlreadyAppliedCard = () => {
  const initialUserData: IUserData = {
    customer_ID: "",
    f_name: "",
    l_name: "",
    dob: "",
    panNumber: "",
    annualIncome: "",
    tracking_ID: "",
    email: "",
    status: "",
  };
  const [searchTxt, setSearchTxt] = useState("");
  const [searchUser, setSearchUser] = useState(initialUserData);
  const [noRecord, setNoRecord] = useState(false);
  const [showSuccess, setSuccess] = useState(false);

  const checkData = () => {
    const filterUser: any = mockData.find(
      (x) =>
        x.tracking_ID.toLocaleLowerCase() === searchTxt.toLocaleLowerCase() ||
        x.customer_ID.toLocaleLowerCase() === searchTxt.toLocaleLowerCase()
    );
  
    if(filterUser) {
      setSearchUser(filterUser)
      setSuccess(true)
      setNoRecord(false);
    } else{
      setNoRecord(true);
      setSuccess(false)
      setSearchUser(initialUserData)
    } 
    
  };

  return (
    <>
            {/* <FormTextField
                      name="firstName"
                      label="First name *"
                      type="text"
                      autoComplete="given-name"
                    /> */}

      <div className="mt-2"><input style={{width:"300px", height:"40px", borderRadius:"10px"}}
        area-label="Please enter tracking ID or customer ID"
        placeholder="please enter trackingID or customerID"
        onChange={(e) => setSearchTxt(e.target.value)}
      />
      </div>
      <br />
      <button className="btn btn-primary" onClick={checkData}>Check </button>

      {showSuccess && (
        <Alert variant="success" className="d-flex justify-content-center success mt-2">
          <p>{searchUser.f_name} </p> 
          <p>{searchUser.status}</p>
        </Alert>
      )}
      {noRecord && <Alert variant="danger" className="mt-2">Sorry No record Found</Alert>}
    </>
  );
};

export default AlreadyAppliedCard;
