import React from "react";

function DeleteButton({ id, deleteNote }) {
  return (
    <button className="note-item__delete-button" onClick={() => deleteNote(id)}>
      Hapus
    </button>
  );
}

export default DeleteButton;
