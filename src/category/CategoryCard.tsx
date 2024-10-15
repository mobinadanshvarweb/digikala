const CategoryCard = ({ title, i }: { title: string; i: number }) => {
  return (
    <>
      <div className="md:w-2/12  w-full my-1 ">
        <span
          data-cro-id="hp-categories-icons"
          className="h-40 flex-1 max-w-[143px]"
        >
          <a
            className="flex flex-col items-center user-select-none w-full lg:p-0 lg:mx-0"
            href="/landing/medical-health-equipment/"
          >
            <div className="flex items-center justify-center">
              <img
                className="w-20 h-20 rounded-full object-cover border flex justify-center items-center"
                src={`/${i + 1}.png`}
                alt="pic"
              />
            </div>
            <p className="text-sm text-center text-neutral-900 mt-2 w-full ">
              {title}{" "}
            </p>
          </a>
        </span>
      </div>
    </>
  );
};

export default CategoryCard;
