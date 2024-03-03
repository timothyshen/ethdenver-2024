'use client'
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ModelProps } from '@/types';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface MintModelNFTProps {
    modelData: ModelProps;
    setModel: React.Dispatch<React.SetStateAction<ModelProps>>;

}

export const ModelForm: React.FC<MintModelNFTProps> = ({ modelData, setModel }) => {


    // Handlers for input changes
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModel({ ...modelData, name: e.target.value });
    };

    const handleNumParamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModel({ ...modelData, numParam: e.target.value });
    };

    const handleTokenID = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModel({ ...modelData, parentID: e.target.value });
    };


    return (
        <>
            <div className='my-2 space-y-2'>
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    type="text"
                    placeholder="Model Name"
                    value={modelData.name}
                    onChange={handleNameChange}
                />
            </div>

            <div className='my-2 space-y-2'>
                <Label htmlFor="numParam">NumParam</Label>
                <Input
                    id="numParam"
                    type="text"
                    placeholder="Num Param"
                    value={modelData.numParam}
                    onChange={handleNumParamChange}
                />
            </div>

            <div className='my-2 space-y-2'>
                <Label htmlFor="TokenId">TokenId</Label>
                <Input
                    id="TokenId"
                    type="text"
                    placeholder="TokenId"
                    value={modelData.parentID}
                    onChange={handleTokenID}
                />
            </div>

            <div className='my-2 space-y-2'>
                <Label htmlFor='workType'>Work Type</Label>
                <Select onValueChange={(event) => (event)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Work Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='Finetuning'>Finetuning</SelectItem>
                        <SelectItem value='Model Inference'>Model Inference</SelectItem>
                        <SelectItem value='Algo improvement'>Algo improvement</SelectItem>
                    </SelectContent>
                </Select>

            </div>
        </>
    );
};
