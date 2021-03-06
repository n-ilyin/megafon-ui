import * as React from 'react';
import PropTypes from 'prop-types';
import cnCreate from 'utils/cnCreate';
import './Button.less';
import Spinner from 'docIcons/spinner.svg';
import Arrow from 'icons/System/32/Arrow_right_32.svg';
import detectTouch from 'utils/detectTouch';

export interface IButtonProps {
    /* Custom root class name */
    className?: string;
    /** Custom classes for button and button content */
    classes?: {
        /** Button class */
        root?: string;
        /** Inner content class */
        content?: string;
    };
    /** Theme */
    theme?: 'green' | 'purple' | 'white' | 'black';
    /** Type */
    type?: 'primary' | 'outline';
    /** Link */
    href?: string;
    /** Target - property of <a> tag */
    target?: '_self' | '_blank' | '_parent' | '_top';
    /** Form action */
    actionType?: 'button' | 'reset' | 'submit';
    /** Size for all devices */
    sizeAll?: 'small' | 'medium' | 'large';
    /** Size for wide devices 1280+ */
    sizeWide?: 'small' | 'medium' | 'large';
    /** Size for desktop 1020+ */
    sizeDesktop?: 'small' | 'medium' | 'large';
    /** Size for tablet 730-1020 */
    sizeTablet?: 'small' | 'medium' | 'large';
    /** Size for mobile 320-730 */
    sizeMobile?: 'small' | 'medium' | 'large';
    /** Display full width button */
    fullWidth?: boolean;
    /** Show spinner */
    showSpinner?: boolean;
    /** Show button with arrow */
    showArrow?: boolean;
    /** Icon to output with a text */
    iconLeft?: JSX.Element;
    /** Disabled */
    disabled?: boolean;
    /** Click event handler */
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const cn = cnCreate('mfui-beta-button');
const Button: React.FC<IButtonProps> = props => {
    const {
        classes: {
            root: rootClassName,
            content: contentClassName,
        } = {},
        className = '',
        theme = 'green',
        type = 'primary',
        href,
        target,
        actionType = 'button',
        sizeAll = 'medium',
        sizeWide,
        sizeDesktop,
        sizeTablet,
        sizeMobile,
        fullWidth = false,
        showSpinner = false,
        showArrow = false,
        iconLeft,
        disabled,
        children,
        onClick,
    } = props;

    const isTouch: boolean = React.useMemo(() => detectTouch(), []);
    const ElementType = href ? 'a' : 'button';

    const handleClick = React.useCallback((e: React.SyntheticEvent<EventTarget>): void => {
        if (disabled) {
            e.preventDefault();

            return;
        }

        onClick && onClick(e);
    }, [disabled, onClick]);

    const currentTheme: string = React.useMemo(() => (
        (type === 'primary') && (theme === 'black') ? 'green' : theme
    ), [theme]);

    const renderChildren: JSX.Element = React.useMemo(() => (
        <div className={cn('content', contentClassName)}>
            {iconLeft && <div className={cn('icon')}>{iconLeft}</div>}
            {children}
            {!iconLeft && showArrow && <Arrow className={cn('icon-arrow')} />}
        </div>
    ), [contentClassName, showArrow, children]);

    const renderSpinner: JSX.Element = React.useMemo(() => (
        <div className={cn('spinner')}>
            <Spinner />
        </div>
    ), []);

    return (
        <ElementType
            className={cn({
                type,
                theme: currentTheme,
                disabled,
                'size-all': sizeAll,
                'size-wide': sizeWide,
                'size-desktop': sizeDesktop,
                'size-tablet': sizeTablet,
                'size-mobile': sizeMobile,
                'full-width': fullWidth,
                loading: showSpinner,
                'no-touch': !isTouch,
            }, [className, rootClassName])}
            href={href}
            target={href ? target : undefined}
            type={href ? undefined : actionType}
            onClick={handleClick}
            disabled={!href && disabled}
        >
            <div className={cn('inner')}>
                {!showSpinner && children && renderChildren}
                {showSpinner && renderSpinner}
            </div>
        </ElementType>
    );
};

Button.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
        content: PropTypes.string,
    }),
    theme: PropTypes.oneOf(['green', 'purple', 'white', 'black']),
    type: PropTypes.oneOf(['primary', 'outline']),
    href: PropTypes.string,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
    actionType: PropTypes.oneOf(['button', 'reset', 'submit']),
    sizeAll: PropTypes.oneOf(['small', 'medium', 'large']),
    sizeWide: PropTypes.oneOf(['small', 'medium', 'large']),
    sizeDesktop: PropTypes.oneOf(['small', 'medium', 'large']),
    sizeTablet: PropTypes.oneOf(['small', 'medium', 'large']),
    sizeMobile: PropTypes.oneOf(['small', 'medium', 'large']),
    fullWidth: PropTypes.bool,
    showSpinner: PropTypes.bool,
    showArrow: PropTypes.bool,
    iconLeft: PropTypes.element,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};
export default Button;
