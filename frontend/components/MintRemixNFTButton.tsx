// MintRemixNFT.tsx
import React from 'react';
import { Button } from './ui/button';
import { ModelProps } from '@/types';
import { useAccount } from 'wagmi';
import { useRegistrarIPRemix } from '@/hook/useRemixNFTHook';

interface MintRemixNFTProps {
    modelData: ModelProps;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const MintRemixNFT: React.FC<MintRemixNFTProps> = ({ modelData, setMessage }) => {

    const { address } = useAccount();
    const { registerIPRemix, isPending, isConfirming, isConfirmed, error } = useRegistrarIPRemix();

    const onSubmit = async () => {
        // Implement minting logic here
        console.log('Minting NFT for model:', modelData);
    };

    return (
        <Button variant="default" onClick={onSubmit}>
            Mint Remix NFT
        </Button>
    );
};
