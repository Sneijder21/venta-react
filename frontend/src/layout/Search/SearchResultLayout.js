import React from 'react';

const SearchResultLayout = () => {
    return (
        <div data-kt-search-element="wrapper">
										
        <form data-kt-search-element="form" className="w-100 position-relative mb-3" autocomplete="off">


            <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-0">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect x="0" y="0" width="24" height="24" />
                        <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                        <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero" />
                    </g>
                </svg>
            </span>



            <input type="text" className="form-control form-control-flush ps-10" name="search" value="" placeholder="Search..." data-kt-search-element="input" />


            <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1" data-kt-search-element="spinner">
                <span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
            </span>


            <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none" data-kt-search-element="clear">

                <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
                            <rect fill="#000000" x="0" y="7" width="16" height="2" rx="1" />
                            <rect fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1" />
                        </g>
                    </svg>
                </span>

            </span>


            <div className="position-absolute top-50 end-0 translate-middle-y" data-kt-search-element="toolbar">

                <div data-kt-search-element="preferences-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1" data-bs-toggle="tooltip" title="Show search preferences">
    
                    <span className="svg-icon svg-icon-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <path d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                            <path d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000" />
                        </svg>
                    </span>
    
                </div>


                <div data-kt-search-element="advanced-options-form-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary" data-bs-toggle="tooltip" title="Show more search options">
    
                    <span className="svg-icon svg-icon-2">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <polygon points="0 0 24 0 24 24 0 24" />
                                <path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)" />
                            </g>
                        </svg>
                    </span>
    
                </div>

            </div>

        </form>


        <div className="separator border-gray-200 mb-6"></div>


        <div data-kt-search-element="results" className="d-none">

            <div className="scroll-y mh-200px mh-lg-325px">

                <h3 className="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">Users</h3>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <img src="assets/media/avatars/150-1.jpg" alt="" />
                    </div>
    
    
                    <div className="d-flex flex-column justify-content-start fw-bold">
                        <span className="fs-6 fw-bold">Karina Clark</span>
                        <span className="fs-7 fw-bold text-muted">Marketing Manager</span>
                    </div>
    
                </a>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <img src="assets/media/avatars/150-3.jpg" alt="" />
                    </div>
    
    
                    <div className="d-flex flex-column justify-content-start fw-bold">
                        <span className="fs-6 fw-bold">Olivia Bold</span>
                        <span className="fs-7 fw-bold text-muted">Software Engineer</span>
                    </div>
    
                </a>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <img src="assets/media/avatars/150-8.jpg" alt="" />
                    </div>
    
    
                    <div className="d-flex flex-column justify-content-start fw-bold">
                        <span className="fs-6 fw-bold">Ana Clark</span>
                        <span className="fs-7 fw-bold text-muted">UI/UX Designer</span>
                    </div>
    
                </a>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <img src="assets/media/avatars/150-11.jpg" alt="" />
                    </div>
    
    
                    <div className="d-flex flex-column justify-content-start fw-bold">
                        <span className="fs-6 fw-bold">Nick Pitola</span>
                        <span className="fs-7 fw-bold text-muted">Art Director</span>
                    </div>
    
                </a>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <img src="assets/media/avatars/150-12.jpg" alt="" />
                    </div>
    
    
                    <div className="d-flex flex-column justify-content-start fw-bold">
                        <span className="fs-6 fw-bold">Edward Kulnic</span>
                        <span className="fs-7 fw-bold text-muted">System Administrator</span>
                    </div>
    
                </a>


                <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Customers</h3>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <span className="symbol-label bg-light">
                            <img className="w-20px h-20px" src="assets/media/svg/misc/volicity-9.svg" alt="" />
                        </span>
                    </div>
    
    
                    <div className="d-flex flex-column justify-content-start fw-bold">
                        <span className="fs-6 fw-bold">Company Rbranding</span>
                        <span className="fs-7 fw-bold text-muted">UI Design</span>
                    </div>
    
                </a>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <span className="symbol-label bg-light">
                            <img className="w-20px h-20px" src="assets/media/svg/misc/tvit.svg" alt="" />
                        </span>
                    </div>
    
    
                    <div className="d-flex flex-column justify-content-start fw-bold">
                        <span className="fs-6 fw-bold">Company Re-branding</span>
                        <span className="fs-7 fw-bold text-muted">Web Development</span>
                    </div>
    
                </a>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <span className="symbol-label bg-light">
                            <img className="w-20px h-20px" src="assets/media/svg/misc/infography.svg" alt="" />
                        </span>
                    </div>
    
    
                    <div className="d-flex flex-column justify-content-start fw-bold">
                        <span className="fs-6 fw-bold">Business Analytics App</span>
                        <span className="fs-7 fw-bold text-muted">Administration</span>
                    </div>
    
                </a>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <span className="symbol-label bg-light">
                            <img className="w-20px h-20px" src="assets/media/svg/misc/leaf.svg" alt="" />
                        </span>
                    </div>
    
    
                    <div className="d-flex flex-column justify-content-start fw-bold">
                        <span className="fs-6 fw-bold">EcoLeaf App Launch</span>
                        <span className="fs-7 fw-bold text-muted">Marketing</span>
                    </div>
    
                </a>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <span className="symbol-label bg-light">
                            <img className="w-20px h-20px" src="assets/media/svg/misc/tower.svg" alt="" />
                        </span>
                    </div>
    
    
                    <div className="d-flex flex-column justify-content-start fw-bold">
                        <span className="fs-6 fw-bold">Tower Group Website</span>
                        <span className="fs-7 fw-bold text-muted">Google Adwords</span>
                    </div>
    
                </a>


                <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Projects</h3>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <span className="symbol-label bg-light">
            
                            <span className="svg-icon svg-icon-2 svg-icon-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <path d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z" fill="#000000" opacity="0.3" />
                                    <path d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z" fill="#000000" />
                                    <rect fill="#000000" opacity="0.3" x="10" y="9" width="7" height="2" rx="1" />
                                    <rect fill="#000000" opacity="0.3" x="7" y="9" width="2" height="2" rx="1" />
                                    <rect fill="#000000" opacity="0.3" x="7" y="13" width="2" height="2" rx="1" />
                                    <rect fill="#000000" opacity="0.3" x="10" y="13" width="7" height="2" rx="1" />
                                    <rect fill="#000000" opacity="0.3" x="7" y="17" width="2" height="2" rx="1" />
                                    <rect fill="#000000" opacity="0.3" x="10" y="17" width="7" height="2" rx="1" />
                                </svg>
                            </span>
            
                        </span>
                    </div>
    
    
                    <div className="d-flex flex-column">
                        <span className="fs-6 fw-bold">Si-Fi Project by AU Themes</span>
                        <span className="fs-7 fw-bold text-muted">#45670</span>
                    </div>
    
                </a>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <span className="symbol-label bg-light">
            
                            <span className="svg-icon svg-icon-2 svg-icon-primary">
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
            
                        </span>
                    </div>
    
    
                    <div className="d-flex flex-column">
                        <span className="fs-6 fw-bold">Shopix Mobile App Planning</span>
                        <span className="fs-7 fw-bold text-muted">#45690</span>
                    </div>
    
                </a>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <span className="symbol-label bg-light">
            
                            <span className="svg-icon svg-icon-2 svg-icon-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <path d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill="#000000" />
                                    <path d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill="#000000" opacity="0.3" />
                                </svg>
                            </span>
            
                        </span>
                    </div>
    
    
                    <div className="d-flex flex-column">
                        <span className="fs-6 fw-bold">Finance Monitoring SAAS Discussion</span>
                        <span className="fs-7 fw-bold text-muted">#21090</span>
                    </div>
    
                </a>


                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <span className="symbol-label bg-light">
            
                            <span className="svg-icon svg-icon-2 svg-icon-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24" />
                                        <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                        <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
                                    </g>
                                </svg>
                            </span>
            
                        </span>
                    </div>
    
    
                    <div className="d-flex flex-column">
                        <span className="fs-6 fw-bold">Dashboard Analitics Launch</span>
                        <span className="fs-7 fw-bold text-muted">#34560</span>
                    </div>
    
                </a>

            </div>

        </div>


        <div className="mb-4" data-kt-search-element="main">

            <div className="d-flex flex-stack fw-bold mb-4">

                <span className="text-muted fs-6 me-2">Recently Searched:</span>

            </div>


            <div className="scroll-y mh-200px mh-lg-325px">

                <div className="d-flex align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <span className="symbol-label bg-light">
            
                            <span className="svg-icon svg-icon-2 svg-icon-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g opacity="0.25">
                                        <path d="M2 15C2 16.6569 3.34315 18 5 18L19 18C20.6569 18 22 16.6569 22 15V5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V15Z" fill="#12131A" />
                                        <path d="M8 20C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22H16C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20H8Z" fill="#12131A" />
                                    </g>
                                    <path d="M7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8H14C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6H7Z" fill="#12131A" />
                                    <path d="M7 10C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12H9C9.55229 12 10 11.5523 10 11C10 10.4477 9.55229 10 9 10H7Z" fill="#12131A" />
                                </svg>
                            </span>
            
                        </span>
                    </div>
    
    
                    <div className="d-flex flex-column">
                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">BoomApp by Keenthemes</a>
                        <span className="fs-7 text-muted fw-bold">#45789</span>
                    </div>
    
                </div>


                <div className="d-flex align-items-center mb-5">
    
                    <div className="symbol symbol-40px me-4">
                        <span className="symbol-label bg-light">
            
                            <span className="svg-icon svg-icon-2 svg-icon-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g opacity="0.25">
                                        <path d="M20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13Z" fill="#12131A" />
                                        <path d="M20 17C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15C19.4477 15 19 15.4477 19 16C19 16.5523 19.4477 17 20 17Z" fill="#12131A" />
                                        <path d="M20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19C19.4477 19 19 19.4477 19 20C19 20.5523 19.4477 21 20 21Z" fill="#12131A" />
                                        <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="#12131A" />
                                        <path d="M12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z" fill="#12131A" />
                                        <path d="M4 21C4.55228 21 5 20.5523 5 20C5 19.4477 4.55228 19 4 19C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21Z" fill="#12131A" />
                                    </g>
                                    <path d="M17 6C17 7.65685 18.3431 9 20 9C21.6569 9 23 7.65685 23 6C23 4.34315 21.6569 3 20 3C18.3431 3 17 4.34315 17 6Z" fill="#12131A" />
                                    <path d="M9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10Z" fill="#12131A" />
                                    <path d="M4 17C2.34315 17 1 15.6569 1 14C1 12.3431 2.34315 11 4 11C5.65685 11 7 12.3431 7 14C7 15.6569 5.65685 17 4 17Z" fill="#12131A" />
                                </svg>
                            </span>
            
                        </span>
                    </div>
    
    
                    <div className="d-flex flex-column">
                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">"Kept API Project Meeting</a>
                        <span className="fs-7 text-muted fw-bold">#84050</span>
                    </div>
    
                </div>

            </div>

        </div>


        <div data-kt-search-element="empty" className="text-center d-none">

            <div className="pt-10 pb-10">

                <span className="svg-icon svg-icon-4x opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.25" d="M3 4C3 2.34315 4.34315 1 6 1H15.7574C16.553 1 17.3161 1.31607 17.8787 1.87868L20.1213 4.12132C20.6839 4.68393 21 5.44699 21 6.24264V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4Z" fill="#12131A" />
                        <path d="M15 1.89181C15 1.39927 15.3993 1 15.8918 1V1C16.6014 1 17.2819 1.28187 17.7836 1.78361L20.2164 4.21639C20.7181 4.71813 21 5.39863 21 6.10819V6.10819C21 6.60073 20.6007 7 20.1082 7H16C15.4477 7 15 6.55228 15 6V1.89181Z" fill="#12131A" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.032 15.4462C12.4365 15.7981 11.7418 16 11 16C8.79086 16 7 14.2091 7 12C7 9.79086 8.79086 8 11 8C13.2091 8 15 9.79086 15 12C15 12.7418 14.7981 13.4365 14.4462 14.032L16.7072 16.293C17.0977 16.6835 17.0977 17.3167 16.7072 17.7072C16.3167 18.0977 15.6835 18.0977 15.293 17.7072L13.032 15.4462ZM13 12C13 13.1046 12.1046 14 11 14C9.89543 14 9 13.1046 9 12C9 10.8954 9.89543 10 11 10C12.1046 10 13 10.8954 13 12Z" fill="#12131A" />
                    </svg>
                </span>

            </div>


            <div className="pb-15 fw-bold">
                <h3 className="text-gray-600 fs-5 mb-2">No result found</h3>
                <div className="text-muted fs-7">Please try again with a different query</div>
            </div>

        </div>

    </div>
    );
}
export default SearchResultLayout;