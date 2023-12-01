/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { FaXmark } from "react-icons/fa6";
import { FaChevronDown, FaRegSquare } from "react-icons/fa";
import { IoMdFunnel } from "react-icons/io";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
// import {
//   ChevronDownIcon,
//   FunnelIcon,
//   MinusIcon,
//   PlusIcon,
//   Squares2X2Icon,
// } from "@heroicons/react/20/solid";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "tipe",
    name: "Tipe Perjalanan",
    options: [
      { value: "opentrip", label: "Open Trip", checked: false },
      { value: "privatetrip", label: "Private Trip", checked: false },
    ],
  },
  {
    id: "tema",
    name: "Tema Perjalanan",
    options: [
      {
        value: "destinasi-populer",
        label: "Destinasi Populer",
        checked: false,
      },
      { value: "vitamin-sea", label: "Vitamin Sea", checked: false },
      { value: "gunung", label: "Mendaki Gunung", checked: true },
      { value: "alam", label: "Menyatu dengan Alam", checked: false },
    ],
  },
  {
    id: "rating",
    name: "Rating",
    options: [
      {
        value: "5",
        label: `5 Bintang`,
        checked: false,
      },
      { value: "3-4", label: "3-4 Bintang", checked: false },
    ],
  },
];
const budget = [
  {
    id: "budget",
    name: "Budget",
    options: [
      { value: "budget-min", label: "Budget minimum", checked: false },
      { value: "budget-maks", label: "Budget maksimum", checked: false },
    ],
  },
];
const tgl = [
  {
    id: "tgl",
    name: "Periode Berangkat",
    options: [
      {
        value: "periode",
        label: "Pilih tanggal keberangkatan",
        checked: false,
      },
    ],
  },
];
const durasi = [
  {
    id: "durasi",
    name: "Durasi",
    options: [
      {
        value: "hari",
        label: "Hari",
        checked: false,
      },
    ],
  },
];
const lokasi = [
  {
    id: "lokasi",
    name: "Lokasi Keberangkatan",
    options: [
      {
        value: "berangkat",
        label: "Cari lokasi keberangkatan",
        checked: false,
      },
    ],
  },
  {
    id: "destinasi",
    name: "Destinasi",
    options: [
      {
        value: "destinasi",
        label: "Cari Destinasi",
        checked: false,
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const products = [
  {
    id: 1,
    name: "Pantai, NTT",
    href: "#",
    price: "Rp. 545.000",
    imageSrc:
      "https://images.pexels.com/photos/19160413/pexels-photo-19160413/free-photo-of-pemandangan-menakjubkan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Pantai Berlian, Bali",
    href: "#",
    price: "Rp. 275.000",
    imageSrc:
      "https://images.pexels.com/photos/19137460/pexels-photo-19137460/free-photo-of-pantai-berlian-bali.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt:
      "Olive drab green insulated bottle with flared screw l and flat top.",
  },
  {
    id: 3,
    name: "Sukasada, Bali",
    href: "#",
    price: "Rp. 350.000 ",
    imageSrc:
      "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Gunung",
    href: "#",
    price: "Rp. 450.000",
    imageSrc:
      "https://images.pexels.com/photos/2526431/pexels-photo-2526431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Bromo",
    href: "#",
    price: "Rp. 400.000",
    imageSrc:
      "https://images.pexels.com/photos/9286872/pexels-photo-9286872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export default function DestinasiPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-black">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <FaXmark className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    {/* <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul> */}

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <CiSquareMinus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <CiSquarePlus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Semua Tur
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <FaChevronDown
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <FaRegSquare className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <IoMdFunnel className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                {/* <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <CiSquareMinus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <CiSquarePlus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {budget.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <CiSquareMinus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <CiSquarePlus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <form className="max-w-sm mx-auto">
                                  <div className="relative space-x-4 ">
                                    <div className="absolute  bg-gray-200 inset-y-0 start-0 top-0 flex items-center px-3.5 rounded-lg pointer-events-none">
                                      <span>Rp</span>
                                    </div>
                                    <input
                                      type="text"
                                      id="budget"
                                      aria-describedby="helper-text-explanation"
                                      className="bg-white border border-gray-300 text-sm rounded-lg  block w-full px-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder={option.label}
                                      pattern="^\d{5}(-\d{4})?$"
                                      required=""
                                    />
                                  </div>
                                </form>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {lokasi.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <CiSquareMinus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <CiSquarePlus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <form className="max-w-sm mx-auto">
                                  <div className="relative space-x-4 ">
                                    <div className="absolute  bg-gray-200 inset-y-0 start-0 top-0 flex items-center px-3.5 rounded-lg pointer-events-none">
                                      <FaSearch className="text-slate-400 font-light text-xs" />
                                    </div>
                                    <input
                                      type="text"
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      aria-describedby="helper-text-explanation"
                                      className="bg-white border border-gray-300 text-sm rounded-lg  block w-full px-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder={option.label}
                                      pattern="^\d{5}(-\d{4})?$"
                                      required=""
                                    />
                                  </div>
                                </form>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {durasi.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <CiSquareMinus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <CiSquarePlus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <form className="max-w-sm mx-auto">
                                  <div className="relative space-x-4 space-y-4 ">
                                    <div className="flex display-inline-block space-x-2">
                                      <input
                                        type="text"
                                        id={`filter-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        aria-describedby="helper-text-explanation"
                                        className="bg-white border border-gray-300 text-sm rounded-lg  block w-full px-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={option.label}
                                        pattern="^\d{5}(-\d{4})?$"
                                        required=""
                                      />
                                      <input
                                        type="text"
                                        id={`filter-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        aria-describedby="helper-text-explanation"
                                        className="bg-white border border-gray-300 text-sm rounded-lg  block w-full px-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={option.label}
                                        pattern="^\d{5}(-\d{4})?$"
                                        required=""
                                      />
                                    </div>
                                    <>
                                      <input
                                        id="steps-range"
                                        type="range"
                                        min={1}
                                        max={30}
                                        defaultValue="1"
                                        step="0.5"
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                      />
                                    </>
                                  </div>
                                </form>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Your content */}
                <div className=" bg-transparant ">
                  <div className=" max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-4xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          href={product.href}
                          className="group"
                        >
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
                              <span className="mt-1 text-xs text-gray-500">
                                4.5
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <Link href="#">
                              <button class=" mt-6 bg-rose-500 hover:bg-gray-300 text-white text-xs font-semibold py-2 px-56 lg:px-10">
                                Pesan Sekarang
                              </button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <>
                    <nav className="float-right pr-10">
                      <ul className="flex items-center space-x-2 h-8 text-sm">
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            <span className="sr-only">Previous</span>
                            <svg
                              className="w-2.5 h-2.5 rtl:rotate-180"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 6 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 1 1 5l4 4"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            2
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            aria-current="page"
                            className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                          >
                            3
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            4
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            5
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            <span className="sr-only">Next</span>
                            <svg
                              className="w-2.5 h-2.5 rtl:rotate-180"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 6 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 9 4-4-4-4"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
