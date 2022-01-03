import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                        <button type="button" id="sidebarCollapse" class="btn btn-info">
                            <i className="fas fa-align-left"></i>
                        </button>
                    </div>

                </nav>
            </div>
        </div>
    )
}

export default Navbar
