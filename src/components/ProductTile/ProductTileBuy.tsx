import * as React from 'react';
import { cnCreate } from '../../utils/cn';
import './style/ProductTileBuy.less';
import Button from '../Button/Button';
import TextLink from '../TextLink/TextLink';
import { IProductTileBuy } from './types';
import { productTileBuyProps } from './propTypes';

const cn = cnCreate('mfui-product-tile-buy');
class ProductTileBuy extends React.Component<IProductTileBuy> {
    static propTypes = productTileBuyProps;

    render() {
        const {
            className,
            buyButton = {},
            connectButton = {},
            onClickBuy,
            onClickConnect,
        } = this.props;
        const {
            buyLink,
            buyButtonText,
            buttonPassiveColor,
            showBuyButton,
        } = buyButton;
        const {
            connectLink,
            connectButtonText,
            showConnectButton,
        } = connectButton;

        return (
            <div className={cn('', {}, className)}>
                {showBuyButton &&
                    <Button
                        className={cn('button', { 'single-button': !showConnectButton })}
                        passiveColor={buttonPassiveColor}
                        hoverColor="green"
                        sizeAll="medium"
                        href={buyLink}
                        onClick={onClickBuy}
                    >
                        {buyButtonText}
                    </Button>
                }
                {showConnectButton &&
                    <TextLink
                        className={cn('detail-link')}
                        href={connectLink}
                        target="_blank"
                        onClick={onClickConnect}
                    >
                        {connectButtonText}
                    </TextLink>
                }
            </div>
        );
    }
}

export default ProductTileBuy;
