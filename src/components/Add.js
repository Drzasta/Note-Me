import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function Add(props) {
  const [newItem, handleItem] = useState({
    title: "",
    content: ""
  });

  const [expand, isExpanded] = useState(false);

  function addItem(e) {
    const { name, value } = e.target;
    handleItem((prevItems) => {
      return { ...prevItems, [name]: value };
    });
  }

  function handleClick(e) {
    if (newItem.title.length > 0 && newItem.content.length > 0) {
      props.onAdd(newItem);
      handleItem({ title: "", content: "" });
      e.preventDefault();
      isExpanded(false);
    } else {
      alert("Note can not be empty!");
    }
  }

  function expandText() {
    isExpanded(true);
  }

  return (
    <div>
      <form className="form-group fadeIn">
        {expand && (
          <input
            placeholder="Note Title"
            name="title"
            onChange={addItem}
            value={newItem.title}
            expandText={isExpanded}
          />
        )}

        <textarea
          onClick={expandText}
          placeholder="Write a note..."
          name="content"
          onChange={addItem}
          value={newItem.content}
          rows={expand ? "3" : "1"}
        />
        <Zoom in={expand}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Add;
