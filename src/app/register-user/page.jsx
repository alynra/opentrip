"use client";
import bg from "@/assets/bgregis.svg";
import Image from "next/image";
import UserRegisForm from "../components/UserRegis";
export default function RegistUser() {
  return (
    <>
      <div className="flex mt-20 container w-full">
        <section className=" dark:bg-gray-900">
          <Image
            src={bg}
            alt="background"
            className="bg-cover bg-center absolute -z-10 brightness-50"
          />

          <UserRegisForm />
        </section>
      </div>
    </>
  );
}
