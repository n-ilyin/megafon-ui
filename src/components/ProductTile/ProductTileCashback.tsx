import * as React from 'react';
import { cnCreate } from '../../utils/cn';
import './style/ProductTileCashback.less';
import { ICashback } from './types';
import { productTileCashbackProps } from './propTypes';

const cn = cnCreate('mfui-product-tile-cashback');
class ProductTileCashback extends React.Component<Partial<ICashback>> {
    static propTypes = productTileCashbackProps;

    render() {
        const { title, value, unit } = this.props;

        if (!title && !value && !unit) {
            return null;
        }

        return (
            <div className={cn('')}>
                <span className={cn('text')}>
                    {title} {value} {unit}
                </span>
            </div>
        );
    }
}

export default ProductTileCashback;
