import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/app.jsx';
import HoverGrid from '../client/components/HoverGrid.jsx';
import CarouselModal from '../client/components/CarouselModal.jsx';
import MidPageImages from '../client/components/MidPageImages.jsx';

configure({ adapter: new Adapter() });

const urls =[
  'https://teamsloanpics.s3.us-east-2.amazonaws.com/001.jpeg',
  'https://teamsloanpics.s3.us-east-2.amazonaws.com/002.jpeg',
  'https://teamsloanpics.s3.us-east-2.amazonaws.com/003.jpeg',
  'https://teamsloanpics.s3.us-east-2.amazonaws.com/004.jpeg',
  'https://teamsloanpics.s3.us-east-2.amazonaws.com/005.jpeg',
  'https://teamsloanpics.s3.us-east-2.amazonaws.com/006.jpeg',
  'https://teamsloanpics.s3.us-east-2.amazonaws.com/007.jpeg',
  'https://teamsloanpics.s3.us-east-2.amazonaws.com/008.jpeg'
];


describe('App testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
    wrapper.setState({
      urls: urls,
      modal: false,
      current: '',
      currentIndex: 0,
    });
  });

  it('should render components', () => {
    expect(wrapper.find(HoverGrid)).toHaveLength(1);
    expect(wrapper.find(CarouselModal)).toHaveLength(1);
    expect(wrapper.find(MidPageImages)).toHaveLength(1);
  });
});

describe('HoverGrid testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<HoverGrid urls={ urls }/>);
  });

  it('displays all images passed as props', () => {
    expect(wrapper.find('div.container')).toHaveLength(urls.length);
  });

  it('makes all images clickable', () => {
    const images = wrapper.find('.container');
    images.forEach((image) => expect(() => { image.simulate('click'); }).not.toThrow(Error));
  });
});

describe('CarouselModal testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<CarouselModal urls={ urls }/>);
  });

  it('does not display when modal is false', () => {
    wrapper.setProps({modal: false});
    expect(wrapper.find('div.modal')).toHaveLength(0);
  });
});

describe('MidPageImages testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MidPageImages urls={ urls }/>);
  });

  it('displays all images passed as props', () => {
    expect(wrapper.find('img')).toHaveLength(urls.length);
  });
});