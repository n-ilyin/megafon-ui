import * as React from 'react';
import { cnCreate } from '../../utils/cn';
import './style/ProductTilePrice.less';
import AnimationValue from './ProductTileValue';
import { IPayment } from './types';
import { productTilePriceProps } from './propTypes';

const cn = cnCreate('mfui-product-tile-price');
class ProductTilePrice extends React.Component<IPayment> {
    static propTypes = productTilePriceProps;

    render() {
        const { title, value, unitExtra, unitValue, discount } = this.props;
        const valueElem = <AnimationValue value={(discount || value) + ` ${unitValue}`} />;
        const unitElem = <span className={cn('payment-period')}>{unitExtra}</span>;

        return (
            <div className={cn('', { discount: !!discount })}>
                <div className={cn('discount-condition')}>{title}</div>
                <span className={cn('old-price')}>
                    <span className={cn('old-price-value')}>
                        {discount ? `${value} ${unitValue}` : ' '}
                    </span>
                </span>
                <span className={cn('actual-price')}>
                    {valueElem} {unitElem}
                </span>
            </div>
        );
    }
}

export default ProductTilePrice;
