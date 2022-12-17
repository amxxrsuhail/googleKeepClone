import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(note){
console.log("delete");
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,i) => {
        return (
          <Note key={i} title={noteItem.title} content={noteItem.content} delete={deleteNote}/>
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
