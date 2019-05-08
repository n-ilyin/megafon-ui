import * as React from 'react';
import { shallow } from 'enzyme';
import ProductTilePrice from './ProductTilePrice';

const props = {
    title: 'Новым абонентам 1000 ₽ на счёт',
    value: '1500',
    unitExtra: '₽',
    unitValue: 'за 30 дней',
};

describe('<ProductTilePrice />', () => {
    it('renders ProductTilePrice', () => {
        const wrapper = shallow(<ProductTilePrice {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders ProductTilePrice with discount', () => {
        const wrapper = shallow(<ProductTilePrice {...props} discount="1000" />);

        expect(wrapper).toMatchSnapshot();
    });
});
