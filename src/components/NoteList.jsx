import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
