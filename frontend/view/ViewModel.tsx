'use client'
import React, { useState } from 'react'
import { MintModelNFT } from '@/components/MintModelNFT'
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



export const ViewModel = () => {

    const [model, setModel] = useState<ModelProps>({ name: '', numParam: '' });
    const [message, setMessage] = useState<string>('');


    return (
        <Card>
            <CardHeader>
                <CardTitle>Create Model NFT</CardTitle>
                <CardDescription>Create a Model NFT and Register the IP</CardDescription>
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
