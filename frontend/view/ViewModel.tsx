'use client'
import React, { useState } from 'react'
import { MintModelNFT } from '@/components/MintModelNFTButton'
import { MintRemixNFT } from '@/components/MintRemixNFTButton'
import { ModelForm } from '@/components/ModelForm'
import { ModelProps } from '@/types'

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

export const ViewModel = ({ title, description, isRemix }: ViewModelProps) => {

    const [model, setModel] = useState<ModelProps>({ name: '', numParam: '' });
    const [message, setMessage] = useState<string>('');


    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ModelForm modelData={model} setModel={setModel} isRemix={isRemix} />
            </CardContent>
            <CardFooter>
                <div className='text-red-500'>{message}</div>
                {isRemix ?
                    <MintRemixNFT modelData={model} setMessage={setMessage} />
                    :
                    <MintModelNFT modelData={model} setMessage={setMessage} />
                }
            </CardFooter>
        </Card>
    )
}
