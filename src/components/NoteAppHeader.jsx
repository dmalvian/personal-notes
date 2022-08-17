import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({ searchByTitle }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearch searchByTitle={searchByTitle} />
    </div>
  );
}

export default NoteAppHeader;
