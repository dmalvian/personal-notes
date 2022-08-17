import React from "react";
import NoteItemContent from "./NoteItemContent";
import DeleteButton from "./DeleteButton";
import ToggleArchiveButton from "./ToggleArchiveButton";

function NoteItem({
  id,
  title,
  createdAt,
  body,
  archived,
  deleteNote,
  toggleArchiveNote,
}) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} deleteNote={deleteNote} />
        <ToggleArchiveButton
          id={id}
          archived={archived}
          toggleArchiveNote={toggleArchiveNote}
        />
      </div>
    </div>
  );
}

export default NoteItem;
