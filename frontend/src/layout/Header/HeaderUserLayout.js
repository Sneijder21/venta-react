import React from 'react';

const HeaderUserLayout = () => {
    return (
        <div className="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
            <div className="cursor-pointer symbol symbol-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" data-kt-menu-flip="bottom">
                        <img src="assets/media/avatars/150-2.jpg" alt="metronic" />
                    </div>

            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">

                        <div className="menu-item px-3">
                            <div className="menu-content d-flex align-items-center px-3">
        
                                <div className="symbol symbol-50px me-5">
                                    <img alt="Logo" src="assets/media/avatars/150-2.jpg" />
                                </div>
        
        
                                <div className="d-flex flex-column">
                                    <div className="fw-bolder d-flex align-items-center fs-5">Max Smith
                                    <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span></div>
                                    <a href="#" className="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
                                </div>
        
                            </div>
                        </div>

                        <div className="separator my-2"></div>

                        <div className="menu-item px-5">
                            <a href="account/overview.html" className="menu-link px-5">My Profile</a>
                        </div>

                        <div className="menu-item px-5">
                            <a href="pages/projects/list.html" className="menu-link px-5">
                                <span className="menu-text">My Projects</span>
                                <span className="menu-badge">
                                    <span className="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
                                </span>
                            </a>
                        </div>

                        <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start" data-kt-menu-flip="center, top">
                            <a href="#" className="menu-link px-5">
                                <span className="menu-title">My Subscription</span>
                                <span className="menu-arrow"></span>
                            </a>
    
                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
        
                                <div className="menu-item px-3">
                                    <a href="account/referrals.html" className="menu-link px-5">Referrals</a>
                                </div>
        
                                <div className="menu-item px-3">
                                    <a href="account/statements.html" className="menu-link d-flex flex-stack px-5">Statements
                                    <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="View your statements"></i></a>
                                </div>
        
                                <div className="separator my-2"></div>
        
                                <div className="menu-item px-3">
                                    <div className="menu-content px-3">
                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                            <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
                                            <span className="form-check-label text-muted fs-7">Notifications</span>
                                        </label>
                                    </div>
                                </div>
        
                            </div>
    
                        </div>

                        <div className="menu-item px-5">
                            <a href="account/statements.html" className="menu-link px-5">My Statements</a>
                        </div>

                        <div className="separator my-2"></div>

                        <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start" data-kt-menu-flip="center, top">
                            <a href="#" className="menu-link px-5">
                                <span className="menu-title position-relative">Language
                                <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
                                <img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="metronic" /></span></span>
                            </a>
    
                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
        
                                <div className="menu-item px-3">
                                    <a href="account/settings.html" className="menu-link d-flex px-5 active">
                                    <span className="symbol symbol-20px me-4">
                                        <img className="rounded-1" src="assets/media/flags/united-states.svg" alt="metronic" />
                                    </span>English</a>
                                </div>
        
                                <div className="menu-item px-3">
                                    <a href="account/settings.html" className="menu-link d-flex px-5">
                                    <span className="symbol symbol-20px me-4">
                                        <img className="rounded-1" src="assets/media/flags/france.svg" alt="metronic" />
                                    </span>French</a>
                                </div>
        
                            </div>
    
                        </div>

                        <div className="menu-item px-5 my-1">
                            <a href="account/settings.html" className="menu-link px-5">Account Settings</a>
                        </div>

                        <div className="menu-item px-5">
                            <a href="authentication/flows/basic/sign-in.html" className="menu-link px-5">Sign Out</a>
                        </div>

                    </div>
        </div>
    );
}
export default HeaderUserLayout;