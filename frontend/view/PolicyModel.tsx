import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CreatePolicy } from "@/components/CreatePolicy"
import { Button } from "@/components/ui/button"

import React from 'react'
interface PolicyModelProps {
    tokenAccount: `0x${string}`;
}

export const PolicyModel: React.FC<PolicyModelProps> = ({ tokenAccount }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="default">Create Policy and License</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <CreatePolicy tokenAccount={tokenAccount} />
            </DialogContent>
        </Dialog>

    )
}
