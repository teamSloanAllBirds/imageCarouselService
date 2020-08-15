/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';

import Fonts from './assets/Fonts.jsx';
import IdFetcher from './components/IdFetcher.jsx';
import HoverGrid from './components/HoverGrid.jsx';
import CarouselModal from './components/CarouselModal.jsx';
import MidPageImages from './components/MidPageImages.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      descriptions: [],
      modal: false,
      current: '',
      currentIndex: 0,
      previousIndex: 7,
      nextIndex: 1,
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
        const urls = data.urls.map((i) => i.url);
        const descriptions = data.descriptions.map((j) => j);
        this.setState({ urls, descriptions });
      })
      .catch((error) => console.log(error));
  }

  selectImage(current) {
    const { urls } = this.state;
    const currentIndex = parseInt(current, 10);
    const nextIndex = currentIndex === urls.length - 1 ? 0 : currentIndex + 1;
    const previousIndex = currentIndex === 0 ? urls.length - 1 : currentIndex - 1;
    setTimeout(() => {
      this.setState({
        current: urls[currentIndex],
        currentIndex,
        previousIndex,
        nextIndex,
      });
    }, 0);
  }

  render() {
    const {
      urls,
      descriptions,
      modal,
      current,
      currentIndex,
      nextIndex,
      previousIndex,
    } = this.state;
    return (
      <div>
        <Fonts />
        <CarouselModal
          urls={urls}
          modal={modal}
          current={current}
          nextIndex={nextIndex}
          previousIndex={previousIndex}
          currentIndex={currentIndex}
          toggleModal={this.toggleModal}
          selectImage={this.selectImage}
        />
        <HoverGrid
          urls={urls}
          toggleModal={this.toggleModal}
          selectImage={this.selectImage}
        />
        <MidPageImages
          urls={urls}
          descriptions={descriptions}
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

export default App;
