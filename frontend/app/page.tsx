'use client'
import { ViewModel } from "@/view/ViewModel";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className=" w-[70%] mx-auto mt-5">
        <ViewModel />
      </div>
    </>
  );
}
