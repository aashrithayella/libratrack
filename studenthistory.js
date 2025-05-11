import React, { useState } from "react";
import axios from "axios";
import "./studenthistory.css";
import Nav from "../nav";

function StudentHistory() {
  const [sname, setsname] = useState("");
  const [rno, setrno] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  const sHistory = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append("sname", sname);
    params.append("rno", rno);

    axios
      .get(`http://localhost/history.php?${params.toString()}`)
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setStudents(response.data);
          setError("");
        } else {
          setStudents([]);
          setError("No records found.");
        }
      })
      .catch((error) => {
        console.error("There was an error displaying the history!", error);
        setError("There was an error displaying the history!");
      });
  };

  return (
    <div>
      <Nav />
      <form id="myform" onSubmit={sHistory}>
        <label htmlFor="sname">Name:</label>
        <input
          type="text"
          id="sname"
          value={sname}
          onChange={(e) => setsname(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="rno">Roll No:</label>
        <input
          type="text"
          id="rno"
          value={rno}
          onChange={(e) => setrno(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" id="submit" />
      </form>
      {error && <p>{error}</p>}
      {students.length > 0 && (
        <table  id="displaytable" border="1" >
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Issue Date</th>
              <th>Return Date</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.rno}</td>
                <td>{student.sname}</td>
                <td>{student.bookid}</td>
                <td>{student.bookname}</td>
                <td>{student.issuedate}</td>
                <td>{student.returndate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentHistory;