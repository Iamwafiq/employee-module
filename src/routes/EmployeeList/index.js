import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../component/Button";
import { PageInfo } from "../../component/PageInfo";
import "./style.css";

const EmployeeList = () => {
  const history = useHistory();
  const localData = window.localStorage.getItem("employeeData");
  const employeeList = JSON.parse(localData);
  const employeeData = employeeList.flat(employeeList?.length + 1);
  return (
    <div>
      <PageInfo header="Employee List" />
      <table>
        <thead>
          <td>Name</td>
          <td>DoB</td>
          <td>Designation</td>
          <td>Profile Photo</td>
          <td>Experience</td>
        </thead>
        {employeeData &&
          employeeData.map((data) => {
            const {
              firstName,
              lastName,
              dob,
              designation,
              profileImage,
              experience,
            } = data;
            return (
              <tr>
                <td>
                  {firstName} {lastName}
                </td>
                <td>{dob}</td>
                <td>{designation}</td>
                <td>
                  <img
                    className="photo-column"
                    alt="profile-pic"
                    src={profileImage}
                  />
                </td>
                <td>{experience}</td>
              </tr>
            );
          })}
      </table>
      <Button
        innerText="Create New Employee Data"
        onClick={() => history.push("/create-module")}
      />
    </div>
  );
};

export default EmployeeList;
