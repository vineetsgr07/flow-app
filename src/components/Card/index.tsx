import React from "react";
import './style.css';
import Card from "./card";
import { workFlowDetails } from "../../type";


export interface CardContent {
    items: Array<workFlowDetails>
    handler: any
}

const Cards = ({ items, ...handler }: CardContent) => {

    return <>
        <div className="flex-row">
            {
                items && items.map((item: workFlowDetails) => {
                    return <Card item={item} { ...handler } />
                })
            }
        </div>
    </>
}

// deleteItem={(id: any) => deleteItems(id)} 

export default Cards;