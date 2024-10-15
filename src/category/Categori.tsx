import CategoriList from "./CategoriList";

const Categori = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 p-3">
      <h2 className="text-xl mb-8">خرید بر اساس دسته بندی</h2>
      <div className="w-full">
        <CategoriList />
      </div>
    </div>
  );
};

export default Categori;
