import React from "react";
import Banner from "./Banner";
import verified from "../../assets/icons/verified.svg";
import locationImg from "../../assets/icons/location.svg";
import Button from "../atoms/Button";
import ConnectedAccounts from "./ConnectedAccounts";
import PreviousWork from "./PreviousWork";
import starIcon from "../../assets/icons/star.svg";

export default function UserProfile({ previousWork, userData }) {
  return (
    <div className="px-2">
      <Banner />
      <div className="mt-20 mb-16 flex">
        <div className="w-[60%]">
          <h2 className="text-2xl font-semibold flex gap-1">
            {userData?.name}
            {userData?.isVerified ? <img src={verified} /> : ""}
          </h2>
          <div className="flex gap-2">
            <p className="text-gray-600 text-[15px]">
              {`@${userData?.username
                .charAt(0)
                .toLowerCase()}${userData?.username.slice(1)}/francheye.com`}
            </p>
            <img src={starIcon} alt="star" />
            <span className="text-[15px]">
              5.0 <span className="text-gray-600">(21st)</span>
            </span>
          </div>
          <div className="flex gap-1 my-2">
            {userData?.industries.map((industry, index) => (
              <p key={index} className="text-sm text-gray-600 text-[15px]">
                {" "}
                {"#" + industry}{" "}
              </p>
            ))}
          </div>
          <p className="flex gap-2 text-gray-600 text-sm">
            <img src={locationImg} />
            {userData?.country}
          </p>
          <div className="mt-5">
            <h4 className="font-bold">My Bio</h4>
            <p>{userData?.bio}</p>
          </div>
        </div>
        <div className="w-[40%] flex flex-col items-end">
          <Button
            title={"Follow"}
            className="w-[102px] h-9 text-sm !bg-[#0014BC]"
          />{" "}
          <h4 className="font-bold mt-5">Languages</h4>
          <div className="flex gap-2">
            {userData?.languages.map((language, index) => (
              <p key={index} className="text-gray-600 text-[15px]">
                {language + ","}
              </p>
            ))}
          </div>
          <div className="mt-5">
            <h4 className="font-bold">Content Type</h4>
            <p className="text-gray-600 text-[15px]">{userData?.contentType}</p>
          </div>
          <div className="mt-5">
            <h4 className="font-bold">Brands I’ve worked with</h4>
            <p className="text-gray-600 text-[15px] text-right">N/A</p>
          </div>
        </div>
      </div>
      <ConnectedAccounts data={userData?.accounts} />
      <PreviousWork previousWork={previousWork} />
    </div>
  );
}
