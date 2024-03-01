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
import { RegisterNFTModel } from './Button/RegisterNFTButton'
import { MintRemixNFT } from "./Button/MintRemixNFTButton"
import { PolicyModel } from "@/view/PolicyModel"

type NFTShowCaseProps = {
    NFTMetaData: ModelNFTProps;
    isCreator: boolean;
}


export const NFTShowCase = ({ NFTMetaData, isCreator }: NFTShowCaseProps) => {

    const sliceAddress = (address: string) => {
        return address.slice(0, 6) + '...' + address.slice(-4);
    }

    return (
        <Card className="m-2">
            <CardHeader>
                <CardTitle>{NFTMetaData.modelName}</CardTitle>
                <CardDescription>Created by {sliceAddress(NFTMetaData.creator)}</CardDescription>
            </CardHeader>
            <CardContent>
                <div>Created at: {NFTMetaData.createdAt}</div>
                <div>Num Params: {NFTMetaData.numParams}</div>
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    )
}
