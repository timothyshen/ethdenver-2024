'use client'

import React, { useState } from 'react'
import { PolicyProps } from '@/types/index'

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
        <form onSubmit={handleSubmit}>
            <label>
                Attribution
                <input
                    name="attribution"
                    type="checkbox"
                    checked={policy.attribution}
                    onChange={handleChange}
                />
            </label>
            <label>
                Commercial Use
                <input
                    name="commercialUse"
                    type="checkbox"
                    checked={policy.commercialUse}
                    onChange={handleChange}
                />
            </label>
            {/* Add more inputs for other boolean fields similarly */}

            <label>
                Commercializer Checker (Address)
                <input
                    name="commercializerChecker"
                    type="text"
                    value={policy.commercializerChecker}
                    onChange={handleChange}
                />
            </label>
            {/* Handle other string fields similarly */}

            <label>
                Commercial Revenue Share
                <input
                    name="commercialRevShare"
                    type="number"
                    value={policy.commercialRevShare}
                    onChange={handleChange}
                />
            </label>
            {/* Add inputs for array fields. You might need to use multi-select components or similar */}

            <button type="submit">Submit Policy</button>
        </form>
    )
}
