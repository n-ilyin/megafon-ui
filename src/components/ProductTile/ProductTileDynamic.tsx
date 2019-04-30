import * as React from 'react';
import { cnCreate } from '../../utils/cn';
import './style/ProductTileDynamic.less';
import ProductSwitcher from '../ProductSwitcher/ProductSwitcher';
import AnimationValue from './ProductTileValue';
import { IProductTileDynamic } from './types';
import { productTileDynamicProps } from './propTypes';

const cn = cnCreate('mfui-product-tile-dynamic');
class ProductTileDynamic extends React.Component<IProductTileDynamic> {
    static propTypes = productTileDynamicProps;

    render() {
        const {
            currentPack,
            switcher,
            startCallsIndex,
            startTrafficIndex,
            onChangeTraffic,
            onChangeCalls,
        } = this.props;

        return (
            <div className={cn('')}>
                <div className={cn('constructor-pack')}>
                    <AnimationValue
                        hAlign="center"
                        value={`${currentPack.calls!.value} ${currentPack.calls!.unit}`}
                    />
                </div>
                <ProductSwitcher
                    className={cn('constructor-range')}
                    startIndex={startCallsIndex}
                    theme="tariff-showcase"
                    items={switcher.calls.map((value: string) => ({ title: value, value }))}
                    onChange={onChangeCalls}
                />
                <ProductSwitcher
                    className={cn('constructor-range')}
                    startIndex={startTrafficIndex}
                    theme="tariff-showcase"
                    items={switcher.traffic.map((value: string) => ({ title: value, value }))}
                    onChange={onChangeTraffic}
                />
                <div className={cn('constructor-pack')}>
                    <AnimationValue
                        hAlign="center"
                        value={`${currentPack.traffic!.value} ${currentPack.traffic!.unit}`}
                    />
                </div>
            </div>
        );
    }
}

export default ProductTileDynamic;
