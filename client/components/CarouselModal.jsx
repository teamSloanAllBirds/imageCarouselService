/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import xIcon from '@iconify/icons-bi/x';
import Modal from 'react-modal';
import './CarouselModal.css';

Modal.setAppElement(document.getElementById('app'));

class CarouselModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xHover: false,
      counter: 0,
      width:  800,
      height: 182,
      modalMeasurement: '200px',
    };
    this.hoverHandler = this.hoverHandler.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.style = {}
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.setState({ modalMeasurement: `${window.innerWidth < window.innerHeight ? .5 * window.innerWidth : .5 * window.innerHeight}px`})
    // console.log(this.state.width, this.state.height, this.state.modalMeasurement);
  }

  hoverHandler() {
    const { xHover, counter } = this.state;
    this.setState({ xHover: !xHover, counter: counter + 1 });
  }

  render() {
    const {
      urls,
      modal,
      current,
      toggleModal,
    } = this.props;
    const { xHover, counter, modalMeasurement } = this.state;
    const widthMagic = `${window.innerWidth < window.innerHeight ? .5 * window.innerWidth : .5 * window.innerHeight}px`;
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
              position: 'absolute',
              display: 'inline-block',
              top: '50px',
              // left: '40px',
              // right: '40px',
              // bottom: '40px',
              // height: '90vh',
              // width: '90vh',
              height: '90%',
              padding: '0 0 0 0',
              border: '0px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '0px',
              outline: 'none',
              // padding: '0px',
            },
          }}
        >
          <div className="modal">
            <Icon icon={xIcon} onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverHandler} onClick={toggleModal} className={!xHover && counter === 0 ? null : xHover ? 'xiconspin' : 'xiconunspin'} id="icon" width="40" height="40" />
            <img id="current" alt="current" src={current} width="100%" height="100%" />
          </div>
        </Modal>
      </div>
    );
  }
}

export default CarouselModal;
