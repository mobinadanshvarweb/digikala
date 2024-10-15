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
// export async function getCategory() {
//   const url = "https://api.one-api.ir/digikala/v1/categories/";
//   try {
//     const response = await fetch(`${url}`, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "one-api-token": "541702:655cc395bb446",
//       },
//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log("json is:", json);

//     return json;
//   } catch {
//     console.error("somthing went wrong");
//   }
// }
