// MintRemixNFT.tsx
'use client'

import React from 'react';
import { Button } from '../ui/button';
import { ModelProps } from '@/types';
import { useAccount } from 'wagmi';
import { useRegistrarIPRemix } from '@/hook/useRegistrarIPRemix';

interface MintRemixNFTProps {
    licenseId: BigInt[];
    tokenAccount: `0x${string}`
    tokenId: BigInt;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const MintRemixNFT: React.FC<MintRemixNFTProps> = ({ licenseId, tokenAccount, tokenId, setMessage }) => {

    const { registerIPRemix, isPending, isConfirming, isConfirmed, error } = useRegistrarIPRemix();

    const onSubmit = async () => {
        // Implement minting logic here
        console.log('Minting NFT for model:', tokenId);
        setMessage('Minting NFT for model...');

        try {
            //TokenId
            const res = registerIPRemix(licenseId, tokenAccount, tokenId);
            console.log('res', res);
            if (isConfirmed) {
                setMessage('Remix Created Successfully');
            }
            console.log('isConfirmed', isConfirmed);
            console.log(error);

        } catch (error) {
            console.error('error', error);
            setMessage('Error minting NFT');
        }
    };

    return (
        <Button variant="default" onClick={onSubmit}>
            Register Remix
        </Button>
    );
};
