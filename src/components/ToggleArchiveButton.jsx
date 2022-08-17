import React from "react";

function ToggleArchiveButton({ id, archived, toggleArchiveNote }) {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => toggleArchiveNote(id)}
    >
      {archived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}

export default ToggleArchiveButton;
