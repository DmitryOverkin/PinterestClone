import Header from "../../components/Header/Header";
import MasonryComponent from "../../components/MasonryComponent/MasonryComponent";

function MainContent() {
  return (
    <div className="ml-20 w-full p-6 p-0 pt-0">
      <Header />

      <div className="mt-4">
        <MasonryComponent />
      </div>
    </div>
  );
}

export default MainContent;
