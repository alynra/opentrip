"use client";
import { Datepicker } from "flowbite-react";
import { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

const customTheme = {
  Datepicker: {
    color: {
      primary: "bg-white text-slate-400",
    },
  },
};
export default function Searcchform() {
  return (
    <>
      <>
        <Flowbite theme={{ theme: customTheme }}>
          <div className="flex absolute z-10 invisible md:visible md:left-1/4 md:top-3/4 w-fit bg-white px-4 py-4 space-x-4">
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
              <form className="w-full max-w-sm">
                <div className="relative max-w-sm">
                  <Datepicker color="primary" />
                </div>
              </form>
            </form>

            <button
              type="submit"
              className="w-fit text-white bg-rose-500 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-8 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Cari
            </button>
          </div>
        </Flowbite>
      </>
    </>
  );
}
