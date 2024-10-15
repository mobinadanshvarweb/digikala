import Blog from "./Blog";
import Categori from "./category/Categori";
import Slider from "./component/Slider";

function App() {
  return (
    <div className="flex flex-col">
      <Slider />
      <Categori />
      <Blog />
    </div>
  );
}

export default App;
