'use client'
import { ViewModel } from "@/view/ViewModel";
import { Header } from "@/components/Header";
import { ModelAll } from "@/view/ModelAll";

export default function Page() {

  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-4">
        <ModelAll />
        <div className=" mt-5 space-y-3">
          <div className=" w-full">
            <h1>Model Creation</h1>
            <ViewModel title="Create your model NFT" description="Log your IP rights" />
          </div>
          <div>
            <h1>Model Remix</h1>
            <ViewModel title="Remix a model NFT" description="Create a new model based on an existing one" isRemix={true} />
          </div>
        </div>
      </div>

    </>
  );
}
