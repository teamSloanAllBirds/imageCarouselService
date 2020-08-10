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
    selectImage(urls[currentIndex === urls.length - 1 ? 0 : currentIndex + 1]);
  }

  prevImage() {
    const { urls, currentIndex, selectImage } = this.props;
    selectImage(urls[currentIndex === 0 ? urls.length - 1 : currentIndex - 1]);
  }

  render() {
    const {
      urls,
      modal,
      current,
      currentIndex,
      toggleModal,
    } = this.props;
    const { xHover, counter, modalMeasurement } = this.state;
    const dots = urls.map((c, index) => <InlineIcon icon={dotIcon} key={c} className="dot" color="gray" height={index === currentIndex ? '40' : '20'} width={index === currentIndex ? '40' : '20'} />);
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
            <Icon icon={xIcon} onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverHandler} onClick={toggleModal} className={!xHover && counter === 0 ? null : xHover ? 'xiconspin' : 'xiconunspin'} id="icon" width="40" height="40" />
            <div id="leftArrowDiv" onClick={this.prevImage}>
              <Icon icon={bxsChevronLeft} className="leftChevron" id="icon" width="20" height="20" />
            </div>
            <div id="rightArrowDiv" onClick={this.nextImage}>
              <Icon icon={bxsChevronRight} className="rightChevron" id="icon" width="20" height="20" />
            </div>
            <div id="carouselDots">
              {dots}
            </div>
            <img id="current" alt="current" src={current} width="100%" height="100%" />
          </div>
        </Modal>
      </div>
    );
  }
}

export default CarouselModal;
