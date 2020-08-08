import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import IdFetcher from './components/IdFetcher.jsx';
import HoverGrid from './components/HoverGrid.jsx';
import CarouselModal from './components/CarouselModal.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      modal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.fetchId = this.fetchId.bind(this);
  }

  componentDidMount() {
    this.fetchId(1);
  }

  toggleModal() {
    this.setState({modal: !this.state.modal});
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
        <CarouselModal urls={this.state.urls} modal={this.state.modal} toggleModal={this.toggleModal}/>
        <HoverGrid urls={this.state.urls} toggleModal={this.toggleModal}/>
        <br></br>
        <br></br>
        <div>Modal is: {this.state.modal ? "Open" : "Closed"}</div>
        <br></br>
        <br></br>
        <IdFetcher fetchId={this.fetchId}/>
      </div>
    );
  }

}

ReactDom.render(<App />, document.getElementById('app'));