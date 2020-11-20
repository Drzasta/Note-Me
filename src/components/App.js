import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Add from "./Add";

function App() {
  const [items, setItems] = useState([]);

  function addNote(addClick) {
    setItems((prevItems) => {
      return [...prevItems, addClick];
    });
  }

  function editNote() {
    addNote();
    deleteFunction();
  }

  function deleteFunction(id) {
    setItems((prevNotes) => {
      return prevNotes.filter((oneItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Add onAdd={addNote} />

      {items.map((oneItem, index) => {
        return (
          <Note
            title={oneItem.title}
            content={oneItem.content}
            key={index}
            id={index}
            onDelete={deleteFunction}
            onEdit={editNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
