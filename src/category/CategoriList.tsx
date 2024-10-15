import { useEffect, useState } from "react";
import { getCategory } from "../api/getCategory";
import CategoryCard from "./CategoryCard";

const CategoriList = () => {
  const [data, setData] = useState({ result: [] });
  console.log(data, "data");

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getCategory();

      setData(newData);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap w-full gap-2  justify-center">
      {data?.result?.map((item: { title: string; id: number }, i) => {
        return <CategoryCard key={item.id} i={i} title={item.title} />;
      })}
    </div>
  );
};

export default CategoriList;
