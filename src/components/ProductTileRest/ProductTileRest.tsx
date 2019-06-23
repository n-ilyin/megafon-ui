import * as React from 'react';
import * as PropTypes from 'prop-types';
import { cnCreate } from '../../utils/cn';
import './ProductTileRest.less';
import Header from '../Header/Header';
import TextLink from '../TextLink/TextLink';
import Button from '../Button/Button';
import DropdownSocialList from '../DropdownSocialList/DropdownSocialList';

interface IProductTileRestProps {
    /** Tile title */
    title: string;
    /** Tile description */
    description?: string;
    /** Shop tag */
    shopTag?: string;
    /** Link more - href */
    link?: string;
    /** Link more - text */
    moreLinkText?: string;
    /** Link more - show/hide */
    showMoreLink?: boolean;
    /** Button buy - href */
    buyLink?: string;
    /** Button buy - text */
    buyButtonText?: string;
    /** Button buy - show/hide */
    showBuyButton?: boolean;
    /** Button buy - passive color */
    buttonPassiveColor?: 'green' | 'transparent-green';
    /** Link connect - href */
    connectLink?: string;
    /** Link connect - text */
    connectButtonText?: string;
    /** Link connect - show/hide */
    showConnectButton?: boolean;
    /** Payment */
    payment: {
        title: string;
        value: string;
        unitExtra: string;
        unitValue: string;
        discount?: string;
    };
    /** Packs */
    packs: Array<{
        value: number;
        unit: string;
        title: string;
        isDelim: boolean;
    }>;
    /** First params */
    firstParams: {
        title?: string;
        caption: string;
        items: Array<{
            title: string;
            svgIcon: JSX.Element;
        }>;
    };
    /** Second params */
    secondParams: Array<{
        title: string;
        value?: string;
        unit?: string;
    }>;
    /** Info - object with custom properties
     * - return with onClickConnect, onClickBuy, onClickMore, onClickBubble
     */
    info: {};
    /** Button connect handler - return object { ...info, callsValue, trafficValue } */
    onClickConnect?(data: {}, e: React.SyntheticEvent<EventTarget>): void;
    /** Button buy handler - return object
     * { ...info, shopTag }
     */
    onClickBuy?(data: {}, e: React.SyntheticEvent<EventTarget>): void;
    /** Link more handler - return object
     * { ...info, shopTag }
     */
    onClickMore?(data: {}, e: React.SyntheticEvent<EventTarget>): void;
}

