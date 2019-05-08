import * as React from 'react';
import { shallow, mount } from 'enzyme';
import ProductTile from './ProductTile';
import MegafonTv from 'icons/Service-logos/24/MF-TV.svg';
import Buy from './ProductTileBuy';
import Button from '../Button/Button';
import TextLink from '../TextLink/TextLink';

const info = {
    billingIds: [ '1223' ],
    fast: false,
    sms: null,
    smsText: null,
    smsSite: null,
    ivr: null,
    ussd: null,
    lkLink: 'https://lk.megafon.ru/tariffs/',
    popupText: null,
    title: 'Включайся! Выбирай',
    id: 2098,
};

const tariff = {
    title: 'Включайся! Выбирай',
    link: '/tariffs/all/vybiray.html',
    description: 'description',
    isBuyable: true,
    buyLink: '/zakaz/?tariff=choose',
    buyButtonText: 'Купить',
    buttonPassiveColor: 'green' as 'green',
    shopTag: 'choose',
    connectLink: '/tariffs/all/vybiray.html',
    showConnectButton: true,
    payment: {
        title: 'При покупке новой SIM–карты',
        value: '3000',
        unitExtra: 'за 30 дней',
        unitValue: '₽',
        unit: '₽ за 30 дней',
        discount: '100',
    },
    packs: [
        {
            value: 10,
            unit: 'ГБ',
            title: 'Звонки на все номера России',
            isDelim: false,
        },
        {
            value: 0,
            unit: '',
            title: 'Безлимитный интернет',
            isDelim: true,
        },
    ],
    firstParams: {
        title: 'Параметры',
        caption: 'Тариф для планшетов',
        items: [{
            caption: 'Пакеты кино и сериалов',
            svgIcon: <MegafonTv />,
            title: 'МегаФон ТВ',
        }],
    },
    secondParams: [
        {
            footnote: 'Участвуйте в программе',
            svgIcon: <MegafonTv />,
            title: 'Кэшбэк 20%',
            unit: '',
            value: '',
        },
        {
            footnote: '',
            svgIcon: <MegafonTv />,
            title: 'Безлимитные SMS',
            unit: '₽ за 30 дней',
            value: '100',
        },
    ],
    cashback: {
        title: 'Кэшбэк',
        value: 20,
        unit: '%',
    },
    info,
};

const servicePacks = [
    {
        buyLink: '/zakaz/?tariff=choose_11',
        shopTag: 'choose_11',
        calls: {
            value: 300,
            unit: 'минут',
        },
        traffic: {
            value: 6,
            unit: 'ГБ',
        },
        payment: {
            value: '450',
            discount: '',
        },
        options: [
            {
                title: 'Кэшбэк 20%',
                value: '',
                unit: '',
                footnote: 'Участвуйте в программе',
                svgIcon: <MegafonTv />,
            },
            {
                title: 'Безлимитные SMS',
                value: '55',
                unit: '₽ за 30 дней',
                footnote: 'Подключите в разделе «Услуги и опции»',
                svgIcon: <MegafonTv />,
            },
        ],
    },
];

const compareRestState = wrapper => {
    const [ currentPack ] = servicePacks;
    expect(wrapper.state('buyLink')).toEqual(currentPack.buyLink);
    expect(wrapper.state('options')).toEqual(currentPack.options);
    expect(wrapper.state('discount')).toEqual(currentPack.payment.discount);
    expect(wrapper.state('price')).toEqual(currentPack.payment.value);
    expect(wrapper.state('currentPack')).toEqual(currentPack);
};

