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

    if (NFTMetaData.length === 0) {
        return (
            <div>
                <h1>No record yet</h1>
            </div>
        )
    }


    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {NFTMetaData.map((NFTMetaData, index) => {
                    return NFTMetaData.owner === address && (
                        <NFTShowCase key={index} NFTMetaData={NFTMetaData} isCreator={true} />
                    )
                })}
            </div>
        </div>
    )
}
