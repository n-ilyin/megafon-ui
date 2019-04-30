import * as React from 'react';
import { cnCreate } from '../../utils/cn';
import './style/ProductTileValue.less';
import { IProductTileValue, IProductTileValueState } from './types';
import { productTileValueProps } from './propTypes';

const cn = cnCreate('mfui-product-tile-value');
class ProductTileValue extends React.PureComponent<IProductTileValue, IProductTileValueState> {
    static propTypes = productTileValueProps;

    constructor(props: IProductTileValue) {
        super(props);

        this.state = {
            prevValue: '',
            currentValue: props.value,
            isAnimating: false,
        };
    }

    static getDerivedStateFromProps(props: IProductTileValue, state: IProductTileValueState) {
        const isChangedValue = props.value !== state.currentValue;

        return {
            prevValue: isChangedValue ? state.currentValue : state.prevValue,
            currentValue: props.value,
            isAnimating: isChangedValue || state.isAnimating,
        };
    }

    componentDidUpdate() {
        const ANIMATION_DELAY = 50;

        if (typeof window === 'undefined') {
            return;
        }

        window.setTimeout(() => {
            this.setState({ isAnimating: false });
        }, ANIMATION_DELAY);
    }

    renderPrevPrice() {
        const { prevValue, isAnimating } = this.state;

        return (
            <span className={cn('prev', { hide: !isAnimating })}>
                {prevValue}
            </span>
        );
    }

    renderCurrentPrice() {
        const { currentValue, isAnimating } = this.state;

        return (
            <span className={cn('current', { hide: isAnimating })}>
                {currentValue}
            </span>
        );
    }

    render() {
        const { hAlign } = this.props;

        return (
            <span className={cn('', {'h-align': hAlign })}>
                {this.renderPrevPrice()}
                {this.renderCurrentPrice()}
            </span>
        );
    }
}

export default ProductTileValue;
