'use client'

import React, { useState } from 'react'
import { PolicyProps } from '@/types/index'
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'

export const CreatePolicy = () => {
    const [policy, setPolicy] = useState<PolicyProps>({
        attribution: false,
        commercialUse: false,
        commercialAttribution: false,
        commercializerChecker: '',
        commercializerCheckerData: '',
        commercialRevShare: 0,
        derivativesAllowed: false,
        derivativesAttribution: false,
        derivativesApproval: false,
        derivativesReciprocal: false,
        territories: [],
        distributionChannels: [],
        contentRestrictions: [],
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setPolicy((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, like sending the policy to an API
        console.log(policy);
    }

    return (
        <div>dd</div>
    )
}
