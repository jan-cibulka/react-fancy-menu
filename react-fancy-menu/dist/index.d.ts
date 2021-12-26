import { VoidFunctionComponent } from 'react';

declare const FancyButton: VoidFunctionComponent;

declare type MenuItem = {
    name: string;
    icon: JSX.Element;
};

declare type MenuProps = {
    items: MenuItem[];
    pageColor?: string;
    indicatorColor?: string;
    backgroundColor?: string;
    onChange?: (index: number) => void;
    controlledId?: number;
};
declare const Menu: VoidFunctionComponent<MenuProps>;

export { FancyButton, Menu, MenuItem };
