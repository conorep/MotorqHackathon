import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import Error from "./components/error/index";
import Register from "./components/register";
import Landing from "./components/landing";
import Admin from "./components/admin";
import EventsMap from "./components/maps";
import UserEvents from "./components/pubUser";

function App() {
  return (
      <Routes>
          {/*this admin page should go away*/}
          <Route path={"/admin"} element={<Admin />}/>

          <Route path={"/"} element={<Landing />}/>
          <Route path={"/register"} element={<Register />}/>
          {/*THIS NEEDS TO HAVE /:userId*/}
          <Route path={"/events/userId"} element={<UserEvents />}/>
          <Route path={"/map"} element={<EventsMap />}/>
          <Route path="*" element={<Error />} />
      </Routes>
  );
}

export default App;
