import React, {Component} from 'react';
import styled from 'styled-components';

import { Icon, InlineIcon } from '@iconify/react';
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
    width: 250px;
    height: 250px;
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
    top: 105px;
    left: 105px;
  }

  div: hover .icon:hover {
    opacity: 1;
  }
`;

class HoverGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  render() {
    let tds = this.props.urls.map((url, index) => {
      return <Td key={index} onClick={this.props.toggleModal}><div className='container'><img src={url}></img><Icon icon={plusCircle} className='icon'/></div></Td>;
    });
    let pairs = tds.reduce((r, v, i) => {
      if (i % 2 === 0) { r.push(tds.slice(i, i + 2)); }
      return r;
    }, []);
    let rows = pairs.map((pair, index) => {
      return <Row key ={index}>{pair[0]}{pair[1]}</Row>;
    });
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