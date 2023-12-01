"use client";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed bg-white py-4 flex container mx-auto px-4 pt-1 justify-between items-center md:w-full lg:py-4 lg:px-10">
        <div className="flex my-4 display-inline-block space-x-4 lg:my-0 lg:space-x-8 text-sm lg:text-base  ">
          <Link href="/home">
            <button className=" hover:bg-clip-border hover:border-b-2 hover:border-rose-500">
              <a href="#">Beranda</a>
            </button>
          </Link>
          <Link href="/destinasi">
            <button className="hover:bg-clip-border hover:border-b-2 hover:border-rose-500">
              <a href="#">Destinasi</a>
            </button>
          </Link>
          {/* <Example /> */}
          <div className="">
            <button
              id="search-menu"
              className=" flex justify-center items-center  font-medium text-black whitespace-nowrap  hover:text-slate-500
    rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 focus:outline-none"
              onClick={() => {
                const formSearch = document.getElementById("search-form");

                formSearch.classList.toggle("hidden");
              }}
            >
              <CiSearch />
            </button>

            <div id="search-form" className="hidden ">
              <div className="flex absolute z-10 justify-between invisible md:visible md:px-20 md:left-0 md:top-3/4 w-full bg-white px-4 py-4 space-x-4">
                <form className="w-full max-w-sm">
                  <label htmlFor="tujuan" className="px-2 text-black text-xs">
                    Tujuan
                  </label>

                  <div className="flex items-center  py-2">
                    <input
                      className="appearance-none bg-transparent border-none w-full text-md text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="semua tempat"
                      aria-label="Full name"
                    />
                  </div>
                </form>
                <form className="w-full max-w-lg">
                  <label htmlFor="tujuan" className="px-2 text-black text-xs">
                    Jadwal
                  </label>
                  <div className="flex items-center  py-2">
                    <input
                      className="appearance-none bg-transparent border-none w-full text-md text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="kapan saja"
                      aria-label="Full name"
                    />
                  </div>
                </form>

                <button
                  type="submit"
                  className="w-fit text-white bg-rose-500 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-8 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Cari
                </button>
              </div>
            </div>
          </div>
          {/* <div className="hidden" id="searchbar">
                <input
                  type="text"
                  id="search-navbar"
                  class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div> */}
        </div>
        <div className="flex display-inline-block space-x-1">
          <h1 className="text-md lg:text-xl font-bold">OPENTRIP</h1>
          <Image src={logo} alt="logo" width="20" height="20" />
        </div>
        <div className="flex display-inline-block space-x-2 ">
          <Link href="/login">
            <button
              href=""
              type="button"
              class="px-2 py-2 lg:px-5 lg:text-sm text-xs font-bold text-center text-rose-500 bg-violet-100 rounded-lg hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </Link>
          <Link href="/register">
            <button
              type="button"
              class="px-2 py-2 lg:px-5 lg:text-sm text-xs font-medium text-center text-white bg-rose-500 rounded-lg hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
