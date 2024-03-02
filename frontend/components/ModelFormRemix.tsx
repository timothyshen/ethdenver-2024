'use client'
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ModelProps } from '@/types';
import { useAccount } from 'wagmi';

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

    return (
        <>
            <div className='my-2'>
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    type="text"
                    placeholder="Model Name"
                    value={modelData.name}
                    onChange={handleNameChange}
                />
            </div>

            <div className='my-2'>
                <Label htmlFor="numParam">NumParam</Label>
                <Input
                    id="numParam"
                    type="text"
                    placeholder="Num Param"
                    value={modelData.numParam}
                    onChange={handleNumParamChange}
                />
            </div>

            <div className='my-2'>
                <Label htmlFor="numParam">TokenId</Label>
                <Input
                    id="TokenId"
                    type="text"
                    placeholder="TokenId"
                    value={modelData.parentID}
                    onChange={handleNumParamChange}
                />
            </div>
        </>
    );
};
