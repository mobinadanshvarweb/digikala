import axios from "axios";

export async function getCategory() {
  const response = await axios.get(
    "https://api.one-api.ir/digikala/v1/categories/",
    {
      headers: {
        Accept: "application/json",
        "one-api-token": "541702:655cc395bb446",
      },
    }
  );
  return response.data;
}

export async function getCategoryById(id?: string) {
  const response = await axios.get(
    `https://api.one-api.ir/digikala/v1/category/?id=${id}&page=1/`,
    {
      headers: {
        Accept: "application/json",
        "one-api-token": "541702:655cc395bb446",
      },
    }
  );
  return response.data;
}
