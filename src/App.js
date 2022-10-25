import "./App.css";
import React from "react";
// import { useState, useEffect } from "react";
// import api from "./components/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Error from "./pages/Error";
import Cocktails from "./pages/Cocktails";
import CocktailList from "./pages/CocktailList";

// import ProtectedRoute from "./pages/ProtectedRoute.js";
import NavBar from './components/NavBar'

function App() {
  // const [user, setUser] = useState();

  return (
    <Router>
      <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktails" element={<CocktailList />} />
          <Route path="/cocktails/:id" element={<Cocktails />} />
          {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        /> */}
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;
