import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, archived, deleteNote, toggleArchiveNote }) {
  const filteredNotes = notes.filter((note) => note.archived === archived);

  return filteredNotes.length === 0 ? (
    <p className="notes-list__empty-message">Tidak ada catatan</p>
  ) : (
    <div className="notes-list">
      {filteredNotes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          deleteNote={deleteNote}
          toggleArchiveNote={toggleArchiveNote}
        />
      ))}
    </div>
  );
}

export default NoteList;
