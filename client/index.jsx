/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React, { Component } from 'react';
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
      modal: false,
      current: '',
      currentIndex: 0,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.fetchId = this.fetchId.bind(this);
    this.selectImage = this.selectImage.bind(this);
  }

  componentDidMount() {
    this.fetchId(1);
  }

  toggleModal() {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  }

  fetchId(id) {
    axios.get(`/api/${id}`)
      .then(({ data }) => {
        const urls = data.map((i) => i.url);
        this.setState({ urls });
      })
      .catch((error) => console.log(error));
  }

  selectImage(current) {
    const { urls } = this.state;
    this.setState({ current, currentIndex: urls.indexOf(current) });
  }

  render() {
    const {
      urls,
      modal,
      current,
      currentIndex,
    } = this.state;
    return (
      <div>
        <CarouselModal
          urls={urls}
          modal={modal}
          current={current}
          currentIndex={currentIndex}
          toggleModal={this.toggleModal}
          selectImage={this.selectImage}
        />
        <HoverGrid
          urls={urls}
          toggleModal={this.toggleModal}
          selectImage={this.selectImage}
        />
        <div>
          Modal is:
          {modal ? 'Open' : 'Closed'}
        </div>
        <IdFetcher fetchId={this.fetchId} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
