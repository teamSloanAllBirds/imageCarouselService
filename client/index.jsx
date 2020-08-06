import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import IdFetcher from './components/IdFetcher.jsx';
import HoverGrid from './components/HoverGrid.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      urls: []
    };
    this.fetchId = this.fetchId.bind(this);
  }

  componentDidMount() {
    this.fetchId(1);
  }

  fetchId(id) {
    axios.get(`/api/${id}`)
      .then(({data}) => {
        let urls = data.map(i => i.url);
        this.setState({urls: urls});
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <HoverGrid urls={this.state.urls}/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <IdFetcher fetchId={this.fetchId}/>
      </div>
    );
  }

}

ReactDom.render(<App />, document.getElementById('app'));