import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNote(info) {
  // console.log("successful")
  return (
    <Note key={info.key} title={info.title} content={info.content} />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer /> 
    </div>
  );
}

export default App;
