import * as React from 'react';
import { shallow, mount } from 'enzyme';
import ProductTileRest from './ProductTileRest';
import MegafonTv from 'icons/Service-logos/24/MF-TV.svg';

const className = '.mfui-product-tile-rest';

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
    description: 'description',
    shopTag: 'choose',
    link: '/tariffs/all/vybiray.html',
    moreLinkText: 'Подробнее',
    showMoreLink: true,
    isBuyable: true,
    buyLink: '/zakaz/?tariff=choose',
    buyButtonText: 'Купить',
    showBuyButton: true,
    buttonPassiveColor: 'green' as 'green',
    connectLink: '/tariffs/all/vybiray.html',
    connectButtonText: 'Подключить',
    showConnectButton: true,
    payment: {
        title: 'При покупке новой SIM–карты',
        value: '3000',
        unitExtra: 'за 30 дней',
        unitValue: '₽',
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
            value: 10,
            unit: 'ГБ',
            title: 'Безлимитный интернет',
            isDelim: true,
        },
    ],
    firstParams: {
        title: 'Параметры',
        caption: 'Тариф для планшетов',
        items: [{
            svgIcon: <MegafonTv />,
            title: 'МегаФон ТВ',
        }],
    },
    secondParams: [
        {
            title: 'Кэшбэк 20%',
            unit: '',
            value: '',
        },
        {
            title: 'Безлимитные SMS',
            unit: '₽ за 30 дней',
            value: '100',
        },
    ],
    info,
};

const handler = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});

describe('<ProductTileRest />', () => {
    describe('render', () => {
        it('renders ProductTileRest with empty props', () => {
            const wrapper = shallow(
                <ProductTileRest
                    title="title"
                    payment={{
                        title: 'title',
                        value: 'value',
                        unitExtra: 'unitExtra',
                        unitValue: 'unitValue',
                    }}
                    packs={[]}
                    firstParams={{
                        caption: 'caption',
                        items: [],
                    }}
                    secondParams={[]}
                    info={{}}
                />
            );

            expect(wrapper).toMatchSnapshot();
        });

        it('renders ProductTileRest', () => {
            const wrapper = shallow(<ProductTileRest {...tariff} />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    it('calls onClickConnect', () => {
        const wrapper = shallow(
            <ProductTileRest
                {...tariff}
                info={info}
                onClickConnect={handler}
            />
        );
        const connectButton = `${className}__detail-link_type_connect`;
        const onClick = wrapper.find(connectButton).prop('onClick') as any;

        onClick({});
        expect(handler).toBeCalledWith({
            ...info,
            shopTag: tariff.shopTag,
        }, {});
    });

    it('calls onClickBuy', () => {
        const wrapper = shallow(
            <ProductTileRest
                {...tariff}
                info={info}
                onClickBuy={handler}
            />
        );
        const buyButton = `${className}__buy-button`;
        const onClick = wrapper.find(buyButton).prop('onClick') as any;

        onClick({});
        expect(handler).toBeCalledWith({
            ...info,
            shopTag: tariff.shopTag,
            price: tariff.payment.discount,
            unitValue: tariff.payment.unitValue,
            unitExtra: tariff.payment.unitExtra,
        }, {});
    });

    it('calls onClickMore', () => {
        const wrapper = shallow(
            <ProductTileRest
                {...tariff}
                info={info}
                onClickMore={handler}
            />
        );
        const moreButton = `${className}__detail-link_type_more`;
        const onClick = wrapper.find(moreButton).prop('onClick') as any;

        onClick({});
        expect(handler).toBeCalledWith({
            ...info,
            shopTag: tariff.shopTag,
        }, {});
    });
});
