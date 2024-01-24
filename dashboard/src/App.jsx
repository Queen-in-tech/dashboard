import "./App.css";
import SideBar from "./components/sidebar";
import TopBar from "./components/topbar";
import Dashboard from "./components/dashboard";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="h-full bg-[#FAFAFA]">
      <div className="w-full flex">
        <div className="hidden lg:flex">
          <SideBar onchange={toggleDarkMode} checked={isDarkMode} />
        </div>
        <div className="w-screen">
          <TopBar />
          <Dashboard />
          <div className="flex lg:hidden">
            <SideBar onchange={toggleDarkMode} checked={isDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
