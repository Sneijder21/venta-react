import React from 'react';
import FooterLayout from './Footer/Footer'
import AsideMenuLayout from './AsideMenuLayout';
import ToolbarLayout from './Header/ToolbarLayout';

import AsideMenuMobileLayout from './Header/AsideMenuMobileLayout';
import UpgradePlan from './../components/Plan/UpgradePlan';
import ActivityLog from './../components/Activity/ActivityLog';


const HomeLayout = ({children, ...rest}) => {
    return (
        <div>
			<div className="d-flex flex-column flex-root">
				<div className="page d-flex flex-row flex-column-fluid">
					<AsideMenuLayout/>

					<div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
		
						<AsideMenuMobileLayout/>
						<div className="content d-flex flex-column flex-column-fluid" id="kt_content">

							<div className="toolbar" id="kt_toolbar">
								<ToolbarLayout/>
							</div>


							<div className="post d-flex flex-column-fluid" id="kt_post">
		
								<div id="kt_content_container" className="container">
									
								</div>
							</div>
						
						</div>
					
						<FooterLayout/>
					</div>
				
				</div>
			
			</div>
		
			<div id="kt_activities" className="bg-white" data-kt-drawer="true" data-kt-drawer-name="activities" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_activities_toggle" data-kt-drawer-close="#kt_activities_close">
				<ActivityLog/>
			</div>
		
			<button id="kt_explore_toggle" className="btn btn-sm btn-white btn-active-primary shadow-sm position-fixed px-5 fw-bolder zindex-2 top-50 mt-10 end-0 transform-90" title="Explore Metronic" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover">
				<span id="kt_explore_toggle_label">Explore</span>
			</button>
		
			<div id="kt_explore" className="bg-white" data-kt-drawer="true" data-kt-drawer-name="explore" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '375px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_explore_toggle" data-kt-drawer-close="#kt_explore_close">
			
				<div className="card shadow-none w-100">
				
					<div className="card-header" id="kt_explore_header">
						<h3 className="card-title fw-bolder text-gray-700">Explore</h3>
						<div className="card-toolbar">
							<button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_explore_close">
							
								<span className="svg-icon svg-icon-2">
									<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
										<g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
											<rect fill="#000000" x="0" y="7" width="16" height="2" rx="1" />
											<rect fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1" />
										</g>
									</svg>
								</span>
							
							</button>
						</div>
					</div>
				
				
					<div className="card-body" id="kt_explore_body">
					
						<div id="kt_explore_scroll" className="scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_explore_body" data-kt-scroll-dependencies="#kt_explore_header, #kt_explore_footer" data-kt-scroll-offset="5px">
						
							<div className="mb-0">
							
								<div className="mb-7">
									<h3 className="fw-bold text-center mb-3">Demo1</h3>
									<div className="overlay overflow-hidden border border-4 border-primary p-2 rounded">
										<div className="overlay-wrapper rounded">
											<img src="assets/media/demos/demo1.png" alt="demo" className="w-100 rounded" />
										</div>
										<div className="overlay-layer bg-dark bg-opacity-10">
											<a href="https://preview.keenthemes.com/metronic8/demo1" className="btn btn-primary shadow">Preview</a>
										</div>
									</div>
								</div>
								<div className="mb-7">
									<h3 className="fw-bold text-center mb-3">Demo18</h3>
									<div className="overlay overflow-hidden border border-4 p-2 rounded">
										<div className="overlay-wrapper">
											<img src="assets/media/demos/demo18.png" alt="demo" className="w-100 rounded opacity-75" />
										</div>
										<div className="overlay-layer bg-dark bg-opacity-10">
											<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
										</div>
									</div>
								</div>
							
							</div>
						
						</div>
					
					</div>
				
				
					<div className="card-footer py-5 text-center" id="kt_explore_footer">
						<a href="https://1.envato.market/EA4JP" className="btn btn-primary">Purchase Metronic</a>
					</div>
				
				</div>
			
			</div>
		
			<div className="modal fade" id="kt_modal_upgrade_plan" tabindex="-1" aria-hidden="true">
				<UpgradePlan/>
			</div>
			
			<div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
				
				<span className="svg-icon">
					<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<polygon points="0 0 24 0 24 24 0 24" />
							<rect fill="#000000" opacity="0.5" x="11" y="10" width="2" height="10" rx="1" />
							<path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fill-rule="nonzero" />
						</g>
					</svg>
				</span>
				
			</div>
			
        </div>
    );
};
export default HomeLayout;