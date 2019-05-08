import * as React from 'react';
import { shallow } from 'enzyme';
import ProductTileCashback from './ProductTileCashback';

const props = {
    title: 'Кэшбэк',
    value: 23,
    unit: '%',
};

describe('<ProductTileCashback />', () => {
    it('renders ProductTileCashback', () => {
        const wrapper = shallow(<ProductTileCashback {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should not renders without props', () => {
        const wrapper = shallow(<ProductTileCashback />);

        expect(wrapper.type()).toEqual(null);
    });
});
