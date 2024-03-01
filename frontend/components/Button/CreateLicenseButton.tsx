import React from 'react'
import { Button } from '../ui/button'
import { useCreateLicense } from '@/hook/useCreateLicense'
import { PolicyProps } from '@/types'

export const LicenseCreate = ({ pilPolicy, tokenAccount }: { pilPolicy: PolicyProps, tokenAccount: `0x${string}` }) => {

    const { createLicense, isPending, isConfirming, isConfirmed, error } = useCreateLicense();

    const onSubmit = async () => {
        // Implement minting logic here
        console.log('Create License');
        try {
            const res = createLicense(pilPolicy, tokenAccount);
            console.log('res', res);
            if (isConfirmed) {
                console.log('License Created Successfully');
            }
            console.log('isConfirmed', isConfirmed);
            console.log(error);

        } catch (error) {
            console.error('error', error);
            console.log('Error creating License NFT');
        }
    };

    return (
        <Button onClick={onSubmit} variant='default'>Create License</Button>
    )
}
