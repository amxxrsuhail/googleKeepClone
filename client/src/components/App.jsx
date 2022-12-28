import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  useEffect(() => {
    axios
      .get("http://172.31.46.164:5000")
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err));
  });

  async function deleteNote(_id) {
    try {
      const response = await axios.delete(`http://172.31.46.164:5000/${_id}`);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== _id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            _id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
