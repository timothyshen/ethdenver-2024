import React from 'react'
import { ViewAllModel } from '@/view/ViewAllModel'
import { ViewAllModelCreator } from '@/view/ViewAllModelCreater'

export const ModelAll = () => {
    return (
        <div className=" mt-5">
            <h1>Model Creation</h1>

            <div className="h-[300px] overflow-auto">
                <ViewAllModel />
            </div>

            <h1>My Model Creation</h1>
            <div className="mt-5 h-[300px] overflow-auto">
                <ViewAllModelCreator />
            </div>
        </div>
    )
}
