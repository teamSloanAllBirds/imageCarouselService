import React from 'react';

class IdFetcher extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.sendId = this.sendId.bind(this);
  }

  onTextChange(e) {
    this.setState({id: e.target.value});
  }

  sendId() {
    if (this.state.id) {
      this.props.fetchId(this.state.id);
    }
  }

  render() {
    return (
      <div>

        <input onChange={this.onTextChange} placeholder='id 1 to 100' />
        <button onClick={this.sendId}>get images</button>
      </div>
    );
  }
}

export default IdFetcher;