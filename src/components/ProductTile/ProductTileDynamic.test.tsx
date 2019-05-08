import * as React from 'react';
import { shallow } from 'enzyme';
import ProductTileDynamic from './ProductTileDynamic';

const props = {
    currentPack: {
        calls: {
            value: 100,
            unit: 'минут',
        },
        traffic: {
            value: 10,
            unit: 'ГБ',
        },
    },
    switcher: {
        calls: ['1', '2'],
        traffic: ['3', '4'],
    },
    startCallsIndex: 1,
    startTrafficIndex: 1,
};

describe('<ProductTileDynamic />', () => {
    it('it renders ProductTileDynamic', () => {
        const wrapper = shallow(
            <ProductTileDynamic
                {...props}
                onChangeCalls={jest.fn()}
                onChangeTraffic={jest.fn()}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
