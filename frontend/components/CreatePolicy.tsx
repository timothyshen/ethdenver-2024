import React, { useState } from 'react';
import { PolicyProps } from '@/types/index';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

import { CreateLicenseButton } from "@/components/Button/CreateLicenseButton"
import { CreatePolicyButton } from './Button/CreatePolicyButton';
import { AddPolicyToIPAButton } from './Button/AddPolicyToIPAButton';

interface PolicyModelProps {
    tokenAccount: `0x${string}`;
}

export const CreatePolicy: React.FC<PolicyModelProps> = ({ tokenAccount }) => {
    const [policy, setPolicy] = useState<PolicyProps>({
        attribution: false,
        commercialUse: false,
        commercialAttribution: false,
        commercializerChecker: '',
        commercializerCheckerData: '',
        commercialRevShare: 0,
        derivativesAllowed: false,
        derivativesAttribution: false,
        derivativesApproval: false,
        derivativesReciprocal: false,
        territories: [],
        distributionChannels: [],
        contentRestrictions: [],
    });

    const handleBooleanChange = (name: string, checked: boolean) => {
        setPolicy(prev => ({ ...prev, [name]: checked }));
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPolicy(prev => ({ ...prev, [name]: value }));
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPolicy(prev => ({ ...prev, [name]: Number(value) }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic here
        console.log(policy);
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.entries(policy).map(([key, value]) => {
                if (typeof value === 'boolean') {
                    return (
                        <div key={key} className="flex items-center space-x-2 my-2">
                            <Switch checked={value} onCheckedChange={(checked) => handleBooleanChange(key, checked)} name={key} />
                            <Label htmlFor={key}>{key}</Label>
                        </div>
                    );
                } else if (typeof value === 'string') {
                    return (
                        <div key={key} className="flex items-center space-x-2 my-2">
                            <Label htmlFor={key}>{key}</Label>
                            <Input type="text" value={value} onChange={handleTextChange} name={key} />

                        </div>
                    );
                } else if (typeof value === 'number') {
                    return (
                        <div key={key} className="flex items-center space-x-2 my-2">
                            <Label htmlFor={key}>{key}</Label>
                            <Input type="number" value={value} onChange={handleNumberChange} name={key} />
                        </div>
                    );
                }
                // Handle other types (e.g., arrays) as needed
                return null;
            })}
            <div className='space-x-4 mt-5'>
                <Button variant='default' type='submit'>Test</Button>
                <CreateLicenseButton pilPolicy={policy} tokenAccount={tokenAccount} />
                <CreatePolicyButton pilPolicy={policy} />
                <AddPolicyToIPAButton pilPolicy={policy} tokenAccount={tokenAccount} />
            </div>
        </form>
    );
};
