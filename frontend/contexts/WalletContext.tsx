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
            const client = createWalletClient({
                chain: sepolia,
                transport: custom(localWindow?.ethereum!),
            })
            setWalletClient(client)
        }
    }, []);


    return (
        <WalletContext.Provider value={{ walletClient }}>
            {children}
        </WalletContext.Provider>
    );
}
