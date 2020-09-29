import React from 'react';
// import { render } from '@testing-library/react';
import Forecast from './Forecast';

import { shallow } from 'enzyme';

describe("Forecast Testing", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Forecast />);
  })

  test('input button country name search', () => {
    expect(wrapper.find("#btn-search").text()).toContain('Search')
  })

  // test('it will render forecast on search click ', () => {
  //   wrapper.find("#btn-search").simulate("click");
  //   expect(wrapper.find(".city-temp").text()).toContain("°C");
  // })

  // test('Test click event', () => {
  //   const mockCallBack = jest.fn();

  //   const button = shallow((<button onClick={mockCallBack}>Ok!</button>));
  //   button.find('#btn-search').simulate('click');
  //   expect(mockCallBack.mock.calls).toContain('°C');
  // });
})