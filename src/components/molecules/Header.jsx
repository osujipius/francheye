import React from "react";
import Logo from "../../assets/icons/logo.svg";
import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";
import avatarImg from "../../assets/images/avatar.svg";

export default function Header() {
  return (
    <div className="h-36 w-full bg-[#F6F6F6] fixed z-50 text-blue-600 flex items-center px-20 text-sm justify-between border-b-2">
      <img src={Logo} className="h-24" />
      <div className="flex gap-6 items-center">
        <Button title={"Share Profile"} />
        <Avatar src={avatarImg} />
      </div>
    </div>
  );
}
