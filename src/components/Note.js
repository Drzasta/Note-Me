import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EdiText from "react-editext";

function Note(props) {
  const [value, setValue] = useState("");

  function deleteItem() {
    props.onDelete(props.id);
  }

  const handleSave = (value) => {
    setValue(value);
  };

  return (
    <div className="container">
      <div className="note fadeIn">
        <div className="editTitle">
          <EdiText
            editOnViewClick={true}
            type="text"
            value={props.title}
            showButtonsOnHover={true}
            onSave={handleSave}
            cancelOnUnfocus
          />
        </div>
        <div className="editContent">
          <EdiText
            editOnViewClick={true}
            type="text"
            value={props.content}
            showButtonsOnHover={true}
            onSave={handleSave}
            cancelOnUnfocus
          />
        </div>
        <button onClick={deleteItem}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
