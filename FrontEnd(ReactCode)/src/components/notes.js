import "../App.css";

import React, { useState, useEffect } from "react";

import axios from "axios";

function Notes() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    let ttl = event.target.value;
    setTitle(ttl);
  };

  const handleDescriptionChange = (event) => {
    let desc = event.target.value;
    setDescription(desc);
  };

  const handleAddNote = async () => {
    // Passing To BackEnd
    // STEP - 1
    let date = new Date();

    const note = {
      id: 32,
      title: title,
      description: description,
      date: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
    };

    try {
      await axios.post("http://localhost:4000/notes", {
        note,
      });
      setTitle('');
      setDescription('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="notes">
        <input
          id="title"
          type="text"
          onChange={handleTitleChange}
          placeholder="Enter title.."
          value={title}
        />
        <textarea
          id="description"
          placeholder="Enter description.."
          onChange={handleDescriptionChange}
          rows="7"
          cols="40"
          value={description}
        ></textarea>
        <button id="addNote" onClick={handleAddNote} >
          Add Note
        </button>
      </div>
    </>
  );
}

export default Notes;
