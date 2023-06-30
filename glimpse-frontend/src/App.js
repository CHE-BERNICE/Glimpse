import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  exact path="/" element={<Homepage />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
