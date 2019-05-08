import * as React from 'react';
import { shallow } from 'enzyme';
import ProductTileBuy from './ProductTileBuy';

const props = {
    className: 'class',
    buyButton: {
        buyLink: '#',
        buyButtonText: 'Купить',
        showBuyButton: true,
        buttonPassiveColor: 'green' as 'green',
    },
};

describe('<ProductTileBuy />', () => {
    it('it renders ProductTileBuy', () => {
        const wrapper = shallow(<ProductTileBuy {...props} onClickBuy={jest.fn()} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('it renders ProductTileBuy with connectButton', () => {
        const connectButton = {
            connectLink: '#',
            connectButtonText: 'Подключить',
            showConnectButton: true,
        };
        const wrapper = shallow(<ProductTileBuy {...props} connectButton={connectButton} onClickConnect={jest.fn()}/>);

        expect(wrapper).toMatchSnapshot();
    });
});
