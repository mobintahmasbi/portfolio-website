import Image from "next/image";
import Link from "next/link";

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
        <section className="w-full mt-20 flex justify-center flex-wrap mb-5">
          <div className="md:w-[70%] w-[95%]">
            <h1 className="font-bold text-[24px]">پروژه های من</h1>
          </div>
          <article className="md:w-[70%] w-[95%] flex items-start lg:flex-no-wrap flex-wrap mt-10">
            <div className="lg:w-[25%] w-full h-[180px] rounded-[6px] shadow-lg">
              <Image
                src={"/toplearn.png"}
                height={500}
                width={500}
                className="w-full h-full object-fit rounded-[6px]"
                alt="Man"
              />
            </div>
            <div className="lg:mt-0 mt-5 lg:w-[75%] w-full project-detail-container">
              <div>
                <h1 className="font-bold text-[26px]">پروژه سروقت</h1>
              </div>
              <div>
                <h3 className="text-[12px] font-bold bg-dark-blue text-white text-center py-2 rounded-[16px] w-[62px] mt-4">
                  1404
                </h3>
              </div>
              <div className="mt-4">
                <p className="font-bold">
                  پروژه سروقت یک پروژه برای مدیریت نوبت ها برای کسب های کار های
                  خدماتی زمان بره که به کاربران این امکان را می دهد تا نوبت های
                  خود را به صورت آنلاین مدیریت کنند.
                </p>
              </div>
            </div>
          </article>
        </section>
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