const cn = cnCreate('mfui-product-tile-rest');
class ProductTileRest extends React.Component<IProductTileRestProps> {
    static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        shopTag: PropTypes.string,
        link: PropTypes.string,
        moreLinkText: PropTypes.string,
        showMoreLink: PropTypes.bool,
        buyLink: PropTypes.string,
        buyButtonText: PropTypes.string,
        showBuyButton: PropTypes.bool,
        connectLink: PropTypes.string,
        connectButtonText: PropTypes.string,
        showConnectButton: PropTypes.bool,
        buttonPassiveColor: Button.propTypes.passiveColor,
        payment: PropTypes.shape({
            title: PropTypes.string,
            value: PropTypes.string,
            unitExtra: PropTypes.string,
            unitValue: PropTypes.string,
            discount: PropTypes.string,
        }).isRequired,
        packs: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.number,
            unit: PropTypes.string,
            title: PropTypes.string,
            isDelim: PropTypes.bool,
        })).isRequired,
        firstParams: PropTypes.shape({
            title: PropTypes.string,
            caption: PropTypes.string,
            items: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string,
                svgIcon: PropTypes.element,
            })),
        }).isRequired,
        secondParams: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            value: PropTypes.string,
            unit: PropTypes.string,
        })).isRequired,
        info: PropTypes.object,
        onClickConnect: PropTypes.func,
        onClickBuy: PropTypes.func,
        onClickMore: PropTypes.func,
    };

    static defaultProps: Partial<IProductTileRestProps> = {
        moreLinkText: 'Подробнее',
        showMoreLink: true,
        buyButtonText: 'Купить',
        showBuyButton: true,
        buttonPassiveColor: 'green',
        connectButtonText: 'Перейти на тариф',
        showConnectButton: true,
        shopTag: '',
    };

    handleClickConnect = (e: React.SyntheticEvent<EventTarget>) => {
        const { info, shopTag, onClickConnect } = this.props;

        onClickConnect && onClickConnect({ ...info, shopTag }, e);
    }

    handleClickBuy = (e: React.SyntheticEvent<EventTarget>) => {
        const {
            info,
            shopTag,
            onClickBuy,
            payment: {
                value,
                discount,
                unitValue,
                unitExtra,
            },
        } = this.props;
        const priceValue = discount || value;

        onClickBuy && onClickBuy({
            ...info,
            shopTag,
            price: priceValue,
            unitValue,
            unitExtra,
        }, e);
    }

    handleClickMore = (e: React.SyntheticEvent<EventTarget>) => {
        const { info, shopTag, onClickMore } = this.props;

        onClickMore && onClickMore({ ...info, shopTag }, e);
    }

    renderIcons() {
        const { firstParams: { title, caption, items } } = this.props;

        return (
            <div className={cn('messangers')}>
                {!!items.length &&
                    <div className={cn('messangers-list')}>
                        <DropdownSocialList
                            icons={items}
                            maxIconNumber={4}
                            className={cn('options-list')}
                        />
                    </div>
                }
                {title &&
                    <div className={cn('messangers-description')}>
                        {title}<br /> {caption}
                    </div>
                }
            </div>
        );
    }

    renderOptions() {
        const { secondParams } = this.props;

        if (!secondParams.length) {
            return null;
        }

        return (
            <div className={cn('options')}>
                {secondParams.map((param, index) => {
                    const { title, value, unit } = param;

                    return (
                        <div className={cn('option')} key={title + index}>
                            <div className={cn('option-title')}>{title}</div>
                            <div className={cn('option-description')}>{`${value} ${unit}`}</div>
                        </div>
                    );
                })}
            </div>
        );
    }

    renderShowcase() {
        const {
            payment: {
                title,
                value,
                unitExtra,
                unitValue,
                discount,
            },
            packs,
        } =  this.props;

        return (
            <React.Fragment>
                <div className={cn('price', { discount: !!discount })}>
                    <div className={cn('discount-condition')}>{title}</div>
                    <div className={cn('old-price-wrapper')}>
                        <div className={cn('old-price')}>{`${value} ${unitValue}`}</div>
                    </div>
                    <div className={cn('actual-price')}>{`${discount || value} ${unitValue} ${unitExtra}`}</div>
                </div>
                {packs.map((param, index) => {
                    const {
                        value: paramValue,
                        unit: paramUnit,
                        title: paramTitle,
                        isDelim,
                    } = param;

                    return (
                        <div
                            className={cn('pack')}
                            key={paramValue + paramUnit + index}
                        >
                            {isDelim ? paramTitle : `${paramValue} ${paramUnit}`}
                        </div>
                    );
                })}
            </React.Fragment>
        );
    }

    render() {
        const {
            title,
            description,
            link,
            showMoreLink,
            moreLinkText,
            connectLink,
            connectButtonText,
            showConnectButton,
            buyLink,
            showBuyButton,
            buyButtonText,
            buttonPassiveColor,
        } = this.props;

        return (
            <div className={cn('')}>
                <div className={cn('info')}>
                    <Header className={cn('header')} as="h3">{title}</Header>
                    {showMoreLink &&
                        <TextLink
                            className={cn('detail-link', { type: 'more' })}
                            href={link}
                            target="_blank"
                            onClick={this.handleClickMore}
                        >
                            {moreLinkText}
                        </TextLink>
                    }
                    {this.renderShowcase()}
                    {this.renderIcons()}
                    {this.renderOptions()}
                    {description &&
                        <div className={cn('description')}>{description}</div>
                    }
                </div>
                <div className={cn('buy')}>
                    {showBuyButton &&
                        <Button
                            className={cn('buy-button', { 'additional-margin': !showConnectButton })}
                            passiveColor={buttonPassiveColor}
                            hoverColor="green"
                            sizeAll="medium"
                            href={buyLink}
                            onClick={this.handleClickBuy}
                        >
                            {buyButtonText}
                        </Button>
                    }
                    {showConnectButton &&
                        <TextLink
                            className={cn('detail-link', { type: 'connect' })}
                            href={connectLink}
                            onClick={this.handleClickConnect}
                            target="_blank"
                        >
                            {connectButtonText}
                        </TextLink>
                    }
                </div>
            </div>
        );
    }
}

export default ProductTileRest;
