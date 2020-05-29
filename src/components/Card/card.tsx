
import React from "react";
import { workFlowDetails } from "../../type";

interface cardP {
    item: workFlowDetails
    // deleteItem: (id: string) => void
    handler: any
}

const Card = ({ item: { name, status, content, id }, handler: { remove, route } }: cardP) => {

    console.log("id", id)
    return <>
        <div onClick={() => {
            console.log("id")
            return route(id)
        }
        } className="card">
            <button onClick={() => {
                return remove(id)
            }
            }> Delete </button>
            {name}
            {status}
            {content}
        </div>
    </>
}

export default Card;

