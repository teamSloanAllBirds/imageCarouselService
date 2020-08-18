/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';

import { Icon } from '@iconify/react';
import plusCircle from '@iconify/icons-mdi/plus-circle';

const Table = styled.table`
`;

const Row = styled.tr`
`;

const Td = styled.td`
  padding: 5px;
  .container {
    position:relative;
    text-align: center;
    vertical-align: middle;
  }

  img {
    width: 30vw;
    max-width: 350px;
    height: 30vw;
    max-height: 350px;
  }

  img:hover, .icon:hover {
    cursor: pointer;
  }

  .icon{
    position: absolute;
    display:none;
    color: white;
    width: 40px;
    height: 40px;
    z-index:100;
  }

  div:hover .icon {
    display: block;
    opacity: .5;
    top: 45%;
    left: 45%;
  }

  div: hover .icon:hover {
    opacity: 1;
  }
`;

class HoverGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    const { selectImage } = this.props;
    selectImage(parseInt(e.target.dataset.index, 10));
  }

  render() {
    const { urls, toggleModal } = this.props;
    const tds = urls.map((url, index) => (
      <Td key={index} onClick={toggleModal}>
        <a href={`#slide-${index}`}>
          <div className="container">
            <img alt="pic" src={url} data-index={index} onClick={this.clickHandler} />
            <Icon icon={plusCircle} className="icon" />
          </div>
        </a>
      </Td>
    ));
    const pairs = tds.reduce((r, v, i) => {
      if (i % 2 === 0) { r.push(tds.slice(i, i + 2)); }
      return r;
    }, []);
    const rows = pairs.map((pair, index) => (
      <Row key={index}>
        {pair[0]}
        {pair[1]}
      </Row>
    ));
    return (
      <div>
        <Table>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default HoverGrid;
