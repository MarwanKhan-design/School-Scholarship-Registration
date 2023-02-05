import React, { useState } from "react";
import { createStudentApi } from "../apis/student";
import RegisterStudentForm from "../components/RegisterStudentForm";

const RegisterStudent = () => {
  const [formData, setFormData] = useState({
    student: {
      name: "",
      class: "",
      dateOfBirth: "",
      previousSchool: "",
      previousClass: "",
      marks: 0,
      percentage: 0,
      nationality: "",
      hafiz_ul_quran: false,
      orphan: false,
      disability: "",
    },
    father: {
      name: "",
      CNIC_No: "",
      occupation: "",
      company: "",
      designation: "",
      department: "",
      officeTelephone: 0,
      address: "",
      mobileNumber: 0,
      activeWhatsappNumber: 0,
      emailAddress: "",
    },
    mother: {
      name: "",
      CNIC_No: "",
      occupation: "",
      company: "",
      designation: "",
      department: "",
      officeTelephone: 0,
      address: "",
      mobileNumber: 0,
      activeWhatsappNumber: 0,
      emailAddress: "",
    },
    siblings: [],
  });
  const changeFormData = (name, value, person) => {
    if (person === "sibling") return;
    else if (person === "addSibling")
      return setFormData({
        ...formData,
        siblings: [...formData.siblings, value],
      });
    else {
      return setFormData({
        ...formData,
        [person]: { ...formData[person], [name]: value },
      });
    }
  };

  const register = async (e) => {
    e.preventDefault();
    const student = createStudentApi(formData);
  };
  return (
    <div className="container">
      <RegisterStudentForm
        formData={formData}
        changeFormData={changeFormData}
        register={register}
      />
    </div>
  );
};

export default RegisterStudent;
