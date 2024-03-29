'use client'
import React, { useEffect, useState } from 'react'
import { MintRemixNFT } from '@/components/Button/MintRemixNFTButton'
import { ModelForm } from '@/components/ModelFormRemix'
import { ModelProps } from '@/types'
import { getModelInfoByTokenId } from '@/contract/IPNFTContract'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type ViewModelProps = {
    title: string;
    description: string;
    isRemix?: boolean;
}

export const ViewModelRemix = ({ title, description }: ViewModelProps) => {

    const [model, setModel] = useState<ModelProps>({ name: '', numParam: '' });
    const [message, setMessage] = useState<string>('');
    const [modelInfo, setModelInfo] = useState<any>({});

    useEffect(() => {
        const retrieveModelInfo = async () => {
            const modelInfo = await getModelInfoByTokenId(0);
            console.log('modelInfo', modelInfo);
            setModelInfo(modelInfo);
        }
        retrieveModelInfo();

    }, [])

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ModelForm modelData={model} setModel={setModel} />
            </CardContent>
            <CardFooter>
                <div className='text-red-500'>{message}</div>
                <MintRemixNFT licenseId={[BigInt(1)]} tokenAccount={modelInfo.ipId} tokenId={BigInt(1)} setMessage={setMessage} />
            </CardFooter>
        </Card>
    )
}
