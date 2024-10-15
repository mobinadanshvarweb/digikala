import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCategoryById } from "../api/getCategory";

const CategoryDetail = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["category-detail"],
    queryFn: async () => await getCategoryById(id),
  });
  console.log(data, "newdata111");

  return <div>CategoryDetail</div>;
};

export default CategoryDetail;
