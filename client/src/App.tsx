import "./App.css";

import SideBar from "./layouts/SideBar/SideBar";
import MainContent from "./layouts/MainContent/MainContent";

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
