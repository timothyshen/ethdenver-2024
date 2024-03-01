'use client'
import React, { useState } from 'react'
import { MintModelNFT } from '@/components/Button/MintModelNFTButton'
import { MintRemixNFT } from '@/components/Button/MintRemixNFTButton'
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
                <ModelForm modelData={model} setModel={setModel} />
            </CardContent>
            <CardFooter>
                <div className='text-red-500'>{message}</div>
                <MintModelNFT modelData={model} setMessage={setMessage} />
            </CardFooter>
        </Card>
    )
}
