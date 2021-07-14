import React from 'react';

const UpgradePlan = () => {
    return (
        <div className="modal-dialog modal-xl">
				
            <div className="modal-content rounded">
            
            <div className="modal-header justify-content-end border-0 pb-0">
                
                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    
                    <span className="svg-icon svg-icon-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
                                <rect fill="#000000" x="0" y="7" width="16" height="2" rx="1" />
                                <rect fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1" />
                            </g>
                        </svg>
                    </span>
                    
                </div>
                
            </div>
            
            
            <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                
                <div className="mb-13 text-center">
                    <h1 className="mb-3">Upgrade a Plan</h1>
                    <div className="text-gray-400 fw-bold fs-5">If you need more info, please check
                    <a href="#" className="link-primary fw-bolder">Pricing Guidelines</a>.</div>
                </div>
                
                
                <div className="d-flex flex-column">
                    
                    <div className="nav-group nav-group-outline mx-auto" data-kt-buttons="true">
                        <a href="#" className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active" data-kt-plan="month">Monthly</a>
                        <a href="#" className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3" data-kt-plan="annual">Annual</a>
                    </div>
                    
                    
                    <div className="row mt-10">
                        
                        <div className="col-lg-6 mb-10 mb-lg-0">
                            
                            <div className="nav flex-column">
                                
                                <div className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_startup">
                                    
                                    <div className="d-flex align-items-center me-2">
                                        
                                        <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                                            <input className="form-check-input" type="radio" name="plan" checked="checked" value="startup" />
                                        </div>
                                        
                                        
                                        <div className="flex-grow-1">
                                            <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">Startup</h2>
                                            <div className="fw-bold opacity-50">Best for startups</div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <div className="ms-5">
                                        <span className="mb-2">$</span>
                                        <span className="fs-3x fw-bolder" data-kt-plan-price-month="39" data-kt-plan-price-annual="399">39</span>
                                        <span className="fs-7 opacity-50">/
                                        <span data-kt-element="period">Mon</span></span>
                                    </div>
                                    
                                </div>
                                
                                
                                <div className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_advanced">
                                    
                                    <div className="d-flex align-items-center me-2">
                                        
                                        <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                                            <input className="form-check-input" type="radio" name="plan" value="advanced" />
                                        </div>
                                        
                                        
                                        <div className="flex-grow-1">
                                            <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">Advanced</h2>
                                            <div className="fw-bold opacity-50">Best for 100+ team size</div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <div className="ms-5">
                                        <span className="mb-2">$</span>
                                        <span className="fs-3x fw-bolder" data-kt-plan-price-month="339" data-kt-plan-price-annual="3399">339</span>
                                        <span className="fs-7 opacity-50">/
                                        <span data-kt-element="period">Mon</span></span>
                                    </div>
                                    
                                </div>
                                
                                
                                <div className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_enterprise">
                                    
                                    <div className="d-flex align-items-center me-2">
                                        
                                        <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                                            <input className="form-check-input" type="radio" name="plan" value="enterprise" />
                                        </div>
                                        
                                        
                                        <div className="flex-grow-1">
                                            <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">Enterprise
                                            <span className="badge badge-light-success ms-2 fs-7">Most popular</span></h2>
                                            <div className="fw-bold opacity-50">Best value for 1000+ team</div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <div className="ms-5">
                                        <span className="mb-2">$</span>
                                        <span className="fs-3x fw-bolder" data-kt-plan-price-month="999" data-kt-plan-price-annual="9999">999</span>
                                        <span className="fs-7 opacity-50">/
                                        <span data-kt-element="period">Mon</span></span>
                                    </div>
                                    
                                </div>
                                
                                
                                <div className="nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6">
                                    
                                    <div className="d-flex align-items-center me-2">
                                        
                                        <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                                            <input className="form-check-input" type="radio" name="plan" value="custom" />
                                        </div>
                                        
                                        
                                        <div className="flex-grow-1">
                                            <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">Custom</h2>
                                            <div className="fw-bold opacity-50">Requet a custom license</div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <div className="ms-5">
                                        <a href="#" className="btn btn-sm btn-primary">Contact Us</a>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        
                        <div className="col-lg-6">
                            
                            <div className="tab-content rounded h-100 bg-light p-10">
                                
                                <div className="tab-pane fade show active" id="kt_upgrade_plan_startup">
                                    
                                    <div className="pb-5">
                                        <h2 className="fw-bolder text-dark">What’s in Startup Plan?</h2>
                                        <div className="text-gray-400 fw-bold">Optimal for 10+ team size and new startup</div>
                                    </div>
                                    
                                    
                                    <div className="pt-1">
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-400 flex-grow-1">Finance Module</span>
                                            
                                            <span className="svg-icon svg-icon-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-400 flex-grow-1">Accounting Module</span>
                                            
                                            <span className="svg-icon svg-icon-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-400 flex-grow-1">Network Platform</span>
                                            
                                            <span className="svg-icon svg-icon-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center">
                                            <span className="fw-bold fs-5 text-gray-400 flex-grow-1">Unlimited Cloud Space</span>
                                            
                                            <span className="svg-icon svg-icon-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                                
                                <div className="tab-pane fade" id="kt_upgrade_plan_advanced">
                                    
                                    <div className="pb-5">
                                        <h2 className="fw-bolder text-dark">What’s in Startup Plan?</h2>
                                        <div className="text-gray-400 fw-bold">Optimal for 100+ team size and grown company</div>
                                    </div>
                                    
                                    
                                    <div className="pt-1">
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-400 flex-grow-1">Network Platform</span>
                                            
                                            <span className="svg-icon svg-icon-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center">
                                            <span className="fw-bold fs-5 text-gray-400 flex-grow-1">Unlimited Cloud Space</span>
                                            
                                            <span className="svg-icon svg-icon-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                                
                                <div className="tab-pane fade" id="kt_upgrade_plan_enterprise">
                                    
                                    <div className="pb-5">
                                        <h2 className="fw-bolder text-dark">What’s in Startup Plan?</h2>
                                        <div className="text-gray-400 fw-bold">Optimal for 1000+ team and enterpise</div>
                                    </div>
                                    
                                    
                                    <div className="pt-1">
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center mb-7">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Network Platform</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                        
                                        <div className="d-flex align-items-center">
                                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">Unlimited Cloud Space</span>
                                            
                                            <span className="svg-icon svg-icon-1 svg-icon-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
                
                <div className="d-flex flex-center flex-row-fluid pt-12">
                    <button type="reset" className="btn btn-white me-3" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn btn-primary">Upgrade Plan</button>
                </div>
                
            </div>
            
        </div>
        
        </div>
    );
}
export default UpgradePlan