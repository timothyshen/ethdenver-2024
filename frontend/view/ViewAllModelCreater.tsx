'use client'
import React, { useEffect, useState } from 'react'
import { NFTShowCase } from '@/components/NFTShowCase'
import { sampleNFTDataset } from '@/lib/sampleDataset'
import { useAccount } from 'wagmi'
import { getAllModelInfo } from '@/contract/IPNFTContract'
import { ModelNFTMetadataProps } from '@/types'

export const ViewAllModelCreator = () => {

    const [NFTMetaData, setNFTMetaData] = useState<ModelNFTMetadataProps[]>([])

    const { address } = useAccount()

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
                {sampleNFTDataset.map((NFTMetaData, index) => {
                    return NFTMetaData.owner === address && (
                        <NFTShowCase key={index} NFTMetaData={NFTMetaData} isCreator={true} />
                    )
                })}
            </div>
        </div>
    )
}
