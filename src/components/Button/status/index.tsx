import React from "react";
import './style.css';

const Status = ({ status, statusHandler }: any) => {

    return <>
        <div onClick={(e) => statusHandler(e)} id="tickcontainer">
            <div className={`tickbg ${status.toLowerCase()}`}>
                <div className="tick">
                </div>
            </div>
        </div>
    </>
}

export default Status;