import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import React from 'react'
import { ModelNFTMetadataProps } from '@/types'
import { RegisterNFTModel } from './Button/RegisterNFTButton'
import { MintRemixNFT } from "./Button/MintRemixNFTButton"
import { PolicyModel } from "@/view/PolicyModel"
import { LicenseNFTMint } from "./Button/LicenseNFTButton"

type NFTShowCaseProps = {
    NFTMetaData: ModelNFTMetadataProps;
    isCreator: boolean;
}


export const NFTShowCase = ({ NFTMetaData, isCreator }: NFTShowCaseProps) => {

    const sliceAddress = (address: string) => {
        return address.slice(0, 6) + '...' + address.slice(-4);
    }

    return (
        <Card className="m-2">
            <CardHeader>
                <CardTitle>#{Number(NFTMetaData.tokenId)} {NFTMetaData.modelInfo.modelName}</CardTitle>
                <CardDescription>
                    <p>Created by {sliceAddress(NFTMetaData.owner)}</p>
                    <p>TBA by {sliceAddress(NFTMetaData.ipId)}</p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div>Created at: {NFTMetaData.modelInfo.createdAt}</div>
                <div>Num Params: {NFTMetaData.modelInfo.numParams}</div>
            </CardContent>
            <CardFooter>
                <LicenseNFTMint />
            </CardFooter>
        </Card>
    )
}
