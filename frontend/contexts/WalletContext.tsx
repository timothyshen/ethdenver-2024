'use client'

import React, {
    createContext,
    ReactNode, useEffect, useState
} from 'react';
import { createWalletClient, custom, WalletClient } from "viem";
import { sepolia } from "wagmi/chains";

interface WalletContextProviderProps {
    children: ReactNode;
}

interface IWalletContext {
    walletClient: WalletClient | undefined;
}

export const WalletContext = createContext<IWalletContext>(
    {} as IWalletContext
);


export function WalletContextProvider({
    children,
}: WalletContextProviderProps) {

    const [localWindow, setWindow] = useState<Window>()
    const [walletClient, setWalletClient] = useState<WalletClient | undefined>()

    useEffect(() => {
        if (window) {
            setWindow(window)
            if (window && window.ethereum) {
                const client = createWalletClient({
                    chain: sepolia,
                    transport: custom(window.ethereum),
                });
                setWalletClient(client)
            } else {
                console.error("Ethereum provider is not available.");
            }
        }
    }, []);


    return (
        <WalletContext.Provider value={{ walletClient }}>
            {children}
        </WalletContext.Provider>
    );
}
