import * as React from 'react';
import { shallow } from 'enzyme';
import ProductTileStatic from './ProductTileStatic';

describe('<ProductTileStatic />', () => {
    it('it renders ProductTileStatic', () => {
        const props = {
            packs: [{
                value: 1500,
                unit: 'минут',
            }],
        };
        const wrapper = shallow(<ProductTileStatic {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('it renders ProductTileStatic with delim', () => {
        const props = {
            packs: [{
                title: 'Безлимитный интернет',
                isDelim: true,
            }],
        };
        const wrapper = shallow(<ProductTileStatic {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
