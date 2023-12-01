"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import apple from "@/assets/applestore.svg";
import google from "@/assets/googleplay.svg";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className=" bg-white mx-auto w-full max-w-screen-xl p-6 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 sm:grid-cols-5 mx-8">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center gap-2">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  OPENTRIP
                </span>
                <Image
                  src={logo}
                  alt="logo"
                  width="30"
                  height="30"
                  className=""
                />
              </a>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Support
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Help Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Legal
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Kerja Sama
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Daftar Jadi Hoster
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Hoster Terdaftar
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
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
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        {/* <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Opentrip
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaYoutube />
              <span className="sr-only">Youtube page</span>
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
}
