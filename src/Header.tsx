const Header = () => {
  return (
    <header className="w-full h-[108px] border-b px-4">
      <div className="p-3 w-full flex items-center">
        <div className="w-[195px] h-[30px] ml-5">
          <img
            className="w-full inline-block"
            src="/full-horizontal.svg"
            width="195"
            height="30"
            alt="لوگوی دیجیکالا"
            title=""
          />
        </div>

        <div className="flex items-center bg-asset grow rounded px-0 lg:px-4 text-body-2">
          <div className="w-full rounded-full">
            <div className="flex items-center justify-between grow min-w-0 h-9">
              <div className="flex cursor-pointer">
                {/* <svg style={{"width: 24px", "height: 24px" }}>
                    <use xlink:href="#searchSearch"></use>
                  </svg> */}
              </div>
              <span className="grow px-2 lg:px-4">
                <div className="lg:text-body-2 text-button-1 flex items-center h-full text-body-2 text-neutral-500">
                  جستجو
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </header>
  );
};

export default Header;
