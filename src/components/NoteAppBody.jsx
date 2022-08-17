import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteAppBody({ notes, addNote, deleteNote, toggleArchiveNote }) {
  return (
    <div className="note-app__body">
      <h2>Buat Catatan</h2>
      <NoteInput maxTitleLength="50" addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList
        notes={notes}
        archived={false}
        deleteNote={deleteNote}
        toggleArchiveNote={toggleArchiveNote}
      />
      <h2>Arsip</h2>
      <NoteList
        notes={notes}
        archived={true}
        deleteNote={deleteNote}
        toggleArchiveNote={toggleArchiveNote}
      />
    </div>
  );
}

export default NoteAppBody;
