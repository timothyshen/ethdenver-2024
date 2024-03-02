import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { CreateLicenseButton } from './Button/CreateLicenseButton';
import { CreatePolicyButton } from './Button/CreatePolicyButton';
import { AddPolicyToIPAButton } from './Button/AddPolicyToIPAButton';

interface PolicyModelProps {
    tokenAccount: `0x${string}`;
}

export enum PolicyFlavor {
    Default = "Default",
    NonCommercialSocialRemixing = "NonCommercialSocialRemixing",
    CommercialUse = "CommercialUse",
    CommercialRemix = "CommercialRemix",
}

export const SelectPolicy: React.FC<PolicyModelProps> = ({ tokenAccount }) => {
    const [policyFlavor, setPolicyFlavor] = React.useState<number>(0);

    // Function to handle selection change
    const handleSelectPolicyFlavor = (selectedValue: string) => {
        // Find the index of the selected value in the enum
        const index = Object.values(PolicyFlavor).indexOf(selectedValue as PolicyFlavor);
        if (index >= 0) { // Check if the value is found
            setPolicyFlavor(index);
        } else {
            console.error("Selected policy flavor not found in enum.");
        }
    };

    return (
        <>
            <Select onValueChange={(event) => handleSelectPolicyFlavor(event)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Policy Flavor" />
                </SelectTrigger>
                <SelectContent>
                    {Object.entries(PolicyFlavor).filter(([key]) => isNaN(Number(key))).map(([key, value]) => (
                        <SelectItem key={key} value={value}>
                            {value}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <div className='space-x-4 mt-5'>
                <CreatePolicyButton pilPolicy={1} />
                <AddPolicyToIPAButton pilPolicy={1} tokenAccount={tokenAccount} />
            </div>
        </>
    );
}