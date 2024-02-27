import React, { useState } from "react";

export default function PackageList({ packages }) {
  const [selectedTab, setSelectedTab] = useState("ugc");
  const [selectedContentType, setSelectedContentType] = useState("video");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleContentTypeClick = (contentType) => {
    setSelectedContentType(contentType);
  };

  const filteredPackages = packages.filter(
    (pkg) =>
      pkg.packageType === selectedTab && pkg.contentType === selectedContentType
  );

  return (
    <div>
      <div className="h-14 flex">
        <button
          onClick={() => handleTabClick("ugc")}
          className={`flex-1 rounded-s-xl ${
            selectedTab === "ugc"
              ? "bg-[#0014BC] text-white"
              : "text-black bg-white"
          }`}
        >
          UGC
        </button>
        <button
          onClick={() => handleTabClick("affiliate")}
          className={`flex-1 rounded-e-xl ${
            selectedTab === "affiliate"
              ? "bg-[#0014BC] text-white"
              : "text-black bg-white"
          }`}
        >
          Affiliate
        </button>
      </div>
      <div className="mt-5 flex gap-5 px-4">
        <button
          onClick={() => handleContentTypeClick("video")}
          className={`text-lg  ${
            selectedContentType === "video"
              ? "text-black border-b-[3px] border-[#0014BC]"
              : "text-gray-600"
          }`}
        >
          Video
        </button>
        <button
          onClick={() => handleContentTypeClick("photo")}
          className={`text-lg  ${
            selectedContentType === "photo"
              ? "text-black border-b-[3px] border-[#0014BC]"
              : "text-gray-600"
          }`}
        >
          Photo
        </button>
      </div>
      <div className="px-2">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg, index) => (
            <div key={index} className="mt-2">
              <div className="flex items-center justify-between pt-5">
                <h2 className="font-semibold text-lg">{pkg.title}</h2>
                <p className="text-lg">USD {pkg.price}</p>
              </div>

              <ul className="ml-6 package-list">
                {pkg.services.map((service, index) => (
                  <li key={index} className="my-3">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="mt-2">
            <p className="m-3 text-2xl">Not available</p>
          </div>
        )}
      </div>
    </div>
  );
}
