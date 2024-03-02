'use client'
import React, { useState } from 'react'
import { ViewModel } from "@/view/ViewModel";
import { Header } from "@/components/Header";
import { ModelAll } from "@/view/ModelAll";
import { ViewModelRemix } from "@/view/ViewModelRemix";
import { ViewAllModel } from '@/view/ViewAllModel';
import { ViewAllModelCreator } from '@/view/ViewAllModelCreater';
import { ModelNFTMetadataProps } from '@/types';

export default function Page() {

  const [remixModel, setRemixModel] = useState<ModelNFTMetadataProps>();

  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-4 p-2">
        <div className=" mt-5">
          <h1 className='text-xl font-semibold my-3 shadow-md rounded-lg border p-2'>Model Creation</h1>

          <div className="mt-3 h-[340px] overflow-auto">
            <ViewAllModel />
          </div>

          <h1 className='text-xl font-semibold my-3 shadow-md rounded-lg border p-2'>My Model Creation</h1>
          <div className="mt-3 h-[300px] overflow-auto">
            <ViewAllModelCreator />
          </div>
        </div>
        <div className=" mt-5 space-y-3">
          <div className=" w-full">
            <h1 className='text-xl font-semibold my-3 shadow-md rounded-lg border p-2'>Model Creation</h1>
            <ViewModel title="Create your model NFT" description="Log your IP rights" />
          </div>
          <div>
            <h1 className='text-xl font-semibold my-3 shadow-md rounded-lg border p-2'>Model Remix</h1>
            <ViewModelRemix title="Remix a model NFT" description="Create a new model based on an existing one" />
          </div>
        </div>
      </div>
    </>
  );
}
