import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onToggleArchiveNoteHandler =
      this.onToggleArchiveNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      const timestamp = new Date();

      return {
        notes: [
          ...prevState.notes,
          {
            id: +timestamp,
            title,
            body,
            createdAt: timestamp,
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onToggleArchiveNoteHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) return { ...note, archived: !note.archived };

      return note;
    });
    this.setState({ notes });
  }

  render() {
    return (
      <>
        <NoteAppHeader />
        <NoteAppBody
          notes={this.state.notes}
          addNote={this.onAddNoteHandler}
          deleteNote={this.onDeleteNoteHandler}
          toggleArchiveNote={this.onToggleArchiveNoteHandler}
        />
      </>
    );
  }
}

export default NoteApp;
