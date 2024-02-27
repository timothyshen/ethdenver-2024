import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import React from 'react'
import { ModelNFTProps } from '@/types'



export const NFTShowCase = (NFTMetaData: ModelNFTProps) => {

    const sliceAddress = (address: string) => {
        return address.slice(0, 6) + '...' + address.slice(-4);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>{NFTMetaData.modelName}</CardTitle>
                <CardDescription>Created by {sliceAddress(NFTMetaData.creator)}</CardDescription>
            </CardHeader>
            <CardContent>
                <div>Created at: {NFTMetaData.createdAt}</div>
                <div>Num Params: {NFTMetaData.numParams}</div>
            </CardContent>
            <CardFooter>
                <div className='text-red-500'>NFT Showcase</div>
            </CardFooter>
        </Card>
    )
}
