import React from "react";
import './style.css';
import { workFlowDetailsT } from "../../type";

export interface CardContent {
    items: Array<workFlowDetailsT>
    children: any
}

export const Cards = ({ items, children }: CardContent) => {
    return <>
        <div className="flex-row m-16">
            {
                items && items.map((item: workFlowDetailsT, index: any) => {
                    return <div key={`${index}_item_${item.id}`} className="flex-column m-16 card p-16">
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