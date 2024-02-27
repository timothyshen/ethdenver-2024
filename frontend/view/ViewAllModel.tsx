import React from 'react'
import { NFTShowCase } from '@/components/NFTShowCase'
import { sampleNFTDataset } from '@/lib/sampleDataset'

export const ViewAllModel = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {sampleNFTDataset.map((NFTMetaData, index) => {
                    return (
                        <NFTShowCase key={index} NFTMetaData={NFTMetaData} isCreator={false} />
                    )
                })}
            </div>
        </div>
    )
}
