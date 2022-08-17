import React from "react";
import NoteItemContent from "./NoteItemContent";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ id, title, createdAt, body, deleteNote }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} deleteNote={deleteNote} />
        <ArchiveButton />
      </div>
    </div>
  );
}

export default NoteItem;
