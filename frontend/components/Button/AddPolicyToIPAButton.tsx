'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useAddPolicyToIPA } from '@/hook/useAddPolicyToIPA'
import { PolicyProps } from '@/types'

export const AddPolicyToIPAButton = ({ pilPolicy, tokenAccount }: { pilPolicy: number, tokenAccount: `0x${string}` }) => {

    const { addPolicy, hash, isPending, isConfirming, isConfirmed, error } = useAddPolicyToIPA();

    const onSubmit = async () => {
        // Implement minting logic here
        console.log('Create License');
        console.log('pilPolicy', pilPolicy);
        console.log('tokenAccount', tokenAccount);
        try {
            const res = addPolicy(pilPolicy, tokenAccount);
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
        <>
            <Button onClick={onSubmit} variant='default'>
                {isConfirming ? 'Adding Policy' : 'Add Policy'}
            </Button>
            {isConfirmed && <p>transaction hash: {hash}</p>}
        </>
    )
}
