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
    </>
  );
}
