import Image from "next/image";
import bg from "@/assets/bghome.svg";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import apple from "@/assets/applestore.svg";
import google from "@/assets/googleplay.svg";
import phone1 from "@/assets/PhoneMockup1.svg";
import phone2 from "@/assets/PhoneMockup2.svg";
import Link from "next/link";
import Searcchform from "../components/Searchform";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data = JSON.parse(file);
  return (
    <>
      <main className="flex bg-gray-50 min-h-screen flex-col items-center justify-between p-0">
        <div className="relative flex mt-40 container w-full">
          <Image
            src={bg}
            alt="background"
            className=" bg-cover brightness-50"
          />

          <h1 className="absolute z-2 top-20 text-lg lg:text-4xl lg:top-40 left-10 md:text-4xl text-white font-bold">
            NEVER STOP
            <br />
            EXPLORING THE WORLD
          </h1>
          <Searcchform />
        </div>

        <div className="flex flex-col mt-10 mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 gap-12">
          <div className="flex display-inline-block gap-8 md:justify-between">
            <h2 className="text-black font-bold text-lg md:text-2xl">
              Destinasi Populer
            </h2>
            <Link href="#">
              <button className="flex display-inline-block text-rose-500 text-xs md:text-sm gap-2 hover:text-slate-300 ">
                Lihat Liburan Lainnya
                <FaArrowRightLong />
              </button>
            </Link>
          </div>

          <div className=" bg-transparant ">
            <div className=" max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
                {data.products.map((product) => (
                  <div key={product.id} href={product.href} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md font-bold text-gray-700">
                      {product.name}
                    </h3>
                    <span className="text-gray-700 mr-3 text-xs">
                      Minimum keberangkatan 10 orang
                    </span>
                    <div className="flex items-center">
                      <p className="text-xs font-semibold text-rose-500 cursor-auto my-3">
                        {product.price}
                        <span className="mt-1 text-xs text-gray-500 mr-5">
                          / Orang{" "}
                        </span>
                      </p>

                      <div className="ml-auto flex display-inline-block">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="mt-1 text-xs text-gray-500">4.5</span>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button class=" mt-6 bg-rose-500 hover:bg-gray-300 text-white text-xs font-semibold py-2 px-56 lg:px-14">
                        Pesan Sekarang
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 gap-12">
          <div className="flex display-inline-block gap-8 md:justify-between">
            <h2 className="text-black font-bold text-lg md:text-2xl">
              Vitamin Sea
            </h2>
            <Link href="#">
              <button className="flex display-inline-block text-rose-500 text-xs md:text-sm gap-2 hover:text-slate-300 ">
                Lihat Liburan Lainnya
                <FaArrowRightLong />
              </button>
            </Link>
          </div>

          <div className=" bg-transparant ">
            <div className=" max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
                {data.products.map((product) => (
                  <div key={product.id} href={product.href} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md font-bold text-gray-700">
                      {product.name}
                    </h3>
                    <span className="text-gray-700 mr-3  text-xs">
                      Minimum keberangkatan 10 orang
                    </span>
                    <div className="flex items-center">
                      <p className="text-xs font-semibold text-rose-500 cursor-auto my-3">
                        {product.price}
                        <span className="mt-1 text-xs text-gray-500 mr-5">
                          / Orang{" "}
                        </span>
                      </p>

                      <div className="ml-auto flex display-inline-block">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="mt-1 text-xs text-gray-500">4.5</span>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button class=" mt-6 bg-rose-500 hover:bg-gray-300 text-white text-xs font-semibold py-2 px-56 lg:px-14">
                        Pesan Sekarang
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 gap-12">
          <div className="flex display-inline-block gap-8 md:justify-between">
            <h2 className="text-black font-bold text-lg md:text-2xl">
              Naik Naik ke Puncak gunung
            </h2>
            <Link href="#">
              <button className="flex display-inline-block text-rose-500 text-xs md:text-sm gap-2 hover:text-slate-300 ">
                Lihat Liburan Lainnya
                <FaArrowRightLong />
              </button>
            </Link>
          </div>

          <div className=" bg-transparant ">
            <div className=" max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
                {data.products.map((product) => (
                  <div key={product.id} href={product.href} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md font-bold text-gray-700">
                      {product.name}
                    </h3>
                    <span className="text-gray-700 mr-3  text-xs">
                      Minimum keberangkatan 10 orang
                    </span>
                    <div className="flex items-center">
                      <p className="text-xs font-semibold text-rose-500 cursor-auto my-3">
                        {product.price}
                        <span className="mt-1 text-xs text-gray-500 mr-5">
                          / Orang{" "}
                        </span>
                      </p>

                      <div className="ml-auto flex display-inline-block">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="mt-1 text-xs text-gray-500">4.5</span>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button class=" mt-6 bg-rose-500 hover:bg-gray-300 text-white text-xs font-semibold py-2 px-56 lg:px-14">
                        Pesan Sekarang
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 gap-12">
          <div className="flex md:display-inline-block gap-8 md:justify-between">
            <h2 className="text-black font-bold text-lg md:text-2xl">
              Menyatu dengan alam
            </h2>
            <Link href="#">
              <button className="flex display-inline-block text-rose-500 text-xs md:text-sm gap-2 hover:text-slate-300 ">
                Lihat Liburan Lainnya
                <FaArrowRightLong />
              </button>
            </Link>
          </div>

          <div className=" bg-transparant ">
            <div className=" max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
                {data.products.map((product) => (
                  <div key={product.id} href={product.href} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md font-bold text-gray-700">
                      {product.name}
                    </h3>
                    <span className="text-gray-700 mr-3  text-xs">
                      Minimum keberangkatan 10 orang
                    </span>
                    <div className="flex items-center">
                      <p className="text-xs font-semibold text-rose-500 cursor-auto my-3">
                        {product.price}
                        <span className="mt-1 text-xs text-gray-500 mr-5">
                          / Orang{" "}
                        </span>
                      </p>

                      <div className="ml-auto flex display-inline-block">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="mt-1 text-xs text-gray-500">4.5</span>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button class=" mt-6 bg-rose-500 hover:bg-gray-300 text-white text-xs font-semibold py-2 px-56 lg:px-14">
                        Pesan Sekarang
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-rose-500 mx-auto w-full max-w-screen-xl p-6 py-4 lg:py-0">
          <div className="md:flex md:justify-between">
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-8">
              <div className="py-12 mb-6 md:mb-0 space-y-4">
                <span className=" self-center text-3xl text-white font-bold whitespace-nowrap dark:text-white">
                  Download App
                </span>
                <p className="text-white font-light">
                  Download the app to manage your projects, keep track of the
                  progress and complete tasks without procastinating. Stay on
                  track and complete on time!
                </p>

                <h2 className="pt-4 text-sm text-white font-semibold text-gray-900 uppercase dark:text-white">
                  Get The App
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium flex display-inline-block">
                  <li className="mb-4">
                    <button className="hover:bg-slate-200">
                      <Image src={apple} alt="logo" width="150" height="150" />
                    </button>
                  </li>
                  <li>
                    <button className="hover:bg-slate-200">
                      <Image src={google} alt="logo" width="150" height="150" />
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex my-0 display-inline-block">
                <Image
                  src={phone1}
                  width="250"
                  height="250"
                  className="invisible lg:visible md:visible"
                />
                <Image
                  src={phone2}
                  width="250"
                  height="250"
                  className="invisible lg:visible md:visible"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
