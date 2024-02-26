import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type ModelProps = {
    name: string
    numParam: string
}

export const ModelForm = (Model: ModelProps) => {

    

    return (
        <>
            <h1>Model informaiton</h1>

            <Label>Name</Label>
            <Input type="text" placeholder="Model Name" />

            <Label htmlFor="name">NumParam</Label>
            <Input type="text" placeholder="Num Param" />

        </>
    )
}
