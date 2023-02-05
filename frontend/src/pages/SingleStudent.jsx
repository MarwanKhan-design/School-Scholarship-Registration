import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getStudentById } from "../apis/student";

const SingleStudent = () => {
  const { id } = useParams();

  const studentTableRows = [
    { name: "name", label: "Name" },
    { name: "class", label: "Class" },
    { name: "dateOfBirth", label: "Date Of Birth" },
    { name: "previousSchool", label: "Previous School" },
    { name: "previousClass", label: "Previous Class" },
    { name: "marks", label: "Marks" },
    { name: "percentage", label: "Percentage" },
    { name: "nationality", label: "Nationality" },
    { name: "hafiz_ul_quran", label: "Hafiz ul Quran" },
    { name: "orphan", label: "Orphan" },
    { name: "disability", label: "Disability" },
  ];
  const fatherTableRows = [
    { name: "name", label: "Name" },
    { name: "CNIC_No", label: "CNIC" },
    { name: "occupation", label: "Occupation" },
    { name: "company", label: "Company" },
    { name: "designation", label: "Designation" },
    { name: "department", label: "Department" },
    { name: "officeTelephone", label: "Office Phone" },
    { name: "address", label: "Address" },
    { name: "mobileNumber", label: "Mobile Number" },
    { name: "activeWhatsappNumber", label: "Active Whatsapp Number" },
    { name: "emailAddress", label: "Email" },
  ];
  const [student, setStudent] = useState({
    name: "",
    class: "",
    dateOfBirth: "",
    previousSchool: "",
    previousClass: "",
    marks: "",
    percentage: "",
    nationality: "",
    hafiz_ul_quran: true,
    orphan: true,
    disability: "",
  });

  const getStudent = async () => {
    const student = await getStudentById(id);
    setStudent(student);
  };

  useEffect(() => {
    getStudent();
  }, [id]);

  const showStudentData = () => (
    <>
      <h3>Student</h3>
      <Table bordered striped hover>
        <tbody>
          {studentTableRows.map((s) => {
            if (
              student.student !== undefined &&
              typeof student.student[s.name] === "boolean"
            ) {
              return (
                <tr>
                  <td>{s.label}</td>
                  <td>{student.student[s.name] === true ? "Yes" : "No"}</td>
                </tr>
              );
            } else {
              return (
                <tr>
                  <td>{s.label}</td>
                  <td>{student.student && student.student[s.name]}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
    </>
  );

  const showFatherData = () => {
    return (
      <>
        <h3>Father Info</h3>
        <Table bordered striped hover>
          <tbody>
            {fatherTableRows.map((f) => (
              <tr>
                <td>{f.label}</td>
                <td>{student.student && student.father[f.name]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  };
  const showMotherData = () => {
    return (
      <>
        <h3>Mother Info</h3>
        <Table bordered striped hover>
          <tbody>
            {fatherTableRows.map((f) => (
              <tr>
                <td>{f.label}</td>
                <td>{student.student && student.mother[f.name]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  };

  const showSiblingData = () => {
    return (
      <>
        <h3>Siblings</h3>
        <Table bordered striped hover>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Class</td>
              <td>Section</td>
              <td>Roll No.</td>
            </tr>
            {student.siblings &&
              student.siblings.map((sibling) => {
                return (
                  <tr>
                    <td>{sibling.name}</td>
                    <td>{sibling.class}</td>
                    <td>{sibling.section}</td>
                    <td>{sibling.rollNo}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </>
    );
  };

  return (
    <div div className="container mt-5">
      {showStudentData()}
      {showFatherData()}
      {showMotherData()}
      {showSiblingData()}
    </div>
  );
};

export default SingleStudent;
