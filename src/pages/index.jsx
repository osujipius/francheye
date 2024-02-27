import axios from "axios";
import React, { useEffect, useState } from "react";
import userData from "../constants/user1.json";
import Button from "../components/atoms/Button";
import Guarantee from "../components/atoms/Guarantee";
import UserProfile from "../components/molecules/UserProfile";
import PackageList from "../components/molecules/PackageList";

export default function HomePage() {
  const [previousWork, setPreviousWork] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos",
          {
            params: {
              _limit: 9, // Limit the response to 9 items
            },
          }
        );
        setPreviousWork(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (previousWork.length === 0) {
      fetchData();
    }
  }, [previousWork]);

  return (
    <div className="px-20">
      <div className="h-screen pt-16 flex gap-5">
        <div className="flex-1">
          <UserProfile userData={userData} previousWork={previousWork} />
        </div>
        <div className="flex-1 mt-2">
          <PackageList packages={userData?.packages} />
        </div>
      </div>{" "}
      <div className="w-[41%] float-right flex flex-col items-center gap-8">
        <Button
          title={`Contact ${userData?.name}`}
          className="w-[505px] !bg-[#0014BC]"
        />
        <Guarantee />
      </div>
    </div>
  );
}
