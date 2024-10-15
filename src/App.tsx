import { useEffect, useState } from "react";
import { getCategory } from "./api/getCategory";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getCategory();

      setData(newData);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap w-full gap-4">
      {data?.map((item) => {
        return <div className="border p-3 text-red-600">{item}</div>;
      })}
    </div>
  );
}

export default App;
