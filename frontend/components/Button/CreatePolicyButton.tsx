import React from 'react'
import { Button } from '../ui/button'
import { useRegisterPolicy } from '@/hook/useRegisterPolicy'
import { PolicyProps } from '@/types'


export const CreatePolicyButton = ({ pilPolicy }: { pilPolicy: PolicyProps }) => {

    const { registerPolicy, isPending, isConfirming, isConfirmed, error } = useRegisterPolicy();

    const onSubmit = async () => {
        // Implement minting logic here
        console.log('Creating Policy NFT');
        try {
            const res = registerPolicy(pilPolicy);
            console.log('res', res);
            if (isConfirmed) {
                console.log('Policy Created Successfully');
            }
            console.log('isConfirmed', isConfirmed);
            console.log(error);

        } catch (error) {
            console.error('error', error);
            console.log('Error creating Policy NFT');
        }
    };


    return (
        <Button onClick={onSubmit} variant='default'>Create Policy NFT</Button>
    )
}
