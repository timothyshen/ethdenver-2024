import React from 'react'
import { Button } from '../ui/button'
import { useMintLicenseNFT } from '@/hook/useMintLicenseNFT'

export const LicenseNFTModel = () => {

    const { purchaseLicence, isPending, isConfirming, isConfirmed, error } = useMintLicenseNFT();



    return (
        <Button variant='default'>Purchase License NFT</Button>
    )
}
