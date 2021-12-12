import "./App.css";
import Menu, { MenuItem } from "./menu/Menu";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoChatbubblesOutline,
  IoCameraOutline,
  IoSettingsOutline,
} from "react-icons/io5";

function App() {
  return (
    <div className='App'>
      <Menu menuData={menuData} />
    </div>
  );
}

const menuData: MenuItem[] = [
  {
    name: "Home",
    icon: <IoHomeOutline />,
  },
  {
    name: "Profile",
    icon: <IoPersonOutline />,
  },
  {
    name: "Message",
    icon: <IoChatbubblesOutline />,
  },
  {
    name: "Photos",
    icon: <IoCameraOutline />,
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline />,
  },
];
export default App;
