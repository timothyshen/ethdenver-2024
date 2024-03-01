import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CreatePolicy } from "@/components/CreatePolicy"
import { CreatePolicyButton } from "@/components/Button/CreatePolicyButton"

import React from 'react'

export const PolicyModel = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <CreatePolicyButton />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <CreatePolicy />
            </DialogContent>
        </Dialog>

    )
}