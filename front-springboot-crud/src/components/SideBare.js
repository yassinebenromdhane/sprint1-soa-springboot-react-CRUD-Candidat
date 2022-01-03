import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBare = () => {
    return (
        <div>
            <nav id="sidebar">
                <div id="dismiss">
                    <i className="fas fa-arrow-left"></i>
                </div>

                <div className="sidebar-header">
                    <h5>Admin</h5>
                </div>

                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <NavLink to="/" className='btn btn-outline-light' exact={true}> Home</NavLink>
                    <NavLink to="/add" className='btn btn-outline-light' exact={true}> Add Candidat</NavLink>
                    
                </div>
            </nav>
        </div>
    )
}

export default SideBare
