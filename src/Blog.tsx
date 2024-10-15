const Blog = () => {
  return (
    <div className="py-4">
      <div className="flex justify-between py-4 items-center px-5">
        <div className="text-h5 text-neutral-900">خواندنی‌ها</div>
        <span data-cro-id="hp-more-blogs" className="shrink-0">
          <a
            className="inline-flex items-center cursor-pointer text-[#19bfd3] text-button-2"
            href="https://www.digikala.com/mag/"
          >
            <span>مطالب بیشتر در دیجی‌کالا مگ</span>
            <div className="flex">
              {/* <svg style="width: 18px; height: 18px; fill: var(--color-icon-secondary);">
        <use xlink:href="#chevronLeft"></use></svg> */}
            </div>
          </a>
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 items-stretch lg:justify-around px-5 text-sm">
        <a
          className="border border-neutral-200  rounded-md mb-1 border-complete-200 user-select-none  flex flex-col h-full overflow-hidden article-card_ArticleCard__container__6Ks7Q"
          data-cro-id="hp-blogs"
          target="_blank"
          href="https://www.digikala.com/mag/best-self-improvement-books/"
        >
          <div>
            <img
              className="w-full article-card_ArticleCard__image__nrAQr inline-block"
              src="https://www.digikala.com/mag/wp-content/uploads/2024/10/best-self-improvement-books.jpg"
              alt="بهترین کتاب‌های توسعه فردی که باید بخوانید"
              title=""
            />
          </div>
          <div className="mt-2 mb-3 px-4 ellipsis-2 text-body-2 text-neutral-900 w-full text-right">
            بهترین کتاب‌های توسعه فردی که باید بخوانید
          </div>
        </a>
        <a
          className="border border-neutral-200  rounded-md mb-1 border-complete-200 user-select-none  flex flex-col h-full overflow-hidden article-card_ArticleCard__container__6Ks7Q"
          data-cro-id="hp-blogs"
          target="_blank"
          href="https://www.digikala.com/mag/which-vitamin-deficiency-causes-weakness-in-legs/"
        >
          <div>
            <img
              className="w-full article-card_ArticleCard__image__nrAQr inline-block"
              src="https://www.digikala.com/mag/wp-content/uploads/2024/10/leg-weakness-1.jpg"
              alt="ضعف پا کمبود کدام ویتامین است؟ ۷ ماده‌ی مغذی که باید بشناسید"
              title=""
            />
          </div>
          <div className="mt-2 mb-3 px-4 ellipsis-2 text-body-2 text-neutral-900 w-full text-right">
            ضعف پا کمبود کدام ویتامین است؟ ۷ ماده‌ی مغذی که باید بشناسید
          </div>
        </a>
        <a
          className="border border-neutral-200  rounded-md mb-1 border-complete-200 user-select-none   flex flex-col h-full overflow-hidden article-card_ArticleCard__container__6Ks7Q"
          data-cro-id="hp-blogs"
          target="_blank"
          href="https://www.digikala.com/mag/best-playstation-5-games/"
        >
          <div>
            <img
              className="w-full article-card_ArticleCard__image__nrAQr inline-block"
              src="https://www.digikala.com/mag/wp-content/uploads/2024/10/best_ps5_games_featured.jpg"
              alt="بهترین بازی‌هایی که می‌توانید روی پلی‌استیشن ۵ تجربه کنید"
              title=""
            />
          </div>
          <div className="mt-2 mb-3 px-4 ellipsis-2 text-body-2 text-neutral-900 w-full text-right">
            بهترین بازی‌هایی که می‌توانید روی پلی‌استیشن ۵ تجربه کنید
          </div>
        </a>
        <a
          className="border border-neutral-200  rounded-md mb-1 border-complete-200 user-select-none   flex flex-col h-full overflow-hidden article-card_ArticleCard__container__6Ks7Q"
          data-cro-id="hp-blogs"
          target="_blank"
          href="https://www.digikala.com/mag/why-did-joker-2-flopped-at-box-office/"
        >
          <div>
            <img
              className="w-full article-card_ArticleCard__image__nrAQr inline-block"
              src="https://www.digikala.com/mag/wp-content/uploads/2024/10/joker-2-bombed.jpg"
              alt="چرا فیلم «جوکر ۲» در گیشه شکست خورد؟"
              title=""
            />
          </div>
          <div className="mt-2 mb-3 px-4 ellipsis-2 text-body-2 text-neutral-900 w-full text-right">
            چرا فیلم «جوکر ۲» در گیشه شکست خورد؟
          </div>
        </a>
      </div>
    </div>
  );
};

export default Blog;
