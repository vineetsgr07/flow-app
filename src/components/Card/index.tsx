import React from "react";
import './style.css';
import { workFlowDetails } from "../../type";

export interface CardContent {
    items: Array<workFlowDetails>
    children: any
}

export const Cards = ({ items, children }: CardContent) => {
    return <>
        <div className="flex-row m-16">
            {
                items && items.map((item: workFlowDetails, index: any) => {
                    return <div key={`${index}_item_${item.id}`} className="flex-column m-8">
                        {
                            children(item)
                        }
                    </div>
                })
            }
        </div>
    </>
}

export default Cards;