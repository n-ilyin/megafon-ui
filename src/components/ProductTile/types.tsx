export interface IProductTileState {
    switcher: ISwitcher;
    currentPack: Partial<IServicePack>;
    callsValue: number;
    trafficValue: number;
    price: string;
    discount: string;
    options: IOption[];
    buyLink: string;
}

export interface IProductTileValueState {
    prevValue: string;
    currentValue: string;
    isAnimating: boolean;
}

export interface IProductTile extends ILinkMore, IButtonBuy, ILinkConnect {
    /** Custom class name */
    className?: string;
    /** Tile title */
    title: string;
    /** Top badge title */
    topBadgeTitle?: string;
    /** Second params head */
    secondParamsHead?: string;
    /** Shop tag */
    shopTag?: string;
    /** Сalls switch start position */
    startCallsIndex?: number;
    /** Traffic switch start position */
    startTrafficIndex?: number;
    /** Payment - object
     * { value: string, unitExtra: string, unitValue: string, discount?: string }
     */
    payment: IPayment;
    /** Packs - array of object
     * [{ value: number, unit: string, title: string, isDelim: boolean }]
     */
    packs?: IPack[];
    /** Second params - array of object
     * [{ title: string, caption?: string, value?: string, unit?: string, footnote?: string, svgIcon?: JSX.Element }]
     */
    secondParams: IOption[];
    /** Cashback - object { title: string, value: number, unit: string } */
    cashback: ICashback;
    /** First params - object { items: [{ title: string, value: number, unit: string }] } */
    firstParams: IFirstParam;
    /** Service packs - array of object
     * [{ buyLink: string, shopTag: string,
     * calls: { value: number, unit: string },
     * traffic: { value: number, unit: string },
     * options: { title: string, value: number, unit: string },
     * payment: { value: string, discount?: string } }]
     */
    servicePacks?: Array<Partial<IServicePack>>;
    /** Info - object with custom properties - return with onClickConnect, onClickBuy, onClickMore, onClickBubble */
    info: {};
    /** Button connect handler - return object { ...info, callsValue, trafficValue } */
    onClickConnect?(data: {}, e: React.SyntheticEvent<EventTarget>): void;
    /** Button buy handler - return object
     * { ...info, callsValue, trafficValue, shopTag, price, unitValue, unitExtra }
     */
    onClickBuy?(data: {}, e: React.SyntheticEvent<EventTarget>): void;
    /** Link more handler - return object { ...info } */
    onClickMore?(data: {}, e: React.SyntheticEvent<EventTarget>): void;
    /** Bubble hint handler - return object { ...info } */
    onClickBubble?(data: {}): void;
}

export interface IProductTileBuy {
    /** Class name */
    className?: string;
    /** Buy button */
    buyButton?: Exclude<IButtonBuy, 'usePackBuyLink'>;
    /** Connect link */
    connectButton?: ILinkConnect;
    /** Connect hander */
    onClickConnect?(e: React.SyntheticEvent<EventTarget>): void;
    /** Buy hander */
    onClickBuy?(e: React.SyntheticEvent<EventTarget>): void;
}

export interface IProductTileDynamic {
    /** Current pack */
    currentPack: Partial<IServicePack>;
    /** Switcher */
    switcher: ISwitcher;
    /** Start calls index */
    startCallsIndex: number;
    /** Start traffic index */
    startTrafficIndex: number;
    /** Change calls */
    onChangeCalls(e: React.SyntheticEvent<EventTarget>, value: string): boolean;
    /** Change Traffic */
    onChangeTraffic(e: React.SyntheticEvent<EventTarget>, value: string): boolean;
}

export interface IProductTileHint {
    /** Title */
    title: string;
}

export interface IProductTileOptions {
    /** Has head */
    head?: string;
    /** Options */
    options: IOption[];
    /** Handle bubble */
    onClickBubble?(): void;
}

export interface IProductTileStatic {
    /** Packs */
    packs: Array<Partial<IPack>>;
}

export interface IProductTileValue {
    /** Value */
    value: string;
    /** hAlign */
    hAlign?: 'center';
}

export interface IOption {
    title: string;
    caption?: string;
    value?: string;
    unit?: string;
    footnote?: string;
    svgIcon?: JSX.Element;
}

export interface IPayment {
    title?: string;
    value: string;
    unitExtra: string;
    unitValue: string;
    discount?: string;
}

export interface IServicePack {
    buyLink: string;
    shopTag: string;
    calls: {
        value: number;
        unit: string;
    };
    traffic: {
        value: number;
        unit: string;
    };
    payment: Pick<IPayment, 'value' | 'discount'>;
    options: IOption[];
}

export interface IPack {
    value: number;
    unit: string;
    title: string;
    isDelim: boolean;
}

export interface ICashback {
    title: string;
    value: number;
    unit: string;
}

export interface IFirstParam {
    items: IOption[];
}

export interface ISwitcher {
    calls: string[];
    traffic: string[];
}

export interface ILinkMore {
    /** Link more - href */
    link?: string;
    /** Link more - text */
    moreLinkText?: string;
    /** Link more - show/hide */
    showMoreLink?: boolean;
}

export interface IButtonBuy {
    /** Button buy - href */
    buyLink?: string;
    /** Button buy - text */
    buyButtonText?: string;
    /** Button buy - show/hide */
    showBuyButton?: boolean;
    /** Button buy - passive color */
    buttonPassiveColor?: 'green' | 'transparent-green';
    /** Button buy - use pack href */
    usePackBuyLink?: boolean;
}

export interface ILinkConnect {
    /** Link connect - href */
    connectLink?: string;
    /** Link connect - text */
    connectButtonText?: string;
    /** Link connect - show/hide */
    showConnectButton?: boolean;
}
