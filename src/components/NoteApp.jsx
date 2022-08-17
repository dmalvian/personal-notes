import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      keyword: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onToggleArchiveNoteHandler = this.onToggleArchiveNoteHandler.bind(this);
    this.onSearchByTitleHandler = this.onSearchByTitleHandler.bind(this);
    this.getFilteredNotes = this.getFilteredNotes.bind(this);
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

  onSearchByTitleHandler(keyword) {
    this.setState({ keyword });
  }

  getFilteredNotes() {
    if (this.state.keyword === "") {
      return this.state.notes;
    }

    return this.state.notes.filter((note) =>
      new RegExp(this.state.keyword, "i").test(note.title)
    );
  }

  render() {
    const filteredNotes = this.getFilteredNotes();
    return (
      <>
        <NoteAppHeader searchByTitle={this.onSearchByTitleHandler} />
        <NoteAppBody
          notes={filteredNotes}
          addNote={this.onAddNoteHandler}
          deleteNote={this.onDeleteNoteHandler}
          toggleArchiveNote={this.onToggleArchiveNoteHandler}
        />
      </>
    );
  }
}

export default NoteApp;
