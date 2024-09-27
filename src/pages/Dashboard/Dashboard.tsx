import { useState } from "react";
import { userType } from "../../enums";

import Navbar from "../../components/Navbar/Navbar";
import NavbarButton from "../../components/common/Buttons/NavbarButton/NavbarButton";

import { User } from "../../types";

const Dashboard = () => {
  const [user, setUser] = useState<User>({
    username: "jmerlosg",
    type: userType.neighbor,
  });

  return (
    <div>
      <Navbar>
        <NavbarButton to="/dashboard" text="Dashboard" />
        <NavbarButton to="/complex" text="Complex" />
        <NavbarButton to="/unit" text="Unit" />
        {user.type === userType.manager && (
          <NavbarButton text="Expenses" to="/expenses" />
        )}
      </Navbar>
    </div>
  );
};

export default Dashboard;
