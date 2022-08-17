import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };

    this.onKeywordChangeEventHandler =
      this.onKeywordChangeEventHandler.bind(this);
  }

  onKeywordChangeEventHandler(event) {
    this.setState(() => {
      return {
        keyword: event.target.value,
      };
    });
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari Catatan"
          value={this.state.keyword}
          onChange={this.onKeywordChangeEventHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
