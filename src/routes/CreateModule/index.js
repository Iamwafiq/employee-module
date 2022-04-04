import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../component/Button";
import { PageInfo } from "../../component/PageInfo";
import "./style.css";

const CreateModule = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    designation: "",
    profileImage: "",
    experience: "",
  });
  const { firstName, lastName, dob, designation, profileImage, experience } =
    formData;
  const isDisabled =
    !firstName ||
    !lastName ||
    !dob ||
    !designation ||
    !profileImage ||
    !experience;

  const editField = (e, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const addEmployeeData = () => {
    if (!isDisabled) {
      const dataObj = window.localStorage.getItem("employeeData");
      const newArr = [];
      if (dataObj) {
        const dataArr = JSON.parse(dataObj);
        console.log(dataArr);
        newArr.push(dataArr);
      }
      newArr.unshift(formData);
      window.localStorage.setItem("employeeData", JSON.stringify(newArr));
      setFormData({
        firstName: "",
        lastName: "",
        dob: "",
        designation: "",
        profileImage: "",
        experience: "",
      });
    }
  };

  return (
    <div className="parent-container">
      <PageInfo header="Create Employee Module Form" />
      <div className="form-container">
        <div className="form-line">
          <div className="each-data">
            First Name:{" "}
            <input
              type="text"
              value={firstName}
              onChange={(e) => editField(e, "firstName")}
            />
          </div>
          <div className="each-data">
            Last Name:{" "}
            <input
              type="text"
              value={lastName}
              onChange={(e) => editField(e, "lastName")}
            />
          </div>
        </div>
        <div className="form-line">
          <div className="each-data">
            Date of Birth:{" "}
            <input
              type="text"
              value={dob}
              onChange={(e) => editField(e, "dob")}
            />
          </div>
          <div className="each-data">
            Designation:{" "}
            <input
              type="text"
              value={designation}
              onChange={(e) => editField(e, "designation")}
            />
          </div>
        </div>
        <div className="form-line">
          <div className="each-data">
            Profile Picture Url:{" "}
            <input
              type="text"
              value={profileImage}
              onChange={(e) => editField(e, "profileImage")}
            />
          </div>
          <div className="each-data">
            Experience:{" "}
            <input
              type="text"
              value={experience}
              onChange={(e) => editField(e, "experience")}
            />
          </div>
        </div>
        <div>
          <Button
            disabled={isDisabled}
            innerText="Submit"
            onClick={() => addEmployeeData()}
          />
        </div>
      </div>
      <Button
        innerText="View Employee Data"
        onClick={() => history.push("/employee-list")}
      />
    </div>
  );
};

export default CreateModule;
