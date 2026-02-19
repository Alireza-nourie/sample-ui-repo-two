
import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Layout from "./components/Layout";
import LockedPage from "./components/LockedPage";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Networkconfiguration from "./pages/Networkconfiguration";
import Vehicles from "./pages/Vehicles";
import Simulation from "./pages/Simulation";

function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter basename="/sample-ui-repo-two">
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/network-configuration" element={<Networkconfiguration />} />
            <Route path="/network-configuration/vehicles" element={<Vehicles />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/network-configuration/nodes" element={<LockedPage />} />
            <Route path="/network-configuration/nodes/mines" element={<LockedPage />} />
            <Route path="/network-configuration/nodes/mills" element={<LockedPage />} />
            <Route path="/network-configuration/nodes/transloads" element={<LockedPage />} />
            <Route path="/network-configuration/vehicles/locomotives" element={<LockedPage />} />
            <Route path="/network-configuration/vehicles/trucks" element={<LockedPage />} />
            <Route path="/network-configuration/vehicles/railcars" element={<LockedPage />} />
            <Route path="/network-configuration/routes" element={<LockedPage />} />
            <Route path="/simulation/planning-mode" element={<LockedPage />} />
            <Route path="/simulation/production-mode" element={<LockedPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HeroUIProvider>
  );
}

export default App;
