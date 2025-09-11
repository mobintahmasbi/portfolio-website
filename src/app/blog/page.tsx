import Image from "next/image";
import Link from "next/link"

export default function Blog() {
  return (
    <>
      <header className="flex justify-end align-center px-4 w-full py-5">
        <div className="hidden w-full sm:flex justify-end items-center">
          <div className="me-5 cursor-pointer">
            <h1 className="text-base font-bold">نمونه کار ها</h1>
          </div>
          <div className="me-5 cursor-pointer">
            <h1 className="text-base font-bold primary">وبلاگ</h1>
          </div>
          <div className="me-5 cursor-pointer">
            <h1 className="text-base font-bold">اطلاعات تماس</h1>
          </div>
        </div>
        <div className="w-full sm:hidden flex items-center justify-end">
          <Image src={"/menus.png"} width={30} height={18} alt="Menu" />
        </div>
      </header>
      <main className="w-full flex justify-center">
        <div className="lg:max-w-[750px] w-[90%] my-10">
          <div className="w-full">
              <h1 className="md:text-[30px] text-[25px] font-bold">
                وبلاگ
              </h1>
          </div>
          <article className="mt-7 w-full px-4 cursor-pointer">
            <h1 className="md:text-[25px] text-[22px] font-bold">
              نحوه ساخت یک API امن با استفاده از JWT در Nest.js
            </h1>
            <div className="mt-2 bg-dark-blue text-[14px] text-white px-4 py-1 rounded-[16px] w-fit font-bold">
              1404
            </div>
            <div className="my-4 text-[16px] text-justify">
              <p>
                در این مقاله، ما به بررسی نحوه ایجاد یک API امن با استفاده از JWT در فریمورک Nest.js خواهیم پرداخت. JWT یا JSON Web Token یک استاندارد باز برای انتقال اطلاعات ایمن بین طرفین است. با استفاده از JWT، می‌توانیم اطمینان حاصل کنیم که تنها کاربران مجاز به دسترسی به API ما هستند.
              </p>
            </div>
          </article>
          <hr className="main-border"/>
          <article className="mt-7 w-full px-4 cursor-pointer">
            <h1 className="md:text-[25px] text-[22px] font-bold">
              نحوه ساخت یک API امن با استفاده از JWT در Nest.js
            </h1>
            <div className="mt-2 bg-dark-blue text-[14px] text-white px-4 py-1 rounded-[16px] w-fit font-bold">
              1404
            </div>
            <div className="my-4 text-[16px] text-justify">
              <p>
                در این مقاله، ما به بررسی نحوه ایجاد یک API امن با استفاده از JWT در فریمورک Nest.js خواهیم پرداخت. JWT یا JSON Web Token یک استاندارد باز برای انتقال اطلاعات ایمن بین طرفین است. با استفاده از JWT، می‌توانیم اطمینان حاصل کنیم که تنها کاربران مجاز به دسترسی به API ما هستند.
              </p>
            </div>
          </article>
          <hr className="main-border"/>
          <article className="mt-7 w-full px-4 cursor-pointer">
            <h1 className="md:text-[25px] text-[22px] font-bold">
              نحوه ساخت یک API امن با استفاده از JWT در Nest.js
            </h1>
            <div className="mt-2 bg-dark-blue text-[14px] text-white px-4 py-1 rounded-[16px] w-fit font-bold">
              1404
            </div>
            <div className="my-4 text-[16px] text-justify">
              <p>
                در این مقاله، ما به بررسی نحوه ایجاد یک API امن با استفاده از JWT در فریمورک Nest.js خواهیم پرداخت. JWT یا JSON Web Token یک استاندارد باز برای انتقال اطلاعات ایمن بین طرفین است. با استفاده از JWT، می‌توانیم اطمینان حاصل کنیم که تنها کاربران مجاز به دسترسی به API ما هستند.
              </p>
            </div>
          </article>
          <hr className="main-border"/>
        </div>
      </main>
      <footer className="w-full flex items-center justify-center mt-20 mb-10">
        <Link
          href="https://x.com/MobinTahmasbi"
          className="font-bold text-[18px] secondary cursor-pointer me-5"
        >
          <Image src={"/twitter.png"} width={30} height={30} alt="Twitter" />
        </Link>
        <Link
          href="/"
          className="font-bold text-[18px] secondary cursor-pointer me-5"
        >
          <Image src={"/linkedin.png"} width={30} height={30} alt="LinkedIn" />
        </Link>
        <Image src={"/instagram.png"} width={30} height={30} alt="Instagram" className="me-5" />
        <Link
          href="https://github.com/mobintahmasbi"
          className="font-bold text-[18px] secondary cursor-pointer"
        >
          <Image src={"/github.png"} width={30} height={30} alt="GitHub" />
        </Link>
      </footer>
    </>
  );
}
