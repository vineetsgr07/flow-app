import React from 'react';
import './style.css';

const Header = ({ history }: any) => {

    const logout = () => {
        localStorage.clear();
        window.location.replace("/");
    }

    return <>
        <div className="header">
            <div className="logout-btn flex-row flex-space-between">
                <div>
                    <button className="primary-btn rounded-btn m-t-8 m-r-32" name="Filter" onClick={(search: any) => logout()}> Logout </button>
                </div >
                <div  className="flow-header m-8"> FLOWAPP</div>
            </div>
        </div>
    </>
}


export default Header;