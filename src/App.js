import React from "react";
import UsersManagementModule from "./modules/users-management/UsersManagementModule";
import CheckersModule from "./modules/checkers/CheckersModule";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      {/* <UsersManagementModule /> */}
      <CheckersModule />
    </div>
  );
};

export default App;
