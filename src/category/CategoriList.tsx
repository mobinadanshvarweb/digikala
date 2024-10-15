import { getCategory } from "../api/getCategory";
import CategoryCard from "./CategoryCard";
import { useQuery } from "@tanstack/react-query";

const CategoriList = () => {
  const { data } = useQuery({
    queryKey: ["category-list"],
    queryFn: async () => await getCategory(),
  });

  return (
    <div className="flex flex-wrap w-full gap-2  justify-center">
      {data?.result?.map((item: { title: string; id: number }, i: number) => {
        return (
          <CategoryCard key={item.id} i={i} title={item.title} id={item.id} />
        );
      })}
    </div>
  );
};

export default CategoriList;
