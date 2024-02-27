// MintModelNFT.tsx
import React from 'react';
import { Button } from './ui/button';
import { ModelProps } from '@/types';
import { useAccount } from 'wagmi';

interface MintModelNFTProps {
    modelData: ModelProps;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const MintModelNFT: React.FC<MintModelNFTProps> = ({ modelData, setMessage }) => {

    const { address } = useAccount();
    


    const onSubmit = async () => {
        // Implement minting logic here
        console.log('Minting NFT for model:', modelData);
    };

    return (
        <Button variant="default" onClick={onSubmit}>
            Mint Model NFT
        </Button>
    );
};
