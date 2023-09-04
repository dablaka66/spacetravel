import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Spacecrafts from "../pages/Spacecrafts/Spacecrafts";
import SpacecraftBuild from "../pages/SpacecraftBuild/SpacecraftBuild";
import Spacecraft from "../pages/Spacecraft/Spacecraft";
import Planets from "../pages/Planets/Planets";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/welcome" element={<Home />} />
      <Route path="/spacecrafts" element={<Spacecrafts />} />
      <Route path="/SpacecraftBuild" element={<SpacecraftBuild />} />
      <Route path="/Spacecraft" element={<Spacecraft />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}
