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
import { LicenseNFTMint } from "./Button/LicenseNFTButton"
import { PolicyModel } from "@/view/PolicyModel"
import { Button } from "./ui/button"

type NFTShowCaseProps = {
    NFTMetaData: ModelNFTMetadataProps;
    isCreator: boolean;
    setModel?: () => void
}


export const NFTShowCase = ({ NFTMetaData, isCreator, setModel }: NFTShowCaseProps) => {

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
                {isCreator ? (
                    <PolicyModel tokenAccount={NFTMetaData.ipId} />
                ) : (
                    <div className="space-x-5">
                        <LicenseNFTMint />
                        <Button variant='default'>Register NFT Model</Button>
                    </div>
                )}
            </CardFooter>
        </Card>
    )
}
