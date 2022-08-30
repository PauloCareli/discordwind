import { BsGearFill } from 'react-icons/bs';
import { FaDiscord, FaPlaystation, FaSnapchat, FaSteam, FaAndroid, FaApple, FaTwitch, FaBath } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">

      <SideBarIcon icon={<FaDiscord size="28" />} />
      <Divider />
      <SideBarIcon text="New exclusive available on pc!!" icon={<FaPlaystation size="32" />} />
      <SideBarIcon text="1 second pictures only" icon={<FaSnapchat size="20" />} />
      <SideBarIcon text="New Games available" icon={<FaSteam size="20" />} />
      <SideBarIcon text="Android custom roms" icon={<FaAndroid size="20" />} />
      <SideBarIcon text="New IPhone" icon={<FaApple size="20" />} />
      <SideBarIcon text="Wanna watch some games?" icon={<FaTwitch size="20" />} />
      <SideBarIcon text="Let's take a shower!" icon={<FaBath size="20" />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip:' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
