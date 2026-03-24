import MainContent from "../../layouts/MainContent/MainContent";
import SideBar from "../../layouts/SideBar/SideBar";

const Home = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainContent />
    </div>
  );
};

export default Home;
