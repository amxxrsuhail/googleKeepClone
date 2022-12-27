import React from "react";
// import DeleteIcon from '@material-ui/icons/Delete';
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function clickHandler() {
    props.onDelete(props._id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={clickHandler}><DeleteIcon/></button>
    </div>
  );
}

export default Note;
