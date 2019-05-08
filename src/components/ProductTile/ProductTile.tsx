import * as React from 'react';
import { cnCreate } from '../../utils/cn';
import './style/ProductTile.less';
import TextLink from '../TextLink/TextLink';
import Hint from './ProductTileHint';
import Cashback from './ProductTileCashback';
import Static from './ProductTileStatic';
import Dynamic from './ProductTileDynamic';
import Price from './ProductTilePrice';
import Options from './ProductTileOptions';
import Buy from './ProductTileBuy';
import { IProductTile, IProductTileState, IServicePack } from './types';
import { productTileProps } from './propTypes';

const cn = cnCreate('mfui-product-tile');
class ProductTile extends React.Component<IProductTile, IProductTileState> {
    static propTypes = productTileProps;

    static defaultProps: Partial<IProductTile> = {
        buyButtonText: 'Купить',
        buttonPassiveColor: 'green',
        showBuyButton: true,
        connectButtonText: 'Перейти на тариф',
        showConnectButton: true,
        moreLinkText: 'Подробнее',
        showMoreLink: true,
        servicePacks: [],
        info: {},
        startCallsIndex: 0,
        startTrafficIndex: 0,
        usePackBuyLink: true,
    };

    constructor(props: IProductTile) {
        super(props);

        const switcher = this.getSwitcherValues();
        const defaultCallsValue = Number(switcher.calls[props.startCallsIndex!]);
        const defaultTrafficValue = Number(switcher.traffic[props.startCallsIndex!]);
        const currentPack = this.getCurrentPack(defaultCallsValue, defaultTrafficValue);
        const { payment, options, buyLink, shopTag = '' } = currentPack;

        this.state = {
            switcher,
            currentPack,
            callsValue: defaultCallsValue,
            trafficValue: defaultTrafficValue,
            price: payment && payment.value || props.payment.value,
            discount: payment && payment.discount || props.payment.discount || '',
            options: options || props.secondParams,
            buyLink: props.usePackBuyLink && buyLink || this.formHashLink(props.buyLink || '', shopTag) || '',
        };
    }

    handleClickConnect = (e: React.SyntheticEvent<EventTarget>) => {
        const { onClickConnect, info } = this.props;
        const { currentPack: { calls, traffic } } = this.state;
        const callsValue = calls ? calls.value : 0;
        const trafficValue = traffic ? traffic.value : 0;

        onClickConnect && onClickConnect({ ...info, callsValue, trafficValue }, e);
    }

    handleClickBuy = (e: React.SyntheticEvent<EventTarget>) => {
        const { onClickBuy, info, shopTag, payment: { unitValue, unitExtra } } = this.props;
        const { currentPack: { calls, traffic, shopTag: packShopTag }, price, discount } = this.state;
        const callsValue = calls ? calls.value : 0;
        const trafficValue = traffic ? traffic.value : 0;
        const currentShopTag = packShopTag || shopTag || '';
        const priceValue = discount ? discount : price;
        const tariffProps = {
            ...info,
            callsValue,
            trafficValue,
            shopTag: currentShopTag,
            price: priceValue,
            unitValue,
            unitExtra,
        };

        onClickBuy && onClickBuy(tariffProps, e);
    }

    handleClickMore = (e: React.SyntheticEvent<EventTarget>) => {
        const { onClickMore, info } = this.props;

        onClickMore && onClickMore({ ...info }, e);
    }

    handleClickBubble = () => {
        const { onClickBubble, info } = this.props;

        onClickBubble && onClickBubble({ ...info });
    }

    handleChangeCalls = (_e: React.SyntheticEvent<EventTarget>, value: string): boolean => {
        const currentValue = Number(value);
        const { trafficValue } = this.state;
        const currentPack = this.getCurrentPack(currentValue, trafficValue);

        if (Object.keys(currentPack).length === 0) {
            return false;
        }

        this.setState({
            ...this.getRestState(currentPack),
            callsValue: currentValue,
        });

        return true;
    }

    handleChangeTraffic = (_e: React.SyntheticEvent<EventTarget>, value: string): boolean => {
        const currentValue = Number(value);

        const { callsValue } = this.state;
        const currentPack = this.getCurrentPack(callsValue, currentValue);

        if (Object.keys(currentPack).length === 0) {
            return false;
        }

        this.setState({
            ...this.getRestState(currentPack),
            trafficValue: currentValue,
        });

        return true;
    }

