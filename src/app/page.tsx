import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex justify-end align-center px-4 w-full py-5">
        <div className="hidden w-full sm:flex justify-end items-center">
          <div className="me-5 cursor-pointer">
            <h1 className="text-base font-bold">نمونه کار ها</h1>
          </div>
          <div className="me-5 cursor-pointer">
            <h1 className="text-base font-bold">وبلاگ</h1>
          </div>
          <div className="me-5 cursor-pointer">
            <h1 className="text-base font-bold">اطلاعات تماس</h1>
          </div>
        </div>
        <div className="w-full sm:hidden flex items-center justify-end">
          <Image src={"/menus.png"} width={30} height={18} alt="Menu" />
        </div>
      </header>
      <main className="w-full">
        <section className="w-full flex items-center justify-around md:flex-nowrap flex-wrap lg:flex-row flex-col-reverse sm:mt-20 lg:px-64">
          <div className="lg:mt-0 mt-5">
            <div className="lg:px-0 px-4">
              <h1 className="font-bold sm:text-[40px] text-[26px] lg:text-start text-center">
                سلام ، من مبین طهماسبی هستم ،
                <br className="sm:block hidden" />
                یک توسعه دهنده وب
              </h1>
            </div>
            <div className="mt-4 lg:px-0 px-4 lg:text-start text-justify">
              <span className="font-bold text-[16px]">
                من یک توسعه دهنده وب فول استک وب با تمرکز بر روی بک اند هستم.
                زبان تخصصی من جاوااسکریپته
                <br className="sm:block hidden" /> و برای بک اند از Nest.js
                استفاده می‌کنم. برای فرانت اند از React.js , Next.js استفاده
                میکنم.
              </span>
            </div>
            <div className="mt-4 w-full lg:block flex justify-center">
              <button className="text-[18px] text-center bg-primary text-white font-bold px-6 py-2 cursor-pointer">
                دانلود رزومه
              </button>
            </div>
          </div>
          <div>
            <Image
              src={"/man.png"}
              height={500}
              width={500}
              className="sm:w-[243px] sm:h-[243px] w-[175px] h-[175px] object-cover"
              alt="Man"
            />
          </div>
        </section>
        <section className="w-full mt-20 bg-secondary sm:py-10 py-5">
          <div className="w-full flex items-center sm:justify-around justify-center">
            <div className="font-bold text-[18px]">پست های اخیر</div>
            <div className="font-bold text-[18px] secondary cursor-pointer sm:block hidden">
              دیدن تمام پست ها
            </div>
          </div>
          <div className="w-full flex items-center mt-10 lg:flex-nowrap flex-wrap lg:justify-around justify-center lg:px-75 px-6">
            <div className="bg-white rounded-lg shadow-lg lg:w-[418px] md:w-[70%] sm:w-[90%] lg:h-[295px] lg:mb-5 mb-7 cursor-pointer pb-4">
              <div className="w-full font-bold mt-8 px-6 text-[19px]">
                نحوه ساخت یک API امن با استفاده از JWT در Nest.js
              </div>
              <div className="w-full mt-4 px-6 text-[16px]">16 شهریور 1404</div>
              <div className="w-full mt-6 px-6 text-[15px] text-justify">
                در این پست وبلاگ، ما به بررسی نحوه ساخت یک API امن با استفاده از
                JSON Web Tokens (JWT) در فریمورک Nest.js می‌پردازیم. JWT یک
                استاندارد باز است که به شما امکان می‌دهد اطلاعات را به صورت امن
                بین دو طرف منتقل کنید.
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg lg:w-[418px] md:w-[70%] sm:w-[90%] lg:h-[295px] lg:mb-5 mb-7 cursor-pointer pb-4">
              <div className="w-full font-bold mt-8 px-6 text-[19px]">
                نحوه ساخت یک API امن با استفاده از JWT در Nest.js
              </div>
              <div className="w-full mt-4 px-6 text-[16px]">16 شهریور 1404</div>
              <div className="w-full mt-6 px-6 text-[15px] text-justify">
                در این پست وبلاگ، ما به بررسی نحوه ساخت یک API امن با استفاده از
                JSON Web Tokens (JWT) در فریمورک Nest.js می‌پردازیم. JWT یک
                استاندارد باز است که به شما امکان می‌دهد اطلاعات را به صورت امن
                بین دو طرف منتقل کنید.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
