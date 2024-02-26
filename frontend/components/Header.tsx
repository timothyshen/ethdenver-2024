import React from 'react';
// Assuming Shadn UI has similar components, replace these with actual imports
import { Button } from './ui/button';

import { ConnectKitButton } from 'connectkit';

import NextLink from "next/link";



export function Header() {
    return (
        <div className="w-100vw bg-gray-50 border-b">
            <div className="flex flex-col items-center p-8 gap-3 max-w-4xl mx-auto">
                <h1>
                    Make NFT Story
                </h1>
                <ConnectKitButton />

            </div>
        </div>
    );
}

