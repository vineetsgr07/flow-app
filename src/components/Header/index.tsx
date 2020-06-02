import React from 'react';
import './style.css';

const Header = () => {

    const logout = () => {
        localStorage.clear();
        window.location.replace("/");
    }

    // Quick fix
    const routeToWorkFlow = () => {
        if (window.location.pathname !== '/') {
            window.location.replace("/workflow");
        }
    }

    return <>
        <div className="header">
            <div className="logout-btn flex-row flex-space-between">
                <div>
                    <button className="primary-btn rounded-btn m-t-8 m-r-32" name="Filter" onClick={(search: any) => logout()}> Logout </button>
                </div >
                <div onClick={() => routeToWorkFlow()} style={{ cursor: 'pointer' }} className="flow-header m-8"> FLOWAPP </div>
            </div>
        </div>
    </>
}


export default Header;