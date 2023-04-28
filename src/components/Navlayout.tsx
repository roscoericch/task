import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { BsPostcard } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";

const items: MenuProps["items"] = [
  {
    label: "Feed",
    key: "feeds",
    icon: <BsPostcard className="m-0 text-[1rem] p-0" />,
  },
  {
    label: "Home",
    key: "home",
    icon: <AiOutlineHome className="m-0 text-[1rem] p-0" />,
    disabled: true,
  },
  {
    label: "Group",
    key: "group",
    icon: <HiOutlineUserGroup className="m-0 text-[1rem]" />,
    disabled: true,
  },
];

const NavLayout = () => {
  const [current, setCurrent] = useState("feeds");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="w-full mx-auto flex items-center justify-center"
    />
  );
};

export default NavLayout;
