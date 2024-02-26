import React from 'react'
import { Button } from './ui/button'
import { ModelProps } from '@/types'




export const MintModelNFT = (ModelData: ModelProps) => {
    

    const mintNFT = async () => {
        console.log(ModelData)
    }

    return (
        <Button variant="default" onClick={mintNFT}>
            Mint Model NFT
        </Button>
    )
}
