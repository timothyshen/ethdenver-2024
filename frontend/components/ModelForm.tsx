import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type ModelProps = {
    name: string;
    numParam: string;
};

export const ModelForm = () => {
    // State initialization
    const [model, setModel] = useState<ModelProps>({ name: '', numParam: '' });

    // Handlers for input changes
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModel({ ...model, name: e.target.value });
    };

    const handleNumParamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModel({ ...model, numParam: e.target.value });
    };

    return (
        <>
            <h1>Model Information</h1>

            <Label htmlFor="name">Name</Label>
            <Input
                id="name"
                type="text"
                placeholder="Model Name"
                value={model.name}
                onChange={handleNameChange}
            />

            <Label htmlFor="numParam">NumParam</Label>
            <Input
                id="numParam"
                type="text"
                placeholder="Num Param"
                value={model.numParam}
                onChange={handleNumParamChange}
            />
        </>
    );
};
