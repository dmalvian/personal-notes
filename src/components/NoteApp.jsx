import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
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
          }
        ]
      }
    });
  }

  render() {
    return (
      <>
        <NoteAppHeader />
        <NoteAppBody notes={this.state.notes} addNote={this.onAddNoteHandler} />
      </>
    );
  }
}

export default NoteApp;
