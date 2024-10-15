const Footer = () => {
  return (
    <div className="w-full flex flex-col border-t border-asset">
      <div className="px-5 flex flex-col p-3">
        <div className="flex justify-between">
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
          <button className="relative border border-neutral-200 rounded-medium flex justify-center items-center px-3 sm:px-4 py-1 rounded cursor-pointer">
            <div className="flex items-center justify-center relative grow">
              <span className="text-neutral-400 ml-2">بازگشت به بالا</span>
              <div className="flex">
                {/* <svg style="width: 24px; height: 24px; fill: var(--color-icon-low-emphasis);">
                  <use xlink:href="#expandLess"></use>
                </svg> */}
              </div>
            </div>
          </button>
        </div>
        <div className="mb-8 mt-4 md:mt-3 md:mb-0 flex items-center flex-wrap lg:flex-nowrap text-body-2 text-neutral-700">
          <p className="shrink-0" data-cro-id="footer-phonenumber">
            تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
          </p>
          <div className="px-5 text-neutral-400 hidden md:block">|</div>
          <p className="shrink-0">۰۲۱-۹۱۰۰۰۱۰۰</p>
          <div className="px-5 text-neutral-400 hidden md:block">|</div>
          <p className="w-full mt-1 md:mt-0">
            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
          </p>
        </div>
        <div className="flex my-8 items-center justify-between select-none hidden lg:flex text-xs">
          <a
            className="flex py-3 flex-col items-center justify-between text-center grow"
            data-cro-id="footer-features"
            href="/faq/question/79/"
          >
            <div>
              <img
                className="w-full inline-block"
                src="/express-delivery.svg"
                width="56"
                height="56"
                alt="اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس"
                title=""
              />
            </div>
            <p className="text-caption text-neutral-700">اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
          </a>
          <a
            className="flex py-3 flex-col items-center justify-between text-center grow"
            data-cro-id="footer-features"
            href="/faq/question/81/"
          >
            <div>
              <img
                className="w-full inline-block"
                src="/cash-on-delivery.svg"
                width="56"
                height="56"
                alt="امکان پرداخت در محل"
                title=""
              />
            </div>
            <p className="text-caption text-neutral-700">امکان پرداخت در محل</p>
          </a>
          <a
            className="flex py-3 flex-col items-center justify-between text-center grow"
            data-cro-id="footer-features"
            href="/page/contact-us/"
          >
            <div>
              <img
                className="w-full inline-block"
                src="/support.svg"
                width="56"
                height="56"
                alt="۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ"
                title=""
              />
            </div>
            <p className="text-caption text-neutral-700">
              ۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ
            </p>
          </a>
          <a
            className="flex py-3 flex-col items-center justify-between text-center grow"
            data-cro-id="footer-features"
            href="/faq/question/83/"
          >
            <div>
              <img
                className="w-full inline-block"
                src="/days-return.svg"
                width="56"
                height="56"
                alt="هفت روز ضمانت بازگشت کالا"
                title=""
              />
            </div>
            <p className="text-caption text-neutral-700">
              هفت روز ضمانت بازگشت کالا
            </p>
          </a>
          <a
            className="flex py-3 flex-col items-center justify-between text-center grow"
            data-cro-id="footer-features"
            href="/faq/question/82/"
          >
            <div>
              <img
                className="w-full inline-block"
                src="/original-products.svg"
                width="56"
                height="56"
                alt="ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ"
                title=""
              />
            </div>
            <p className="text-caption text-neutral-700 text-xs">
              ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ
            </p>
          </a>
        </div>
        <div className="flex flex-wrap w-full justify-between mb-8">
          <div className="block lg:grow w-6/12 lg:w-1/4">
            <p className="text-neutral-700 text-h5 mb-2 block">با دیجی‌کالا</p>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-with-digikala"
              href="https://about.digikala.com/newsroom/"
            >
              اتاق خبر دیجی‌کالا
            </a>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-with-digikala"
              href="/landings/seller-introduction/"
            >
              فروش در دیجی‌کالا
            </a>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-with-digikala"
              href="https://careers.digikala.com/"
            >
              فرصت‌های شغلی
            </a>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-with-digikala"
              href="https://digikalapublic.whistleblowernetwork.net/frontpage"
            >
              گزارش تخلف در دیجی‌کالا
            </a>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-with-digikala"
              href="/page/contact-us/"
            >
              تماس با دیجی‌کالا
            </a>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-with-digikala"
              href="https://about.digikala.com/"
            >
              درباره دیجی‌کالا
            </a>
          </div>
          <div className="block lg:grow w-6/12 lg:w-1/4">
            <p className="text-neutral-700 text-h5 mb-2 block">خدمات مشتریان</p>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-customer-service"
              href="/faq/"
            >
              پاسخ به پرسش‌های متداول
            </a>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-customer-service"
              href="/faq/question/83/"
            >
              رویه‌های بازگرداندن کالا
            </a>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-customer-service"
              href="/page/terms/"
            >
              شرایط استفاده
            </a>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-customer-service"
              href="/page/privacy/"
            >
              حریم خصوصی
            </a>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-customer-service"
              href="/page/bug-report/"
            >
              گزارش باگ
            </a>
          </div>
          <div className="block lg:grow w-6/12 lg:w-1/4 hidden md:block">
            <p className="text-neutral-700 text-h5 mb-2 block">
              راهنمای خرید از دیجی‌کالا
            </p>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-buying-guide"
              href="/faq/question/649/"
            >
              نحوه ثبت سفارش
            </a>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-buying-guide"
              href="/faq/question/79/"
            >
              رویه ارسال سفارش
            </a>
            <a
              className="text-body-1 text-neutral-500 mb-2 block"
              data-cro-id="footer-buying-guide"
              href="/faq/question/81/"
            >
              شیوه‌های پرداخت
            </a>
          </div>
          <div className="w-full lg:w-1/4 shrink-0">
            <div className="w-full flex lg:block lg:flex-row justify-between items-start mt-8 sm:mt-0">
              <h4 className="mb-3 text-h5 text-neutral-700">همراه ما باشید!</h4>
              <div className="flex items-center">
                <a
                  className="ml-6 lg:ml-8"
                  data-cro-id="footer-instagram"
                  href="https://www.instagram.com/digikalacom/"
                >
                  <div className="flex">
                    {/* <svg style="width: 40px; height: 40px; fill: var(--color-icon-low-emphasis);"><use xlink:href="#instagram"></use></svg> */}
                  </div>
                </a>
                <a
                  className="ml-6 lg:ml-8"
                  data-cro-id="footer-twitter"
                  href="https://twitter.com/digikalacom"
                >
                  <div className="flex">
                    {/* <svg style="width: 40px; height: 40px; fill: var(--color-icon-low-emphasis);"><use xlink:href="#twitter"></use></svg> */}
                  </div>
                </a>
                <a
                  className="ml-6 lg:ml-8"
                  data-cro-id="footer-linkedin"
                  href="https://www.linkedin.com/company/digikala/mycompany/"
                >
                  <div className="flex">
                    {/* <svg style="width: 40px; height: 40px; fill: var(--color-icon-low-emphasis);"><use xlink:href="#linkedin"></use></svg> */}
                  </div>
                </a>
                <a
                  className=""
                  data-cro-id="footer-aparat"
                  href="https://www.aparat.com/digikala/"
                >
                  <div className="flex">
                    {/* <svg style="width: 40px; height: 40px; fill: var(--color-icon-low-emphasis);"><use xlink:href="#aparat"></use></svg> */}
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col items-start mt-4 sm:mt-8">
              <h4 className="hidden md:block text-h5 text-neutral-700 mb-3">
                با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
              </h4>
              <div className="w-full flex items-center">
                <form className="w-full flex">
                  <label className="inline-block grow w-full">
                    <div className=" px-2 flex items-center bg-neutral-100 rounded-md">
                      <div className="grow">
                        <input
                          className="px-2 leading-8 border-none text-neutral-700 bg-transparent outline-none w-full"
                          type="email"
                          name="email"
                          placeholder="ایمیل شما"
                          value=""
                        />
                      </div>
                    </div>
                  </label>
                  <button
                    className="relative flex items-center leading-8 px-3 rounded-medium pointer-events-none rounded text-neutral-50 mr-2 bg-[#e0e0e2]"
                    type="submit"
                    data-cro-id="footer-email-submission"
                  >
                    <div className="flex items-center justify-center relative grow">
                      ثبت
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mb-7 lg:px-5 rounded text-neutral-000 select-none py-2 items-center justify-between bg-[#3c4b6d]">
          <div className="flex items-center text-white mb-4 lg:mb-0">
            <div className="shrink-0 w-[44px] h-[44px]">
              <picture>
                {/* <source
                  type="image/webp"
                  srcset="/statics/img/png/footerlogo2.webp"
                />

                <source
                  type="image/jpeg"
                  srcset="/statics/img/png/footerlogo2.png"
                /> */}
                <img
                  className="w-full inline-block"
                  src="/footerlogo2.png"
                  width="44"
                  height="44"
                  alt="دیجی‌کالا"
                  title=""
                />
              </picture>
            </div>
            <div className="text-h3 shrink-0 mr-4">
              {" "}
              دانلود اپلیکیشن دیجی‌کالا
            </div>
          </div>
          <div className="flex items-center justify-end grow">
            <div className="flex items-center justify-center lg:justify-end flex-wrap lg:grow ">
              <a
                className="h-[44px] m-2"
                data-cro-id="footer-bazar"
                target="_blank"
                title="دریافت از کافه‌بازار"
                href="https://trc.metrix.ir/k3of5r/"
              >
                <div className="h-[44px]">
                  <img
                    className="w-full inline-block"
                    src="/coffe-bazzar.svg"
                    height="44"
                    alt="دریافت از کافه‌بازار"
                    title=""
                  />
                </div>
              </a>
              <a
                className="BaseLayoutStaticFooter_BaseLayoutStaticFooter__appDownloadLink__VZlyq m-2"
                data-cro-id="footer-myket"
                target="_blank"
                title="دریافت از مایکت"
                href="https://trc.metrix.ir/fpydqh/"
              >
                <div>
                  <img
                    className="w-full inline-block"
                    src="/myket.svg"
                    height="44"
                    alt="دریافت از مایکت"
                    title=""
                  />
                </div>
              </a>
              <a
                className="BaseLayoutStaticFooter_BaseLayoutStaticFooter__appDownloadLink__VZlyq m-2"
                data-cro-id="footer-sibapp"
                target="_blank"
                title="دریافت از سیب‌اپ"
                href="https://trc.metrix.ir/4gluyi/"
              >
                <div>
                  <img
                    className="w-full inline-block"
                    src="/sib-app.svg"
                    height="44"
                    alt="دریافت از سیب‌اپ"
                    title=""
                  />
                </div>
              </a>
            </div>
            <a
              className="hidden lg:block mr-4"
              data-cro-id="footer-app-landing"
              target="_blank"
              href="https://www.digikala.com/landings/new-app/"
            >
              <div className="border-complete-200 bg-[#fff] w-[44px] h-[44px] rounded">
                <img
                  className="w-full inline-block"
                  src="/More.svg"
                  width="44"
                  height="44"
                  alt=""
                  title=""
                />
              </div>
            </a>
          </div>
          <a
            className="inline-flex items-center cursor-pointer styles_Anchor--white__KFujY text-button-2 lg:hidden mt-1"
            href="/landings/new-app/"
          >
            <span>اطلاعات بیشتر</span>
            <div className="flex">
              {/* <svg ><use xlink:href="#chevronLeft"></use></svg> */}
            </div>
          </a>
        </div>
        <div className="flex text-sm text-neutral-500 text-center items-center flex-col justify-between border-complete-t py-8">
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین دیجی‌کالا) است.
        </div>
      </div>
      <div className="w-full bg-neutral-100">
        <div className="container-4xl-w mx-auto flex items-start justify-end flex-wrap">
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://www.digikala.com/mag/"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block"
                src="/digimag.svg"
                height="20"
                alt="مجله اینترنتی دیجی‌کالا مگ"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://www.mydigipay.com/"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block"
                src="/digipay.svg"
                height="20"
                alt="بهترین راهکارهای پرداخت آنلاین"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://www.digistyle.com/"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block"
                src="/digistyle.svg"
                height="20"
                alt="خرید آنلاین مد و لباس از فروشگاه اینترنتی دیجی‌استایل با همان تجربه از دیجی‌کالا"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://www.digikala.com/plus/landing/"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block scale-75"
                src="/digiplus.svg"
                height="20"
                alt="خدمات ویژه دیجی‌کالا برای کاربران با اشتراک پلاس"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://www.digikala.com/users/login/?backUrl=/digiclub/"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block scale-75"
                src="/digiclub.svg"
                height="20"
                alt="دیجی کلاب باشگاه مشتریان دیجیکالا"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://digikalajet.com/"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block"
                src="/jet.svg"
                height="20"
                alt="خرید آنی سوپرمارکتی از فروشگاه های نزدیک"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://www.digikala.com/landings/magnet/?utm_source=Digikala_web&amp;utm_medium=Footer"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block"
                src="/magnet.svg"
                height="20"
                alt="مگنت - پلتفرم بررسی و انتخاب کالا"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://www.digikala.com/mehr/"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block"
                src="/digiMehr.svg"
                height="20"
                alt="دیجیکالا مهر - زنجیره مهربانی و لبخند"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://diginext.ir/"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block"
                src="/diginext.svg"
                height="20"
                alt="مرکز نوآوری و فناوری گروه دیجی‌کالا"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://digiexpress.ir/"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block"
                src="/digiexpress.svg"
                height="20"
                alt="سیستم حمل و نقل دیجی‌کالا"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://ganje.net/?utm_source=Digikala_web&amp;utm_medium=Footer"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block"
                src="/ganjeh.svg"
                height="20"
                alt="گنجه"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://digify.shop/"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block"
                src="/digify.svg"
                height="20"
                alt="دیجی‌فای"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://smartech.ir/"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block"
                src="/smartech.svg"
                height="20"
                alt="اسمارتک"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://www.digikalabusiness.com/"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block"
                src="/digikala-business.svg"
                height="20"
                alt="دیجی‌کالا بیزینس"
                title=""
              />
            </div>
          </a>
          <a
            className="border-b border-r w-[12%] h-[80px] border-neutral-200 border-complete-b-200 px-5 grow flex flex-col items-center justify-center"
            data-cro-id="footer-icons"
            target="_blank"
            href="https://digikala-service.com/"
          >
            <div className="h-[20px]">
              <img
                className="w-full inline-block"
                src="/digikala-service.svg"
                height="20"
                alt="دیجی‌کالا سرویس"
                title=""
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
