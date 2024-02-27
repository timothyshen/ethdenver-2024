'use client'
import { ViewModel } from "@/view/ViewModel";
import { Header } from "@/components/Header";
import { ViewAllModel } from "@/view/ViewAllModel";
import { ViewAllModelCreator } from "@/view/ViewAllModelCreater";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-4">
        <div className=" mt-5">
          <h1>Model Creation</h1>

          <div className="h-[300px] overflow-auto">
            <ViewAllModel />
          </div>
          <div className="mt-5 h-[300px] overflow-auto">
            <ViewAllModelCreator />
          </div>
        </div>
        <div className=" mt-5 space-y-3">
          <div className=" w-full">
            <h1>Model Creation</h1>
            <ViewModel title="Create your model NFT" description="Log your IP rights" />
          </div>
          <ViewModel title="Remix a model NFT" description="Create a new model based on an existing one" isRemix={true} />
        </div>
      </div>

    </>
  );
}
