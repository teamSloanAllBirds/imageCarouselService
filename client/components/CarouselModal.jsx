import React, {Component} from 'react';
// import { Icon, InlineIcon } from '@iconify/react';
// import xIcon from '@iconify/icons-bi/x';
import { Icon, InlineIcon } from '@iconify/react';
import xIcon from '@iconify/icons-bi/x';
import Modal from 'react-modal';
import css from './CarouselModal.css';

Modal.setAppElement(document.getElementById('app'));

class CarouselModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      xHover: false,
      counter: 0
    };
    this.hoverHandler = this.hoverHandler.bind(this);
  }

  hoverHandler() {
    this.setState({xHover: !this.state.xHover, counter: this.state.counter + 1});
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modal}
          onRequestClose={this.props.toggleModal}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              bottom: '40px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '1px',
              outline: 'none',
              padding: '20px'
            }
          }}
        >
          <div className='modal'>
            <Icon icon={xIcon} onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverHandler} className={!this.state.xHover && this.state.counter === 0 ? 'xicon' : this.state.xHover ? 'xiconspin' : 'xiconunspin'} width='40' height='40'/>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CarouselModal;
