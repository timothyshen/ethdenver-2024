import React from 'react';

import { ConnectKitButton } from 'connectkit';

export const Header = () => {
    return (
        <div className="w-100vw bg-gray-50 border-b">
            <div className="flex flex-col items-center p-8 gap-3 max-w-4xl mx-auto">
                <h1>
                    Make AI Bot NFT
                </h1>
                <ConnectKitButton />
            </div>
        </div>
    )
}

