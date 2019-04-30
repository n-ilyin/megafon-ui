import * as React from 'react';
import { cnCreate } from '../../utils/cn';
import './style/ProductTileStatic.less';
import { IPack } from './types';
import { IProductTileStatic } from './types';
import { productTileStaticProps } from './propTypes';

const cn = cnCreate('mfui-product-tile-static');
class ProductTileStatic extends React.Component<IProductTileStatic> {
    static propTypes = productTileStaticProps;

    render() {
        const { packs } = this.props;

        return (
            <div className={cn('')}>
                {packs.map((item: IPack) =>
                    <div className={cn('constructor-pack')} key={item.title! + item.value! + item.unit!}>
                        {item.isDelim ? item.title : `${item.value} ${item.unit}`}
                    </div>
                )}
            </div>
        );
    }
}

export default ProductTileStatic;
