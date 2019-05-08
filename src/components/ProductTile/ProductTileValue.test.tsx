import * as React from 'react';
import { shallow } from 'enzyme';
import ProductTileValue from './ProductTileValue';

const props = {
    value: '700 ₽',
    hAlign: 'center' as 'center',
};

describe('<ProductTileValue />', () => {
    it('renders ProductTileValue', () => {
        const wrapper = shallow(<ProductTileValue {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders ProductTileValue before animation', () => {
        const wrapper = shallow(<ProductTileValue {...props} />);

        wrapper.setProps({ value: '800 ₽'});
        expect(wrapper).toMatchSnapshot();
    });

    it('renders ProductTileValue after animation', () => {
        const wrapper = shallow(<ProductTileValue {...props} />);

        jest.useFakeTimers();
        wrapper.setProps({ value: '800 ₽'});
        jest.runOnlyPendingTimers();
        expect(wrapper).toMatchSnapshot();
    });
});
