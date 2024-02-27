'use client'
import { ViewModel } from "@/view/ViewModel";
import { Header } from "@/components/Header";
import { ViewAllModel } from "@/view/ViewAllModel";
import { ViewAllModelCreator } from "@/view/ViewAllModelCreater";

export default function Home() {
  return (
    <>
      <Header />
      <div className=" w-[50%] mx-auto mt-5">
        <ViewAllModel />
      </div>
      <div className=" w-[50%] mx-auto mt-5">
        <ViewModel title="Create your model NFT" description="Log your IP rights" />
      </div>
      <div className=" w-[50%] mx-auto mt-5">
        <ViewModel title="Remix a model NFT" description="Create a new model based on an existing one" isRemix={true} />
      </div>
      <div className=" w-[50%] mx-auto mt-5">
        <ViewAllModelCreator />
      </div>
    </>
  );
}
