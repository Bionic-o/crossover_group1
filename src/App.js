import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Main";
import MePage from "./MePage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MePage />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;