import { VoidFunctionComponent } from "react";
import "./Menu.scss";
import { MenuItem } from "./MenuItem";
declare type MenuProps = {
    items: MenuItem[];
    pageColor?: string;
    indicatorColor?: string;
    backgroundColor?: string;
    onChange?: (index: number) => void;
    controlledId?: number;
};
export declare const INDICATOR_COLOR_DEFAULT = "#95a5ff";
export declare const BACKGROUND_COLOR_DEFAULT = "#fff";
export declare const LINK_COLOR_DEFAULT = "#222327";
export declare const getCssStyleOverrides: (itemCount: number, indicatorColor?: string, backgroundColor?: string, pageColor?: string) => {
    navigation: {
        backgroundColor: string;
        minWidth: number;
    };
    link: {
        color: string;
    };
    indicator: {
        backgroundColor: string;
        borderColor: string;
        boxShadow: string;
    };
    indicatorBefore: {
        boxShadow: string;
    };
    indicatorAfter: {
        boxShadow: string;
    };
};
declare const Menu: VoidFunctionComponent<MenuProps>;
export declare const demoMenuContent: MenuItem[];
export { Menu };
