import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getStudentsApi } from "../apis/student";

const Home = () => {
  const jwtKey = localStorage.getItem("jwt_key");
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  useEffect(() => {
    if (jwtKey === null) {
      return navigate("/login");
    }
  }, [jwtKey]);

  const getAllStudents = async () => {
    const students = await getStudentsApi();

    setStudents(students);
  };

  useEffect(() => {
    getAllStudents();
  }, []);
  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Name</td>
            <td>Father CNIC</td>
            <td>Marks</td>
            <td>Percentage</td>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <td>
                <Link to={`/student/${student._id}`}>{student.student.name}</Link>
              </td>
              <td>{student.father.CNIC_No}</td>
              <td>{student.student.marks}</td>
              <td>{student.student.percentage}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
