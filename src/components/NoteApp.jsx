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
  }

  render() {
    return (
      <>
        <NoteAppHeader />
        <NoteAppBody notes={this.state.notes} />
      </>
    );
  }
}

export default NoteApp;
