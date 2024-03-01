import React from 'react'
import { Button } from '../ui/button'
import { useRegisterPolicy } from '@/hook/useRegisterPolicy'


export const CreatePolicyButton = () => {

    const { registerPolicy, isPending, isConfirming, isConfirmed, error } = useRegisterPolicy();

    const onSubmit = async () => {
        // Implement minting logic here
        console.log('Creating Policy NFT');
    };


    return (
        <Button variant='default'>Create Policy NFT</Button>
    )
}
