/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Modal from 'react-modal';
import { Icon, InlineIcon } from '@iconify/react';
import xIcon from '@iconify/icons-bi/x';
import bxsChevronRight from '@iconify/icons-bx/bxs-chevron-right';
import bxsChevronLeft from '@iconify/icons-bx/bxs-chevron-left';
import dotIcon from '@iconify/icons-bi/dot';
import './CarouselModal.css';

Modal.setAppElement(document.getElementById('app'));

class CarouselModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xHover: false,
      counter: 0,
      modalMeasurement: '200px',
    };
    this.hoverHandler = this.hoverHandler.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.pickFromDot = this.pickFromDot.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ modalMeasurement: `${window.innerWidth < window.innerHeight ? 0.9 * window.innerWidth : 0.9 * window.innerHeight}px` });
  }

  hoverHandler() {
    const { xHover, counter } = this.state;
    this.setState({ xHover: !xHover, counter: counter + 1 });
  }

  nextImage() {
    const { urls, currentIndex, selectImage } = this.props;
    selectImage(currentIndex === urls.length - 1 ? 0 : currentIndex + 1);
  }

  prevImage() {
    const { urls, currentIndex, selectImage } = this.props;
    const newIndex = currentIndex === 0 ? urls.length - 1 : currentIndex - 1;
    selectImage(newIndex);
  }

  pickFromDot(e) {
    if (e.target.dataset.index) {
      const { selectImage } = this.props;
      selectImage(parseInt(e.target.dataset.index, 10));
    }
  }

  render() {
    const {
      urls,
      modal,
      currentIndex,
      nextIndex,
      previousIndex,
      toggleModal,
    } = this.props;
    const { xHover, counter, modalMeasurement } = this.state;
    const dots = urls.map((c, index) => (
      <td key={c}>
        <a href={`#slide-${index}`}>
          <div className={index === currentIndex ? 'selectedDot' : 'unSelectedDot'}>
            <InlineIcon icon={dotIcon} onClick={this.pickFromDot} data-index={index} className={index === currentIndex ? 'bigDot' : 'dot'} color="gray" height="20" width="20" />
          </div>
        </a>
      </td>
    ));
    const images = urls.map((c, index) => <div className="sneakerPicture" key={c} id={`slide-${index}`}><img alt="pic" src={c} className="displayed" /></div>);
    const rightArrow = (
      <div className="arrowContainer">
        <a href={`#slide-${nextIndex}`}>
          <div id="rightArrowDiv" onClick={this.nextImage}>
            <Icon icon={bxsChevronRight} className="rightChevron" id="icon" width="20" height="20" />
          </div>
        </a>
      </div>
    );
    const leftArrow = (
      <div className="arrowContainer">
        <a href={`#slide-${previousIndex}`}>
          <div id="leftArrowDiv" onClick={this.prevImage}>
            <Icon icon={bxsChevronLeft} className="leftChevron" id="icon" width="20" height="20" />
          </div>
        </a>
      </div>
    );
    const exit = (
      <div className="exitIcon">
        <Icon icon={xIcon} onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverHandler} onClick={toggleModal} className={!xHover && counter === 0 ? null : xHover ? 'xiconspin' : 'xiconunspin'} id="icon" width="40" height="40" />
      </div>
    );
    return (
      <div id="container">
        <Modal
          isOpen={modal}
          onRequestClose={toggleModal}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
            content: {
              top: '5%',
              bottom: '5%',
              height: modalMeasurement,
              width: modalMeasurement,
              padding: '0 0 0 0',
              border: '0px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '0px',
              outline: 'none',
            },
          }}
        >
          <div className="modal">
            {exit}
            {leftArrow}
            {rightArrow}
            <div id="carouselDots">
              <table id="dotsTable">
                <tbody>
                  <tr>
                    {dots}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="slides">
              {images}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CarouselModal;
