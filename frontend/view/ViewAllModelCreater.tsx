'use client'
import React from 'react'
import { NFTShowCase } from '@/components/NFTShowCase'
import { sampleNFTDataset } from '@/lib/sampleDataset'
import { useAccount } from 'wagmi'

export const ViewAllModelCreator = () => {

    const { address } = useAccount()

    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {sampleNFTDataset.map((NFTMetaData, index) => {
                    return (
                        <NFTShowCase key={index} NFTMetaData={NFTMetaData} isCreator={true} />
                    )
                })}
            </div>
        </div>
    )
}