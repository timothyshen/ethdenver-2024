// MintModelNFT.tsx
'use client'
import React from 'react';
import { Button } from './ui/button';
import { ModelProps } from '@/types';
import { useAccount } from 'wagmi';
import { useRegistrarIP } from '@/hook/useRegisterNFTHook';

interface MintModelNFTProps {
    modelData: ModelProps;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const MintModelNFT: React.FC<MintModelNFTProps> = ({ modelData, setMessage }) => {

    const { address } = useAccount();
    const { registerIP, isPending, isConfirming, isConfirmed, error } = useRegistrarIP();


    const onSubmit = async () => {
        // Implement minting logic here
        console.log('Minting NFT for model:', modelData);
        setMessage('Minting NFT for model...');
        try {
            const createdAt = new Date().toISOString();
            const res = registerIP(modelData.name, createdAt, modelData.numParam, modelData.name);
            console.log('res', res);
            if (isConfirmed) {
                setMessage('NFT Minted Successfully');
            }
        } catch (error) {
            console.error('error', error);
            setMessage('Error minting NFT');
        }
    };

    return (
        <Button variant="default" onClick={onSubmit}>
            {isConfirmed ? "Mint Complete" : "Mint Model NFT"}
        </Button>
    );
};
