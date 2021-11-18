import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SimpleComponent from '../../src/components/SimpleComponent';

describe('SimpleComponent', () => {
  let wrapper: ShallowWrapper;
  beforeAll(() => {
    wrapper = shallow(<SimpleComponent id="test"></SimpleComponent>);
  });

  it('Should render root element', () => {
    expect(wrapper.find('#test')).not.toBe(null);
  });
});
