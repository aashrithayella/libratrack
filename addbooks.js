import React, { useState } from "react";
import axios from "axios";
import "./addbooks.css";
import Nav from "../nav";

function AddBooks() {
  const [bookid, setbookid] = useState("");
  const [bookname, setbookname] = useState("");
  const [author, setauthor] = useState("");
  const [edition, setedition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      bookid: bookid,
      bookname: bookname,
      author: author,
      edition: edition,
    };

    axios
      .post("http://localhost/addbooks.php", data)
      .then((response) => {
        console.log(response.data);
        alert("Book added successfully!");
      })
      .catch((error) => {
        console.error("There was an error adding the book!", error);
      });
  };

  return (
    <div>
      <Nav />
      <p className="bookdeet">Add Books</p>
      <form className="addbooks" onSubmit={handleSubmit} method="POST">
        <label id="lid">Book ID:</label>
        <input
          type="text"
          id="iid"
          value={bookid}
          onChange={(e) => setbookid(e.target.value)}
        />
        <br />
        <br />
        <label id="lname">Book Name:</label>
        <input
          type="text"
          id="iname"
          value={bookname}
          onChange={(e) => setbookname(e.target.value)}
        />
        <br />
        <br />
        <label id="lauthor">Author:</label>
        <input
          type="text"
          id="iauthor"
          value={author}
          onChange={(e) => setauthor(e.target.value)}
        />
        <br />
        <br />
        <label id="ledition">Edition:</label>
        <input
          type="text"
          id="iedition"
          value={edition}
          onChange={(e) => setedition(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" className="add">Add</button>
      </form>
    </div>
  );
}

export default AddBooks;