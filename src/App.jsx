// import { useState } from 'react'
import "./App.css";
import Home from "./component/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchListPage from "./component/secondpage/secondpage";
import MyBookings from "./component/mybookings/mybookings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchListPage />} />
          <Route path="/my-bookings" element={<MyBookings/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
