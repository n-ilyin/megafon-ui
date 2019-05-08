import * as React from 'react';
import { shallow, mount } from 'enzyme';
import ProductSwitcher from './ProductSwitcher';

const props = {
    items: [{
        value: 'value',
        title: 'title',
    }],
    startIndex: 0,
    className: 'sdfsdf',
};

const firstValue = props.items[0].value;

describe('<ProductSwitcher />', () => {
    it('renders ProductSwitcher', () => {
        const wrapper = shallow(
            <ProductSwitcher
                {...props}
                theme="tariff-showcase"
                onChange={jest.fn()} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('calls componentDidMount', () => {
        const movePointer = jest.spyOn(ProductSwitcher.prototype, 'movePointer');
        const addEventListener = jest.spyOn(window, 'addEventListener');
        const wrapper = mount<ProductSwitcher>(
            <ProductSwitcher
                {...props}
                onChange={jest.fn()}
            />
        );

        const instance = wrapper.instance();

        expect(addEventListener).toBeCalledWith('resize', instance.handleWindowSize, true);
        expect(movePointer).toBeCalledWith(firstValue);

        movePointer.mockRestore();
    });

    it('calls componentWillUnmount', () => {
        const removeEventListener = jest.spyOn(window, 'removeEventListener');
        const wrapper = mount<ProductSwitcher>(
            <ProductSwitcher
                {...props}
                onChange={jest.fn()}
            />
        );
        const instance = wrapper.instance();

        instance.componentWillUnmount();
        expect(removeEventListener).toBeCalledWith('resize', instance.handleWindowSize, true);
    });

    it('calls handleWindowSize', () => {
        jest.useFakeTimers();
        const wrapper = mount<ProductSwitcher>(
            <ProductSwitcher
                {...props}
                onChange={jest.fn()}
            />
        );
        const localWindow = window as any;
        const instance = wrapper.instance();
        const handleWindowSize = jest.spyOn(instance, 'handleWindowSize');
        const movePointer = jest.spyOn(instance, 'movePointer');

        window.addEventListener('resize', instance.handleWindowSize);
        window.dispatchEvent(new localWindow.Event('resize'));

        jest.runAllTimers();

        expect(handleWindowSize).toBeCalled();
        expect(movePointer).toBeCalledWith(firstValue);

        window.removeEventListener('resize', instance.handleWindowSize);
    });

    it('calls handleClickItem', () => {
        const onChange = jest.fn();
        const wrapper = mount<ProductSwitcher>(
            <ProductSwitcher
                {...props}
                onChange={onChange}
            />
        );
        const instance = wrapper.instance();
        const movePointer = jest.spyOn(instance, 'movePointer');

        wrapper.setState({ currentValue: '' });
        wrapper.find('.mfui-product-switcher__item').first().simulate('click');

        expect(wrapper.state('currentValue')).toEqual(firstValue);
        expect(movePointer).toBeCalledWith(firstValue);
    });

    it('calls handleClickItem when value not matches currentValue', () => {
        const onChange = jest.fn(() => false);
        const items = [
            {
                value: 'value1',
                title: 'title1',
            },
            {
                value: '',
                title: 'title2',
            },
        ];
        const wrapper = mount<ProductSwitcher>(
            <ProductSwitcher
                {...props}
                items={items}
                onChange={onChange}
            />
        );
        const instance = wrapper.instance();
        const movePointer = jest.spyOn(instance, 'movePointer');

        wrapper.find('.mfui-product-switcher__item').at(1).simulate('click', '');

        expect(onChange.mock.calls[0][1]).toEqual(items[1].value);
        expect(wrapper.state('currentValue')).not.toEqual(items[1].value);
        expect(movePointer).not.toBeCalled();
    });
});
