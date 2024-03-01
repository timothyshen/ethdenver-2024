'use client'
import React, { useEffect, useState } from 'react'
import { NFTShowCase } from '@/components/NFTShowCase'
import { sampleNFTDataset } from '@/lib/sampleDataset'
import { getAllModelInfo } from '@/contract/ModelNFTCOntract'

type ViewAllModelProps = {
    setModel: React.Dispatch<React.SetStateAction<any>>;
}

export const ViewAllModel = ({ setModel }: ViewAllModelProps) => {

    const [NFTMetaData, setNFTMetaData] = useState<any[]>([])
    
    useEffect(() => {
        async function fetchData() {
            const data = await getAllModelInfo()
            console.log(data)
            setNFTMetaData(data)
        }
        fetchData()
    }, [])



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