    getRestState(currentPack: Partial<IServicePack>): object {
        const { buyLink = '', usePackBuyLink } = this.props;
        const { shopTag = '' } = currentPack;

        return {
            currentPack,
            price: currentPack.payment && currentPack.payment.value || '',
            discount: currentPack.payment && currentPack.payment.discount || '',
            options: currentPack.options || [],
            buyLink: usePackBuyLink && currentPack.buyLink || this.formHashLink(buyLink, shopTag) || '',
        };
    }

    getCurrentPack(callsValue: number, trafficValue: number): Partial<IServicePack> {
        const { servicePacks } = this.props;
        const [ currentPack = {} ] = servicePacks!.filter(pack => (
            pack.calls!.value === callsValue && pack.traffic!.value === trafficValue
        ));

        return currentPack;
    }

    getSwitcherValues() {
        const { servicePacks } = this.props;
        const calls = {};
        const traffic = {};

        servicePacks!.forEach(items => {
            calls[String(items.calls!.value)] = true;
            traffic[String(items.traffic!.value)] = true;
        });

        return {
            calls: Object.keys(calls).sort((a, b) => Number(a) - Number(b)),
            traffic: Object.keys(traffic).sort((a, b) => Number(a) - Number(b)),
        };
    }

    formHashLink(link: string, shopTag: string) {
        return !shopTag ? link : `${link}#${shopTag}`;
    }

    renderStatic() {
        const { packs } = this.props;

        if (!packs) {
            return null;
        }

        return <Static packs={packs} />;
    }

    renderDynamic() {
        const {
            switcher,
            currentPack,
        } = this.state;
        const {
            startCallsIndex,
            startTrafficIndex,
        } = this.props;

        return (
            <Dynamic
                startCallsIndex={startCallsIndex!}
                startTrafficIndex={startTrafficIndex!}
                currentPack={currentPack}
                switcher={switcher}
                onChangeCalls={this.handleChangeCalls}
                onChangeTraffic={this.handleChangeTraffic}
            />
        );
    }

    renderTitle() {
        const { title, link } = this.props;

        return (
            <h2 className={cn('title')}>
                <TextLink
                    className={cn('title-link')}
                    href={link}
                    underlineStyle="none"
                    color="black"
                    target="_blank"
                    onClick={this.handleClickMore}
                >
                    {title}
                </TextLink>
            </h2>
        );
    }

    renderLink() {
        const { link = '', showMoreLink, moreLinkText } = this.props;

        if (!showMoreLink || !moreLinkText) {
            return null;
        }
        const { currentPack: { shopTag = '' } } = this.state;
        const linkWithHash = this.formHashLink(link, shopTag);

        return (
            <div className={cn('link-wrapper')}>
                <TextLink
                    className={cn('detail-link')}
                    href={linkWithHash}
                    target="_blank"
                    onClick={this.handleClickMore}
                >
                    {moreLinkText}
                </TextLink>
            </div>
        );
    }

    render() {
        const {
            servicePacks,
            cashback,
            firstParams,
            className,
            buyButtonText,
            connectButtonText,
            topBadgeTitle,
            secondParamsHead,
            showConnectButton,
            showBuyButton,
            buttonPassiveColor,
            connectLink,
            payment: {
                title: priceTitle,
                unitExtra: priceUnitExtra,
                unitValue: priceUnitValue,
            },
        } = this.props;
        const { price, discount, options, buyLink } = this.state;
        const isServicePacks = !!servicePacks!.length;
        const buyButton = {
            buyLink,
            buyButtonText,
            buttonPassiveColor,
            showBuyButton,
        };
        const connectButton = {
            connectLink,
            connectButtonText,
            showConnectButton,
        };

        return (
            <div className={cn('', { constructor: isServicePacks }, className)}>
                {isServicePacks && !!topBadgeTitle && <Hint title={topBadgeTitle} />}
                <div className={cn('content')}>
                    {this.renderTitle()}
                    {this.renderLink()}
                    <Cashback {...cashback} />
                    <Price
                        title={priceTitle}
                        value={price}
                        discount={discount}
                        unitExtra={priceUnitExtra}
                        unitValue={priceUnitValue}
                    />
                    <div className={cn('constructor')}>
                        {isServicePacks ? this.renderDynamic() : this.renderStatic()}
                        <Options options={firstParams.items} />
                    </div>
                    <Options
                        className={cn('second-params')}
                        options={options}
                        head={secondParamsHead}
                        onClickBubble={this.handleClickBubble}
                    />
                </div>
                <Buy
                    buyButton={buyButton}
                    connectButton={connectButton}
                    onClickBuy={this.handleClickBuy}
                    onClickConnect={this.handleClickConnect}
                />
            </div>
        );
    }
}

export default ProductTile;
