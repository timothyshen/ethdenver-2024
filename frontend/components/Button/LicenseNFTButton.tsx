import React from 'react'
import { Button } from '../ui/button'
import { useMintLicenseNFT } from '@/hook/useMintLicenseNFT'

export const LicenseNFTMint = () => {

    const { mintLicense, isPending, isConfirming, isConfirmed, error } = useMintLicenseNFT();

    const onSubmit = async () => {
        // Implement minting logic here
        console.log('Minting License NFT');
        try {
            const res = mintLicense();
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
        <Button onClick={onSubmit} variant='default'>
            {isConfirmed ? "Mint Complete" : "Mint License NFT"}
        </Button>
    )
}
