import "./App.css";

import SideBar from "./layouts/SideBar/SideBar";
import MainContent from "./layouts/MainContent/MainContent";

function App() {
  return (
    <>
      <div className="grid grid-cols-[1fr_24fr]">
        <SideBar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
