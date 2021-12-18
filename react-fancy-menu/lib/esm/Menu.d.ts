import { VoidFunctionComponent } from "react";
import "./Menu.scss";
export interface MenuItem {
    name: string;
    icon: JSX.Element;
}
interface MenuProps {
    items: MenuItem[];
    pageColor?: string;
    indicatorColor?: string;
    backgroundColor?: string;
    onChange?: (index: number) => void;
    controlledId?: number;
}
declare const Menu: VoidFunctionComponent<MenuProps>;
export default Menu;
