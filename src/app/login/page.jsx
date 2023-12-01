"use client";

import bg from "@/assets/loginpict.svg";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";

export default function Login() {
  return (
    <>
      <section className="flex bg-gray-50 min-h-screen flex-col items-center justify-between p-0">
        <div className="container h-full ">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* Left column container with background*/}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <Image src={bg} className="w-full" alt="Phone image" />
            </div>
            {/* Right column container with form */}
            <div className="pr-6 md:w-8/12 lg:ml-6 lg:w-5/12">
              <form className="mb-52">
                {/* Email input */}
                <div className="flex display-inline-block space-x-1 justify-center mb-20">
                  <h1 className="text-xl font-bold">OPENTRIP</h1>
                  <Image src={logo} alt="logo" width="20" height="20" />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init="">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 ring-2 ring-slate-300"
                    id="exampleFormControlInput3"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="exampleFormControlInput3"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary "
                  >
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="relative mb-6" data-te-input-wrapper-init="">
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 ring-2 ring-slate-300"
                    id="exampleFormControlInput33"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="exampleFormControlInput33"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Password
                  </label>
                </div>
                {/* Remember me checkbox */}

                {/* Submit button */}
                <Link href="/home">
                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-rose-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                  >
                    Login
                  </button>
                </Link>
                {/* Divider */}
                <ul className="flex display-inline-block mt-4 justify-between text-sm text-slate-500">
                  <li>
                    <Link href="#">Forgot Password</Link>
                  </li>
                  <li>
                    <span>
                      Don't have an account?
                      <Link href="/register" className="text-rose-500">
                        {" "}
                        Register Here
                      </Link>
                    </span>
                  </li>
                </ul>
                {/* Social login buttons */}
              </form>
              <span className="flex  justify-center  text-sm text-slate-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="#" className="hover:underline">
                  Opentrip
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
