import React from "react";
import bannerImg from "../../assets/images/banner.svg";
import userImg from "../../assets/images/user.svg";
import Avatar from "../atoms/Avatar";

export default function Banner() {
  return (
    <div className="w-[774px] h-72 relative">
      <img src={bannerImg} className="w-full h-full" />
      <div className="absolute -bottom-16 left-12">
        <Avatar src={userImg} className="h-32 w-32" />
      </div>
    </div>
  );
}
