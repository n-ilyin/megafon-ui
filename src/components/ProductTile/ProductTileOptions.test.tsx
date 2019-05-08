import * as React from 'react';
import { shallow } from 'enzyme';
import ProductTileOptions from './ProductTileOptions';
import MegafonTv from 'icons/Service-logos/24/MF-TV.svg';

const props = {
    options: [{
        title: 'Безлимитные SMS',
        value: '55',
        unit: '₽ за 30 дней',
        svgIcon: <MegafonTv />,
    }],
};

describe('<ProductTileOptions />', () => {
    it('renders ProductTileOptions', () => {
        const wrapper = shallow(<ProductTileOptions {...props} onClickBubble={jest.fn()} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders ProductTileOptions with head', () => {
        const head = 'Дополнительные возможности:';
        const wrapper = shallow(<ProductTileOptions {...props} head={head} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders ProductTileOptions with caption', () => {
        const options = [{
            title: 'МегаФон ТВ',
            caption: 'Особый статус и привилегии',
            svgIcon: <MegafonTv />,
        }];
        const wrapper = shallow(<ProductTileOptions options={options} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders ProductTileOptions with footnote', () => {
        const options = [{
            title: 'Кэшбэк 20 %',
            footnote: 'Участвуйте в программе и тратьте кэшбэк',
            svgIcon: <MegafonTv />,
        }];
        const wrapper = shallow(<ProductTileOptions options={options} />);

        expect(wrapper).toMatchSnapshot();
    });
});
