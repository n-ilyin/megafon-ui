import * as PropTypes from 'prop-types';

const pack = {
    value: PropTypes.number,
    unit: PropTypes.string,
    title: PropTypes.string,
    isDelim: PropTypes.boolean,
};

const payment = {
    title: PropTypes.string,
    value: PropTypes.string.isRequired,
    unitExtra: PropTypes.string,
    unitValue: PropTypes.string,
    discount: PropTypes.string,
};

const option = {
    title: PropTypes.string,
    caption: PropTypes.stirng,
    value: PropTypes.string,
    unit: PropTypes.string,
    footnote: PropTypes.string,
    svgIcon: PropTypes.element,
};

const servicePackParam = {
    value: PropTypes.number,
    unit: PropTypes.string,
};

const cashback = {
    title: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.string,
};

export const productTileProps = {
    title: PropTypes.string.isRequired,
    topBadgeTitle: PropTypes.string,
    secondParamsHead: PropTypes.string,
    shopTag: PropTypes.string,
    startCallsIndex: PropTypes.number,
    startTrafficIndex: PropTypes.number,
    link: PropTypes.string,
    moreLinkText: PropTypes.string,
    showMoreLink: PropTypes.bool,
    buyLink: PropTypes.string,
    usePackBuyLink: PropTypes.bool,
    buyButtonText: PropTypes.string,
    showBuyButton: PropTypes.bool,
    buttonPassiveColor: PropTypes.oneOf(['green', 'transparent-green']),
    connectLink: PropTypes.string,
    connectButtonText: PropTypes.string,
    showConnectButton: PropTypes.bool,
    payment: PropTypes.shape(payment).isRequired,
    packs: PropTypes.arrayOf(PropTypes.shape(pack)),
    secondParams: PropTypes.arrayOf(PropTypes.shape(option)).isRequired,
    cashback: PropTypes.shape(cashback).isRequired,
    firstParams: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(option)),
    }).isRequired,
    servicePacks: PropTypes.arrayOf(PropTypes.shape({
        buyLink: PropTypes.string,
        calls: PropTypes.shape(servicePackParam),
        traffic: PropTypes.shape(servicePackParam),
        options: PropTypes.arrayOf(PropTypes.shape(option)),
        payment: PropTypes.shape({
            value: PropTypes.string.isRequired,
            discount: PropTypes.string,
        }),
    })),
    info: PropTypes.object,
    onClickConnect: PropTypes.func,
    onClickBuy: PropTypes.func,
    onClickMore: PropTypes.func,
    onClickBubble: PropTypes.func,
};

export const productTileBuyProps = {
    buyButton: PropTypes.shape({
        buyLink: PropTypes.string,
        buyButtonText: PropTypes.string,
        showBuyButton: PropTypes.bool,
        buttonPassiveColor: PropTypes.oneOf(['green', 'transparent-green']),
    }),
    connectButton: PropTypes.shape({
        connectLink: PropTypes.string,
        connectButtonText: PropTypes.string,
        showConnectButton: PropTypes.bool,
    }),
    onClickBuy: PropTypes.func,
    onClickConnect: PropTypes.func,
};

export const productTileCashbackProps = cashback;

export const productTileDynamicProps = {
    currentPack: PropTypes.shape({
        calls: PropTypes.shape(servicePackParam),
        traffic: PropTypes.shape(servicePackParam),
    }),
    switcher: PropTypes.shape({
        calls: PropTypes.arrayOf(PropTypes.string),
        traffic: PropTypes.arrayOf(PropTypes.string),
    }),
    startCallsIndex: PropTypes.number,
    startTrafficIndex: PropTypes.number,
    onChangeCalls: PropTypes.func,
    onChangeTraffic: PropTypes.func,
};

export const productTileHintProps = {
    title: PropTypes.string,
};

export const productTileOptionsProps = {
    head: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape(option)),
    onClickBubble: PropTypes.func,
};

export const productTilePriceProps = payment;

export const productTileStaticProps = {
    packs: PropTypes.arrayOf(PropTypes.shape(pack)),
};

export const productTileValueProps = {
    value: PropTypes.string.isRequired,
    hAlign: PropTypes.oneOf(['center']),
};
