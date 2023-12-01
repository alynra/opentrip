"use client";
import bg from "@/assets/bgregis.svg";
import Image from "next/image";
import Link from "next/link";
export default function Registpage() {
  return (
    <>
      <div className="flex mt-20 container w-full">
        <section className=" dark:bg-gray-900 ">
          <Image
            src={bg}
            alt="background"
            className="bg-cover bg-center absolute -z-10 brightness-50"
          />
          <div className="flex   flex-col  items-center justify-center px-20 py-8  md:h-screen lg:py-0">
            <div className="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-8 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Choose Registration
                </h1>
                <div>
                  <Link href="/register-user" className="">
                    <button
                      type="submit"
                      className="w-full text-white bg-rose-500 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm  p-2.5 lg:px-20 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Register as User
                    </button>
                  </Link>
                </div>
                <div>
                  <Link href="/register-hoster">
                    <button
                      type="submit"
                      className="w-full  text-white bg-rose-500 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm  p-2.5 lg:px-20 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Register as Hoster
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
