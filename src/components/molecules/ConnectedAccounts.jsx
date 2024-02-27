import React, { useState } from "react";
import arrowRight from "../../assets/icons/arrowRight.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import youtube from "../../assets/icons/youtube.svg";

export default function ConnectedAccounts({ data }) {
  const [selectedPlatform, setSelectedPlatform] = useState("tiktok");

  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
  };

  const filteredAccounts = data.filter(
    (account) => account.platform === selectedPlatform
  );
  return (
    <div>
      <div className="flex items-center gap-3 ">
        <h4 className="font-bold">Connected Accounts:</h4>
        <div>
          <select
            onChange={handlePlatformChange}
            id="accounts"
            name="accounts"
            className="mt-1 block w-full border-0 py-1.5 text-gray-900 bg-transparent cursor-pointer outline-none"
            defaultValue={"tiktok"}
          >
            {data &&
              [...new Set(data.map((platform) => platform.platform))].map(
                (platform, index) => (
                  <option key={index} value={platform}>
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </option>
                )
              )}
          </select>
        </div>
      </div>
      <div className="flex gap-5">
        {filteredAccounts.map((account, index) => (
          <div
            key={index}
            className="h-14 w-40 bg-white rounded-xl text-center"
          >
            <div className="flex items-center justify-between px-5">
              <img
                src={selectedPlatform === "tiktok" ? tiktok : youtube}
                alt="platform icon"
                className="h-4 w-4 mt-2"
              />
              <p className="text-xs mt-2">{account.username}</p>
              <img src={arrowRight} alt="arrow right" className="mt-2" />
            </div>

            <div className="flex gap-3 justify-center mt-1">
              <p className="text-[10px] flex flex-col">
                {account.views}{" "}
                <span className="text-[6px]">Total lifetime views</span>
              </p>
              <p className="text-[10px] flex flex-col">
                {account.likes}
                <span className="text-[6px] flex flex-col">Likes</span>
              </p>
              <p className="text-[10px] flex flex-col">
                {account.followers}
                <span className="text-[6px]">Followers</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
