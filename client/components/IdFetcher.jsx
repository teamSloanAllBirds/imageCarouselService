/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class IdFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.sendId = this.sendId.bind(this);
  }

  onTextChange(e) {
    this.setState({ id: e.target.value });
  }

  sendId() {
    const { fetchId } = this.props;
    const { id } = this.state;
    if (id) {
      fetchId(id);
    }
  }

  render() {
    return (
      <div>
        <input onChange={this.onTextChange} placeholder="id 1 to 100" />
        <button type="button" onClick={this.sendId}>get images</button>
      </div>
    );
  }
}

export default IdFetcher;
