import React from 'react';
// Assuming Shadn UI has similar components, replace these with actual imports
import { Button } from './ui/button';

import { ConnectKitButton } from 'connectkit';

import NextLink from "next/link";


import { Suspense } from "react";

export function Header() {
    return (
        <div className="w-100vw bg-gray-50 border-b">
            <div className="flex flex-col items-center p-8 gap-3 max-w-4xl mx-auto">
                <h1>
                    Make NFT Story
                </h1>
                <ConnectKitButton />
                <Navbar />
            </div>
        </div>
    );
}

export function Navbar() {
    return (
        <div>
            <NextLink href="/mint" passHref>
                <Button as="a" color="blue" variant="outline">
                    Mint NFT
                </Button>
            </NextLink>
            <NextLink href="/register" passHref>
                <Button as="a" color="purple" variant="outline" icon={<Icon name="edit" />}>
                    Register IP
                </Button>
            </NextLink>
            <NextLink href="/license" passHref>
                <Button as="a" color="orange" variant="outline" icon={<Icon name="copy" />}>
                    Get License
                </Button>
            </NextLink>
            <NextLink href="/write" passHref>
                <Button as="a" color="teal" variant="solid" icon={<Icon name="arrow-forward" />} iconPosition="right">
                    Write Story
                </Button>
            </NextLink>
        </NavbarContainer>
    );
}
