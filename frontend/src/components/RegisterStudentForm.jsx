import React, { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";

const RegisterStudentForm = ({ register, changeFormData, formData }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [sibling, setSibling] = useState({
    name: "",
    class: "",
    section: "",
    rollNo: 1,
  });
  // console.log(formData.student);
  const input = ({
    label,
    name,
    person,
    onChange = (e) => {
      changeFormData(name, e.target.value, person);
    },
    placeholder = `Type your ${label} Here`,
    type = "text",
    isRequired = false,
    value,
  }) => {
    // console.log(formData[person][name]);
    console.log(person);
    const inputValue = person === "sibling" ? value : formData[person][name];
    return (
      <>
        <div class="form-floating mb-3 col-md-3">
          <input
            class="form-control"
            type={type}
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
            required={isRequired}
            value={inputValue}
          />
          <label for="floatingInput">{label}</label>
        </div>
      </>
    );
  };

  const checkbox = ({ label, name, person, isRequired = true }) => {
    return (
      <div className="col-md-3">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            onChange={(e) =>
              changeFormData(name, !formData[person][name], person)
            }
            checked={formData[person][name]}
          />
          <label class="form-check-label" for="flexCheckDefault">
            {label}
          </label>
        </div>
      </div>
    );
  };

  const addSibling = () => {
    changeFormData("sibling", sibling, "addSibling");
    setSibling({
      name: "",
      class: "",
      section: "",
      rollNo: 1,
    });
  };

  const allStudentInputs = () => (
    <>
      {input({ label: "Name", name: "name", person: "student" })}
      {input({ label: "Class", name: "class", person: "student" })}
      {input({
        label: "Date Of Birth",
        name: "dateOfBirth",
        person: "student",
        type: "date",
      })}
      {input({
        label: "Previous School",
        name: "previousSchool",
        person: "student",
      })}
      {input({
        label: "Previous Class",
        name: "previousClass",
        person: "student",
      })}
      {input({ label: "Marks", name: "marks", person: "student" })}
      {input({
        label: "Percentage",
        name: "percentage",
        person: "student",
      })}
      {input({
        label: "Nationality",
        name: "nationality",
        person: "student",
      })}
      {checkbox({
        label: "Hafiz_ul_quran",
        name: "hafiz_ul_quran",
        person: "student",
      })}
      {checkbox({ label: "Orphan", name: "orphan", person: "student" })}
      {input({
        label: "Disability",
        name: "disability",
        person: "student",
      })}
    </>
  );

  const allFatherInputs = () => (
    <>
      {input({ label: "Name", name: "name", person: "father" })}
      {input({ label: "CNIC", name: "CNIC_No", person: "father" })}
      {input({ label: "Occupation", name: "occupation", person: "father" })}
      {input({ label: "Company", name: "company", person: "father" })}
      {input({ label: "Designation", name: "designation", person: "father" })}
      {input({ label: "Department", name: "department", person: "father" })}
      {input({
        label: "Office Telephone",
        name: "officeTelephone",
        person: "father",
        type: "number",
      })}
      {input({ label: "Address", name: "address", person: "father" })}
      {input({
        label: "Mobile Number",
        name: "mobileNumber",
        person: "father",
        type: "number",
      })}
      {input({
        label: "Active Whatsapp Number",
        name: "activeWhatsappNumber",
        type: "number",
        person: "father",
      })}
      {input({
        label: "Email Address",
        name: "emailAddress",
        person: "father",
      })}
    </>
  );
  const allMotherInputs = () => (
    <>
      {input({ label: "Name", name: "name", person: "mother" })}
      {input({ label: "CNIC", name: "CNIC_No", person: "mother" })}
      {input({ label: "Occupation", name: "occupation", person: "mother" })}
      {input({ label: "Company", name: "company", person: "mother" })}
      {input({ label: "Designation", name: "designation", person: "mother" })}
      {input({ label: "Department", name: "department", person: "mother" })}
      {input({
        label: "Office Telephone",
        type: "number",
        name: "officeTelephone",
        person: "mother",
      })}
      {input({ label: "Address", name: "address", person: "mother" })}
      {input({
        label: "Mobile Number",
        type: "number",
        name: "mobileNumber",
        person: "mother",
      })}
      {input({
        label: "Active Whatsapp Number",
        type: "number",
        name: "activeWhatsappNumber",
        person: "mother",
      })}
      {input({
        label: "Email Address",
        name: "emailAddress",
        person: "mother",
      })}
    </>
  );

  const allSiblingInputs = () => (
    <>
      {input({
        label: "Name",
        name: "name",
        person: "sibling",
        value: sibling.name,
        onChange: (e) => setSibling({ ...sibling, name: e.target.value }),
      })}
      {input({
        label: "Class",
        name: "class",
        person: "sibling",
        value: sibling.class,
        onChange: (e) => setSibling({ ...sibling, class: e.target.value }),
      })}
      {input({
        label: "Section",
        name: "section",
        person: "sibling",
        value: sibling.section,
        onChange: (e) => setSibling({ ...sibling, section: e.target.value }),
      })}
      {input({
        label: "Roll No",
        name: "rollNo",
        person: "sibling",
        type: "number",
        value: sibling.rollNo,
        onChange: (e) => setSibling({ ...sibling, rollNo: e.target.value }),
      })}
    </>
  );

  return (
    <Form onSubmit={register} className="form-control-sm">
      <div className="row">
        <center>
          <h3>Registration Form for Admission & Scholarship Test</h3>
        </center>
        {allStudentInputs()}
      </div>
      <div className="row">
        <h3>Father Info</h3>
        {allFatherInputs()}
      </div>
      <div className="row">
        <h3>Mother Info</h3>
        {allMotherInputs()}
      </div>
      <div className="row">
        <h3>Brothers/Sisters in School</h3>
        {allSiblingInputs()}
      </div>

      <Button onClick={addSibling}>Add Sibling</Button>
      <br />
      <br />
      <Table striped={true} bordered={true}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Roll No.</th>
          </tr>
        </thead>
        <tbody>
          {formData.siblings.map((s) => (
            <tr>
              <td>{s.name}</td>
              <td>{s.class}</td>
              <td>{s.section}</td>
              <td>{s.rollNo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
      <Button variant="success" type="submit">
        Submit Form
      </Button>
    </Form>
  );
};

export default RegisterStudentForm;
