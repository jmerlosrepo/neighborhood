import { useState } from "react";
import { userType } from "../../enums";

import Navbar from "../../components/Navbar/Navbar";
import NavbarButton from "../../components/common/Buttons/NavbarButton/NavbarButton";

import { User } from "../../types";
import LatestNews from "../../components/LatestNews/LatestNews";

const Dashboard = () => {
  const [user, setUser] = useState<User>({
    username: "jmerlosg",
    type: userType.neighbor,
  });

  const news = [
    { id: "", title: "", image: "", description: "" },
    { id: "", title: "", image: "", description: "" },
    { id: "", title: "", image: "", description: "" },
  ];

  return (
    <div>
      <LatestNews news={news} />
    </div>
  );
};

export default Dashboard;
