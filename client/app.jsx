/* eslint-disable import/extensions */
import React, { Component } from 'react';
import axios from 'axios';

import IdFetcher from './components/IdFetcher.jsx';
import HoverGrid from './components/HoverGrid.jsx';
import CarouselModal from './components/CarouselModal.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      descriptions: [],
      modal: false,
      current: '',
      currentIndex: 0,
      nextIndex: 1,
      previousIndex: 7,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.fetchId = this.fetchId.bind(this);
    this.selectImage = this.selectImage.bind(this);
  }

  componentDidMount() {
    console.log(window.location.pathname)
    this.fetchId(window.location.pathname === '/' ? '/1' : window.location.pathname);
  }

  toggleModal() {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  }

  fetchId(id) {
    axios.get(`/api/images${id}`)
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
      modal,
      current,
      currentIndex,
      nextIndex,
      previousIndex,
    } = this.state;
    return (
      <div>
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
        {/* <IdFetcher fetchId={this.fetchId} /> */}
      </div>
    );
  }
}

export default App;