describe('<ProductTile />', () => {
    it('renders ProductTile', () => {
        const wrapper = shallow(<ProductTile {...tariff} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders ProductTile', () => {
        const wrapper = shallow(<ProductTile {...tariff} servicePacks={servicePacks} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders ProductTile with topBadgeTitle', () => {
        const wrapper = shallow(
            <ProductTile
                {...tariff}
                servicePacks={servicePacks}
                topBadgeTitle="Тариф-конструктор от 450 ₽"
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('calls onClickConnect handler', () => {
        const data = {
            ...info,
            callsValue: 0,
            trafficValue: 0,
        };
        const fn = jest.fn();
        const wrapper = shallow(<ProductTile {...tariff} onClickConnect={fn} />);

        wrapper.find(Buy).dive().find(TextLink).simulate('click', {});
        expect(fn).toBeCalledWith(data, {});
    });

    it('calls onClickConnect handler with servicePacks', () => {
        const data = {
            ...info,
            callsValue: 300,
            trafficValue: 6,
        };
        const fn = jest.fn();
        const wrapper = shallow(<ProductTile {...tariff} onClickConnect={fn} servicePacks={servicePacks} />);

        wrapper.find(Buy).dive().find(TextLink).simulate('click', {});
        expect(fn).toBeCalledWith(data, {});
    });

    it('calls handleClickBuy handler', () => {
        const data = {
            ...info,
            callsValue: 0,
            trafficValue: 0,
            shopTag: 'choose',
            price: '100',
            unitValue: '₽',
            unitExtra: 'за 30 дней',
        };
        const fn = jest.fn();
        const wrapper = shallow(<ProductTile {...tariff} onClickBuy={fn} />);

        wrapper.find(Buy).dive().find(Button).simulate('click', {});
        expect(fn).toBeCalledWith(data, {});
    });

    it('calls handleClickBuy handler with servicePacks', () => {
        const data = {
            ...info,
            callsValue: 300,
            trafficValue: 6,
            shopTag: 'choose_11',
            price: '100',
            unitValue: '₽',
            unitExtra: 'за 30 дней',
        };
        const fn = jest.fn();
        const wrapper = shallow(<ProductTile {...tariff} onClickBuy={fn} servicePacks={servicePacks} />);

        wrapper.find(Buy).dive().find(Button).simulate('click', {});
        expect(fn).toBeCalledWith(data, {});
    });

    it('calls onClickMore handler', () => {
        const fn = jest.fn();
        const wrapper = shallow(<ProductTile {...tariff} onClickMore={fn} />);

        wrapper.find('.mfui-product-tile__title-link').dive().first().simulate('click', {});
        expect(fn).toBeCalledWith(info, {});

        wrapper.find('.mfui-product-tile__detail-link').dive().first().simulate('click', {});
        expect(fn).toBeCalledWith(info, {});
    });

    it('calls onClickBubble handler', () => {
        const fn = jest.fn();
        const wrapper = mount(<ProductTile {...tariff} onClickBubble={fn} />);

        wrapper.find('.mfui-product-tile-options__bubble-trigger').simulate('click');
        expect(fn).toBeCalledWith(info);
    });

    it('calls handleChangeCalls handler', () => {
        const wrapper = mount(<ProductTile {...tariff} servicePacks={servicePacks} />);
        const instance = wrapper.instance() as ProductTile;

        instance.handleChangeCalls({} as React.ChangeEvent<HTMLInputElement>, '300');
        wrapper.find('.mfui-product-switcher__item').first().simulate('click');

        compareRestState(wrapper);
        expect(wrapper.state('callsValue')).toEqual(300);
    });

    it('calls handleChangeTraffic handler', () => {
        const wrapper = mount(<ProductTile {...tariff} servicePacks={servicePacks} />);
        const instance = wrapper.instance() as ProductTile;

        instance.handleChangeTraffic({} as React.ChangeEvent<HTMLInputElement>, '6');
        wrapper.find('.mfui-product-switcher__item').last().simulate('click');

        compareRestState(wrapper);
        expect(wrapper.state('trafficValue')).toEqual(6);
    });

    it('should return object from getRestState call', () => {
        const [ currentPack ] = servicePacks;
        const wrapper = shallow(<ProductTile {...tariff} servicePacks={servicePacks} />);
        const instance = wrapper.instance() as ProductTile;
        const receivedObject = instance.getRestState(currentPack);
        const expectedObject = {
            currentPack: currentPack,
            price: currentPack.payment.value,
            discount: currentPack.payment.discount,
            options: currentPack.options,
            buyLink: currentPack.buyLink
        };

        expect(receivedObject).toEqual(expectedObject);
    });


    it('should return object from getCurrentPack call', () => {
        const [ currentPack ] = servicePacks;
        const wrapper = shallow(<ProductTile {...tariff} servicePacks={servicePacks} />);
        const instance = wrapper.instance() as ProductTile;
        const receivedObject = instance.getCurrentPack(300, 6);

        expect(receivedObject).toEqual(currentPack);
    });

    it('should return object from getSwitcherValues call', () => {
        const wrapper = shallow(<ProductTile {...tariff} servicePacks={servicePacks} />);
        const instance = wrapper.instance() as ProductTile;
        const receivedObject = instance.getSwitcherValues();
        const expectedObject = {
            calls: ['300'],
            traffic: ['6'],
        };

        expect(receivedObject).toEqual(expectedObject);
    });

    it('should return link from formHashLink call', () => {
        const wrapper = shallow(<ProductTile {...tariff} servicePacks={servicePacks} />);
        const instance = wrapper.instance() as ProductTile;
        const link = instance.formHashLink('/tariffs/all/vybiray.html', '');

        expect(link).toEqual('/tariffs/all/vybiray.html');
    });

    it('should return hashLink from formHashLink call', () => {
        const wrapper = shallow(<ProductTile {...tariff} servicePacks={servicePacks} />);
        const instance = wrapper.instance() as ProductTile;
        const link = instance.formHashLink('/tariffs/all/vybiray.html', 'choose');

        expect(link).toEqual('/tariffs/all/vybiray.html#choose');
    });
});
