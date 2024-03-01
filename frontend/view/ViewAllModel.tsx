'use client'
import React, { useEffect, useState } from 'react'
import { NFTShowCase } from '@/components/NFTShowCase'
import { sampleNFTDataset } from '@/lib/sampleDataset'
import { getAllModelInfo } from '@/contract/IPNFTContract'
import { ModelNFTMetadataProps } from '@/types'

type ViewAllModelProps = {
    setModel: React.Dispatch<React.SetStateAction<any>>;
}

export const ViewAllModel = ({ setModel }: ViewAllModelProps) => {

    const [NFTMetaData, setNFTMetaData] = useState<ModelNFTMetadataProps[]>([])

    useEffect(() => {
        async function fetchData() {
            const data = await getAllModelInfo()
            console.log(data)
            setNFTMetaData(data as ModelNFTMetadataProps[])
        }
        fetchData()
    }, [])



    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {sampleNFTDataset.map((nftItem, index) => {
                    return (
                        <NFTShowCase
                            key={index}
                            NFTMetaData={nftItem}
                            isCreator={false}
                        />
                    )
                })}
            </div>
        </div>
    )
}
