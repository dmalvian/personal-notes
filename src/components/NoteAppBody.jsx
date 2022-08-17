import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteAppBody({ notes, addNote }) {
    return (
        <div className="note-app__body">
            <h2>Buat Catatan</h2>
            <NoteInput maxTitleLength="50" addNote={addNote} />
            <h2>Catatan Aktif</h2>
            <NoteList notes={notes} />
        </div>
    );
}

export default NoteAppBody;
