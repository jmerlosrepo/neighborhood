import Slider from "./components/common/InputFields/Slider/Slider";
import Table from "./components/common/Table/Table";

const App = () => {
  const headers = ["Header 1", "Header 2", "Header 3"];

  const tableData = [
    { data1: "Data 1", data2: "Data 2", data3: "Data 3" },
    { data1: "Data 4", data2: "Data 5", data3: "Data 6" },
  ];
  return (
    <div>
      <Slider />
    </div>
  );
};

export default App;
