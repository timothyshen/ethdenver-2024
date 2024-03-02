'use client'
import React, { useEffect, useState } from 'react'
import { NFTShowCase } from '@/components/NFTShowCase'
import { getAllModelInfo } from '@/contract/IPNFTContract'
import { ModelNFTMetadataProps } from '@/types'


export const ViewAllModel = () => {

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
                {NFTMetaData.map((nftItem, index) => {
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
