import React from 'react';
import Notification3Layout from '../Notifications/Notification3Layout';
import Notification2Layout from '../Notifications/Notification2Layout';
import Notification1Layout from '../Notifications/Notification1Layout';

import PreferencesLayout from '../Search/PreferencesLayout';
import AdvancedSearchLayout from '../Search/AdvancedSearchLayout';
import SearchResultLayout from '../Search/SearchResultLayout';

import HeaderUserLayout from './HeaderUserLayout';

const AsideMenuMobileLayout = () => {
    return (
    <div id="kt_header" className="header align-items-stretch">
		
        <div className="container-fluid d-flex align-items-stretch justify-content-between">

            <div className="d-flex align-items-center d-lg-none ms-n3 me-1" data-bs-toggle="tooltip" title="Show aside menu">
                <div className="btn btn-icon btn-active-light-primary" id="kt_aside_mobile_toggle">
    
                    <span className="svg-icon svg-icon-2x mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24" />
                                <rect fill="#000000" x="4" y="5" width="16" height="3" rx="1.5" />
                                <path d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L18.5,10 C19.3284271,10 20,10.6715729 20,11.5 C20,12.3284271 19.3284271,13 18.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z" fill="#000000" opacity="0.3" />
                            </g>
                        </svg>
                    </span>
    
                </div>
            </div>


            <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                <a href="index.html" className="d-lg-none">
                    <img alt="Logo" src="assets/media/logos/logo-1-dark.svg" className="h-15px" />
                </a>
            </div>


            <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">

                <div className="d-flex align-items-stretch" id="kt_header_nav">
    
                    <div className="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-place="true" data-kt-place-mode="prepend" data-kt-place-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
        
                        <div className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch" id="#kt_header_menu" data-kt-menu="true">
                            <div className="menu-item me-lg-1">
                                <a className="menu-link py-3" href="index.html">
                                    <span className="menu-title">Dashboard</span>
                                </a>
                            </div>
                            <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" className="menu-item here show menu-lg-down-accordion me-lg-1">
                                <span className="menu-link py-3">
                                    <span className="menu-title">Crafted</span>
                                    <span className="menu-arrow d-lg-none"></span>
                                </span>
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                        <span className="menu-link py-3">
                                            <span className="menu-icon">
                                
                                                <span className="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" fill="#000000" opacity="0.3" />
                                                        <path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" fill="#000000" />
                                                    </svg>
                                                </span>
                                
                                            </span>
                                            <span className="menu-title">Pages</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                            <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                <span className="menu-link py-3">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Profile</span>
                                                    <span className="menu-arrow"></span>
                                                </span>
                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                                    <div className="menu-item">
                                                        <a className="menu-link py-3" href="pages/profile/overview.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Overview</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                        <span className="menu-link py-3">
                                            <span className="menu-icon">
                                
                                                <span className="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <polygon points="0 0 24 0 24 24 0 24" />
                                                            <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                            <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
                                                        </g>
                                                    </svg>
                                                </span>
                                
                                            </span>
                                            <span className="menu-title">Account</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                            <div className="menu-item">
                                                <a className="menu-link py-3" href="account/overview.html">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Overview</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                        <span className="menu-link py-3">
                                            <span className="menu-icon">
                                
                                                <span className="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M3.11117 13.2288C3.27137 11.0124 5.01376 9.29156 7.2315 9.15059C8.55778 9.06629 10.1795 9 12 9C13.8205 9 15.4422 9.06629 16.7685 9.15059C18.9862 9.29156 20.7286 11.0124 20.8888 13.2288C20.9535 14.1234 21 15.085 21 16C21 16.915 20.9535 17.8766 20.8888 18.7712C20.7286 20.9876 18.9862 22.7084 16.7685 22.8494C15.4422 22.9337 13.8205 23 12 23C10.1795 23 8.55778 22.9337 7.23151 22.8494C5.01376 22.7084 3.27137 20.9876 3.11118 18.7712C3.04652 17.8766 3 16.915 3 16C3 15.085 3.04652 14.1234 3.11117 13.2288Z" fill="#12131A" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 16.7324C13.5978 16.3866 14 15.7403 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 15.7403 10.4022 16.3866 11 16.7324V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V16.7324Z" fill="#12131A" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10V6Z" fill="#12131A" />
                                                    </svg>
                                                </span>
                                
                                            </span>
                                            <span className="menu-title">Authentication</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                            <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                <span className="menu-link py-3">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Basic Flow</span>
                                                    <span className="menu-arrow"></span>
                                                </span>
                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                                    <div className="menu-item">
                                                        <a className="menu-link py-3" href="authentication/flows/basic/sign-in.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Sign-in</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item here show menu-lg-down-accordion">
                                        <span className="menu-link py-3">
                                            <span className="menu-icon">
                                
                                                <span className="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <path d="M6,9 L6,15 C6,16.6568542 7.34314575,18 9,18 L15,18 L15,18.8181818 C15,20.2324881 14.2324881,21 12.8181818,21 L5.18181818,21 C3.76751186,21 3,20.2324881 3,18.8181818 L3,11.1818182 C3,9.76751186 3.76751186,9 5.18181818,9 L6,9 Z" fill="#000000" fill-rule="nonzero" />
                                                        <path d="M10.1818182,4 L17.8181818,4 C19.2324881,4 20,4.76751186 20,6.18181818 L20,13.8181818 C20,15.2324881 19.2324881,16 17.8181818,16 L10.1818182,16 C8.76751186,16 8,15.2324881 8,13.8181818 L8,6.18181818 C8,4.76751186 8.76751186,4 10.1818182,4 Z" fill="#000000" opacity="0.3" />
                                                    </svg>
                                                </span>
                                
                                            </span>
                                            <span className="menu-title">Modals</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                            <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item here show menu-lg-down-accordion">
                                                <span className="menu-link py-3">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">General</span>
                                                    <span className="menu-arrow"></span>
                                                </span>
                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                                    <div className="menu-item">
                                                        <a className="menu-link py-3" href="modals/general/invite-friends.html">
                                                            <span className="menu-bullet">
                                                                <span className="bullet bullet-dot"></span>
                                                            </span>
                                                            <span className="menu-title">Invite Friends</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                        <span className="menu-link py-3">
                                            <span className="menu-icon">
                                
                                                <span className="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24" />
                                                            <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
                                                            <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
                                                        </g>
                                                    </svg>
                                                </span>
                                
                                            </span>
                                            <span className="menu-title">Widgets</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                            <div className="menu-item">
                                                <a className="menu-link py-3" href="widgets/lists.html">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Lists</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-lg-1">
                                <span className="menu-link py-3">
                                    <span className="menu-title">Apps</span>
                                    <span className="menu-arrow d-lg-none"></span>
                                </span>
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                        <span className="menu-link py-3">
                                            <span className="menu-icon">
                                
                                                <span className="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <path d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                        <path d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
                                                    </svg>
                                                </span>
                                
                                            </span>
                                            <span className="menu-title">Customers</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                            <div className="menu-item">
                                                <a className="menu-link py-3" href="apps/customers/getting-started.html">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Getting Started</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                        <span className="menu-link py-3">
                                            <span className="menu-icon">
                                
                                                <span className="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.25" d="M3.19406 11.1644C3.09247 10.5549 3.56251 10 4.18045 10H19.8195C20.4375 10 20.9075 10.5549 20.8059 11.1644L19.4178 19.4932C19.1767 20.9398 17.9251 22 16.4586 22H7.54138C6.07486 22 4.82329 20.9398 4.58219 19.4932L3.19406 11.1644Z" fill="#7E8299" />
                                                        <path d="M2 9.5C2 8.67157 2.67157 8 3.5 8H20.5C21.3284 8 22 8.67157 22 9.5C22 10.3284 21.3284 11 20.5 11H3.5C2.67157 11 2 10.3284 2 9.5Z" fill="#7E8299" />
                                                        <path d="M10 13C9.44772 13 9 13.4477 9 14V18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18V14C11 13.4477 10.5523 13 10 13Z" fill="#7E8299" />
                                                        <path d="M14 13C13.4477 13 13 13.4477 13 14V18C13 18.5523 13.4477 19 14 19C14.5523 19 15 18.5523 15 18V14C15 13.4477 14.5523 13 14 13Z" fill="#7E8299" />
                                                        <g opacity="0.25">
                                                            <path d="M10.7071 3.70711C11.0976 3.31658 11.0976 2.68342 10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711C4.68342 9.09763 5.31658 9.09763 5.70711 8.70711L10.7071 3.70711Z" fill="#7E8299" />
                                                            <path d="M13.2929 3.70711C12.9024 3.31658 12.9024 2.68342 13.2929 2.29289C13.6834 1.90237 14.3166 1.90237 14.7071 2.29289L19.7071 7.29289C20.0976 7.68342 20.0976 8.31658 19.7071 8.70711C19.3166 9.09763 18.6834 9.09763 18.2929 8.70711L13.2929 3.70711Z" fill="#7E8299" />
                                                        </g>
                                                    </svg>
                                                </span>
                                
                                            </span>
                                            <span className="menu-title">Subscriptions</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                            <div className="menu-item">
                                                <a className="menu-link py-3" href="apps/subscriptions/getting-started.html">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Getting Started</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-lg-1">
                                <span className="menu-link py-3">
                                    <span className="menu-title">Resources</span>
                                    <span className="menu-arrow d-lg-none"></span>
                                </span>
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                        <a className="menu-link py-3" href="documentation/base/utilities.html">
                                            <span className="menu-icon">
                                
                                                <span className="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24" />
                                                            <path d="M5.5,4 L9.5,4 C10.3284271,4 11,4.67157288 11,5.5 L11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L5.5,8 C4.67157288,8 4,7.32842712 4,6.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 Z M14.5,16 L18.5,16 C19.3284271,16 20,16.6715729 20,17.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,17.5 C13,16.6715729 13.6715729,16 14.5,16 Z" fill="#000000" />
                                                            <path d="M5.5,10 L9.5,10 C10.3284271,10 11,10.6715729 11,11.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,12.5 C20,13.3284271 19.3284271,14 18.5,14 L14.5,14 C13.6715729,14 13,13.3284271 13,12.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z" fill="#000000" opacity="0.3" />
                                                        </g>
                                                    </svg>
                                                </span>
                                
                                            </span>
                                            <span className="menu-title">Components</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-lg-1">
                                <span className="menu-link py-3">
                                    <span className="menu-title">Mega Menu</span>
                                    <span className="menu-arrow d-lg-none"></span>
                                </span>
                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown w-100 w-lg-600px p-5 p-lg-5">
                    
                                    <div className="row" data-kt-menu-dismiss="true">
                        
                                        <div className="col-lg-4 border-left-lg-1">
                                            <div className="menu-inline menu-column menu-active-bg">
                                                <div className="menu-item">
                                                    <a href="#" className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Example link</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                        
                        
                                        <div className="col-lg-4 border-left-lg-1">
                                            <div className="menu-inline menu-column menu-active-bg">
                                                <div className="menu-item">
                                                    <a href="#" className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Example link</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                        
                        
                                        <div className="col-lg-4 border-left-lg-1">
                                            <div className="menu-inline menu-column menu-active-bg">
                                                <div className="menu-item">
                                                    <a href="#" className="menu-link">
                                                        <span className="menu-bullet">
                                                            <span className="bullet bullet-dot"></span>
                                                        </span>
                                                        <span className="menu-title">Example link</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                        
                                    </div>
                    
                                </div>
                            </div>
                        </div>
        
                    </div>
    
                </div>


                <div className="d-flex align-items-stretch flex-shrink-0">
    
                    <div className="d-flex align-items-stretch flex-shrink-0">
        
                        <div className="d-flex align-items-stretch ms-1 ms-lg-3">
            
                            <div id="kt_header_search" className="d-flex align-items-stretch" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto" data-kt-menu-overflow="false" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end" data-kt-menu-flip="bottom">
                
                                <div className="d-flex align-items-center" data-kt-search-element="toggle" id="kt_header_search_toggle">
                                    <div className="btn btn-icon btn-active-light-primary">
                        
                                        <span className="svg-icon svg-icon-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24" />
                                                    <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                    <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero" />
                                                </g>
                                            </svg>
                                        </span>
                        
                                    </div>
                                </div>
                
                
                                <div data-kt-search-element="content" className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px">

                                    <SearchResultLayout/>

                                    <AdvancedSearchLayout/>
                
                                    <PreferencesLayout/>
                                    
                                </div>
        
                            </div>
    
                        </div>


                        <div className="d-flex align-items-center ms-1 ms-lg-3">
    
                            <div className="btn btn-icon btn-active-light-primary w-40px h-40px" id="kt_activities_toggle">
        
                                <span className="svg-icon svg-icon-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24" />
                                            <rect fill="#000000" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5" />
                                            <rect fill="#000000" x="8" y="9" width="3" height="11" rx="1.5" />
                                            <rect fill="#000000" x="18" y="11" width="3" height="9" rx="1.5" />
                                            <rect fill="#000000" x="3" y="13" width="3" height="7" rx="1.5" />
                                        </g>
                                    </svg>
                                </span>
        
                            </div>
    
                        </div>


                        <div className="d-flex align-items-center ms-1 ms-lg-3">
    
                            <div className="btn btn-icon btn-active-light-primary position-relative w-40px h-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" data-kt-menu-flip="bottom">
        
                                <span className="svg-icon svg-icon-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <path d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill="#000000" />
                                        <path d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill="#000000" opacity="0.3" />
                                    </svg>
                                </span>
        
                                <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
                            </div>
    
                            <div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true">
        
                                <div className="d-flex flex-column bgi-no-repeat rounded-top"
                                style={{backgroundImage:'url("assets/media//misc/pattern-1.jpg")'}}
                                >
            
                                    <h3 className="text-white fw-bold px-9 mt-10 mb-6">Notifications
                                    <span className="fs-8 opacity-75 ps-3">24 reports</span></h3>
            
            
                                    <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-bold px-9">
                                        <li className="nav-item">
                                            <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
                                        </li>
                                    </ul>
            
                                </div>
        
        
                                <div className="tab-content">
            
                                    <Notification1Layout/>
                                    <Notification2Layout/>
                                    
                                    <Notification3Layout/>
            
                                </div>
        
                            </div>
    
    
                        </div>


                        <div className="d-flex align-items-center ms-1 ms-lg-3">
    
                            <div className="btn btn-icon btn-active-light-primary w-40px h-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" data-kt-menu-flip="bottom">
        
                                <span className="svg-icon svg-icon-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24" />
                                            <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
                                            <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
                                        </g>
                                    </svg>
                                </span>
        
                            </div>
    
                            <div className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px" data-kt-menu="true">
        
                                <div className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10"
                                style={{backgroundImage: 'url("assets/media//misc/pattern-1.jpg")'}}
                                >
            
                                    <h3 className="text-white fw-bold mb-3">Quick Links</h3>
            
            
                                    <span className="badge bg-success py-2 px-3">25 pending tasks</span>
            
                                </div>
        
        
                                <div className="row g-0">
            
                                    <div className="col-6">
                                        <a href="pages/projects/budget.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom">
                    
                                            <span className="svg-icon svg-icon-3x svg-icon-success mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M4.3618034,10.2763932 L4.8618034,9.2763932 C4.94649941,9.10700119 5.11963097,9 5.30901699,9 L15.190983,9 C15.4671254,9 15.690983,9.22385763 15.690983,9.5 C15.690983,9.57762255 15.6729105,9.65417908 15.6381966,9.7236068 L15.1381966,10.7236068 C15.0535006,10.8929988 14.880369,11 14.690983,11 L4.80901699,11 C4.53287462,11 4.30901699,10.7761424 4.30901699,10.5 C4.30901699,10.4223775 4.32708954,10.3458209 4.3618034,10.2763932 Z M14.6381966,13.7236068 L14.1381966,14.7236068 C14.0535006,14.8929988 13.880369,15 13.690983,15 L4.80901699,15 C4.53287462,15 4.30901699,14.7761424 4.30901699,14.5 C4.30901699,14.4223775 4.32708954,14.3458209 4.3618034,14.2763932 L4.8618034,13.2763932 C4.94649941,13.1070012 5.11963097,13 5.30901699,13 L14.190983,13 C14.4671254,13 14.690983,13.2238576 14.690983,13.5 C14.690983,13.5776225 14.6729105,13.6541791 14.6381966,13.7236068 Z" fill="#000000" opacity="0.3" />
                                                        <path d="M17.369,7.618 C16.976998,7.08599734 16.4660031,6.69750122 15.836,6.4525 C15.2059968,6.20749878 14.590003,6.085 13.988,6.085 C13.2179962,6.085 12.5180032,6.2249986 11.888,6.505 C11.2579969,6.7850014 10.7155023,7.16999755 10.2605,7.66 C9.80549773,8.15000245 9.45550123,8.72399671 9.2105,9.382 C8.96549878,10.0400033 8.843,10.7539961 8.843,11.524 C8.843,12.3360041 8.96199881,13.0779966 9.2,13.75 C9.43800119,14.4220034 9.7774978,14.9994976 10.2185,15.4825 C10.6595022,15.9655024 11.1879969,16.3399987 11.804,16.606 C12.4200031,16.8720013 13.1129962,17.005 13.883,17.005 C14.681004,17.005 15.3879969,16.8475016 16.004,16.5325 C16.6200031,16.2174984 17.1169981,15.8010026 17.495,15.283 L19.616,16.774 C18.9579967,17.6000041 18.1530048,18.2404977 17.201,18.6955 C16.2489952,19.1505023 15.1360064,19.378 13.862,19.378 C12.6999942,19.378 11.6325049,19.1855019 10.6595,18.8005 C9.68649514,18.4154981 8.8500035,17.8765035 8.15,17.1835 C7.4499965,16.4904965 6.90400196,15.6645048 6.512,14.7055 C6.11999804,13.7464952 5.924,12.6860058 5.924,11.524 C5.924,10.333994 6.13049794,9.25950479 6.5435,8.3005 C6.95650207,7.34149521 7.5234964,6.52600336 8.2445,5.854 C8.96550361,5.18199664 9.8159951,4.66400182 10.796,4.3 C11.7760049,3.93599818 12.8399943,3.754 13.988,3.754 C14.4640024,3.754 14.9609974,3.79949954 15.479,3.8905 C15.9970026,3.98150045 16.4939976,4.12149906 16.97,4.3105 C17.4460024,4.49950095 17.8939979,4.7339986 18.314,5.014 C18.7340021,5.2940014 19.0909985,5.62999804 19.385,6.022 L17.369,7.618 Z" fill="#000000" />
                                                    </g>
                                                </svg>
                                            </span>
                    
                                            <span className="fs-5 fw-bold text-gray-800 mb-0">Accounting</span>
                                            <span className="fs-7 text-gray-400">eCommerce</span>
                                        </a>
                                    </div>
            
            
                                    <div className="col-6">
                                        <a href="pages/projects/settings.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom">
                    
                                            <span className="svg-icon svg-icon-3x svg-icon-success mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <path d="M14.8571499,13 C14.9499122,12.7223297 15,12.4263059 15,12.1190476 L15,6.88095238 C15,5.28984632 13.6568542,4 12,4 L11.7272727,4 C10.2210416,4 9,5.17258756 9,6.61904762 L10.0909091,6.61904762 C10.0909091,5.75117158 10.823534,5.04761905 11.7272727,5.04761905 L12,5.04761905 C13.0543618,5.04761905 13.9090909,5.86843034 13.9090909,6.88095238 L13.9090909,12.1190476 C13.9090909,12.4383379 13.8240964,12.7385644 13.6746497,13 L10.3253503,13 C10.1759036,12.7385644 10.0909091,12.4383379 10.0909091,12.1190476 L10.0909091,9.5 C10.0909091,9.06606198 10.4572216,8.71428571 10.9090909,8.71428571 C11.3609602,8.71428571 11.7272727,9.06606198 11.7272727,9.5 L11.7272727,11.3333333 L12.8181818,11.3333333 L12.8181818,9.5 C12.8181818,8.48747796 11.9634527,7.66666667 10.9090909,7.66666667 C9.85472911,7.66666667 9,8.48747796 9,9.5 L9,12.1190476 C9,12.4263059 9.0500878,12.7223297 9.14285008,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L14.8571499,13 Z" fill="#000000" opacity="0.3" />
                                                    <path d="M9,10.3333333 L9,12.1190476 C9,13.7101537 10.3431458,15 12,15 C13.6568542,15 15,13.7101537 15,12.1190476 L15,10.3333333 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9,10.3333333 Z M10.0909091,11.1212121 L12,12.5 L13.9090909,11.1212121 L13.9090909,12.1190476 C13.9090909,13.1315697 13.0543618,13.952381 12,13.952381 C10.9456382,13.952381 10.0909091,13.1315697 10.0909091,12.1190476 L10.0909091,11.1212121 Z" fill="#000000" />
                                                </svg>
                                            </span>
                    
                                            <span className="fs-5 fw-bold text-gray-800 mb-0">Administration</span>
                                            <span className="fs-7 text-gray-400">Console</span>
                                        </a>
                                    </div>
            
            
                                    <div className="col-6">
                                        <a href="pages/projects/list.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end">
                    
                                            <span className="svg-icon svg-icon-3x svg-icon-success mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z" fill="#000000" />
                                                        <path d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z" fill="#000000" opacity="0.3" />
                                                    </g>
                                                </svg>
                                            </span>
                    
                                            <span className="fs-5 fw-bold text-gray-800 mb-0">Projects</span>
                                            <span className="fs-7 text-gray-400">Pending Tasks</span>
                                        </a>
                                    </div>
            
            
                                    <div className="col-6">
                                        <a href="pages/projects/users.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light">
                    
                                            <span className="svg-icon svg-icon-3x svg-icon-success mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <path d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                    <path d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                    
                                            <span className="fs-5 fw-bold text-gray-800 mb-0">Customers</span>
                                            <span className="fs-7 text-gray-400">Latest cases</span>
                                        </a>
                                    </div>
            
                                </div>
        
        
                                <div className="py-2 text-center border-top">
                                    <a href="pages/profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
            
                                    <span className="svg-icon svg-icon-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                <rect fill="#000000" opacity="0.5" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width="2" height="9" rx="1" />
                                                <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
                                            </g>
                                        </svg>
                                    </span>
            </a>
                                </div>
        
                            </div>
    
                        </div>

                        <HeaderUserLayout/>

                        <div className="d-flex align-items-center d-lg-none ms-2 me-n3" data-bs-toggle="tooltip" title="Show header menu">
                            <div className="btn btn-icon btn-active-light-primary" id="kt_header_menu_mobile_toggle">
        
                                <span className="svg-icon svg-icon-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 11.5C22 12.3284 21.3284 13 20.5 13H3.5C2.6716 13 2 12.3284 2 11.5C2 10.6716 2.6716 10 3.5 10H20.5C21.3284 10 22 10.6716 22 11.5Z" fill="black" />
                                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M14.5 20C15.3284 20 16 19.3284 16 18.5C16 17.6716 15.3284 17 14.5 17H3.5C2.6716 17 2 17.6716 2 18.5C2 19.3284 2.6716 20 3.5 20H14.5ZM8.5 6C9.3284 6 10 5.32843 10 4.5C10 3.67157 9.3284 3 8.5 3H3.5C2.6716 3 2 3.67157 2 4.5C2 5.32843 2.6716 6 3.5 6H8.5Z" fill="black" />
                                        </g>
                                    </svg>
                                </span>
        
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
    );
};

export default AsideMenuMobileLayout;