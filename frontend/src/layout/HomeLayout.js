import React from 'react';

const HomeLayout = ({children, ...rest}) => {
    return (
        <div>
		<div className="d-flex flex-column flex-root">
			<div className="page d-flex flex-row flex-column-fluid">
				<div id="kt_aside" className="aside aside-dark aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
					<div className="aside-logo flex-column-auto" id="kt_aside_logo">
		
						<a href="index.html">
							<img alt="Logo" src="assets/media/logos/logo-1.svg" className="h-15px logo"/>
						</a>
		
		
						<div id="kt_aside_toggle" className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize">
			
							<span className="svg-icon svg-icon-1 rotate-180">
								<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<polygon points="0 0 24 0 24 24 0 24" />
										<path d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" fill="#000000" fill-rule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)" />
										<path d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.5" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)" />
									</g>
								</svg>
							</span>
			
						</div>
		
					</div>
	
	
					<div className="aside-menu flex-column-fluid">
		
						<div className="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
			
							<div className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true">
								<div className="menu-item">
									<a className="menu-link" href="index.html">
										<span className="menu-icon">
							
											<span className="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<path d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z" fill="#000000" opacity="0.3" />
													<path d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z" fill="#000000" />
												</svg>
											</span>
							
										</span>
										<span className="menu-title">Dashboard</span>
									</a>
								</div>
								<div className="menu-item">
									<div className="menu-content pt-8 pb-2">
										<span className="menu-section text-muted text-uppercase fs-8">Crafted</span>
									</div>
								</div>
								<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
									<span className="menu-link">
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
									<div className="menu-sub menu-sub-accordion menu-active-bg">
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											<span className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Profile</span>
												<span className="menu-arrow"></span>
											</span>
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												<div className="menu-item">
													<a className="menu-link" href="pages/profile/overview.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Overview</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/profile/projects.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Projects</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/profile/campaigns.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Campaigns</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/profile/documents.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Documents</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/profile/connections.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Connections</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/profile/activity.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Activity</span>
													</a>
												</div>
											</div>
										</div>
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											<span className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Projects</span>
												<span className="menu-arrow"></span>
											</span>
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												<div className="menu-item">
													<a className="menu-link" href="pages/projects/list.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">My Porjects</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/projects/project.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">View Project</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/projects/targets.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Targets</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/projects/budget.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Budget</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/projects/users.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Users</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/projects/files.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Files</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/projects/activity.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Activity</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/projects/settings.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Settings</span>
													</a>
												</div>
											</div>
										</div>
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											<span className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Wizards</span>
												<span className="menu-arrow"></span>
											</span>
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												<div className="menu-item">
													<a className="menu-link" href="pages/wizards/horizontal.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Horizontal</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/wizards/vertical.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Vertical</span>
													</a>
												</div>
											</div>
										</div>
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											<span className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Search</span>
												<span className="menu-arrow"></span>
											</span>
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												<div className="menu-item">
													<a className="menu-link" href="pages/search/horizontal.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Horizontal</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/search/vertical.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Vertical</span>
													</a>
												</div>
											</div>
										</div>
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											<span className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Blog</span>
												<span className="menu-arrow"></span>
											</span>
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												<div className="menu-item">
													<a className="menu-link" href="pages/blog/home.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Blog Home</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="pages/blog/post.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Blog Post</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
									<span className="menu-link">
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
									<div className="menu-sub menu-sub-accordion menu-active-bg">
										<div className="menu-item">
											<a className="menu-link" href="account/overview.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Overview</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="account/settings.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Settings</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="account/security.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Security</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="account/billing.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Billing</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="account/statements.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Statements</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="account/referrals.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Referrals</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="account/api-keys.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">API Keys</span>
											</a>
										</div>
									</div>
								</div>
								<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
									<span className="menu-link">
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
									<div className="menu-sub menu-sub-accordion menu-active-bg">
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											<span className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Basic Flow</span>
												<span className="menu-arrow"></span>
											</span>
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/basic/sign-in.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Sign-in</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/basic/sign-up.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Sign-up</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/basic/two-steps.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Two-steps</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/basic/password-reset.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Password Reset</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/basic/new-password.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">New Password</span>
													</a>
												</div>
											</div>
										</div>
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											<span className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Aside Flow</span>
												<span className="menu-arrow"></span>
											</span>
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/aside/sign-in.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Sign-in</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/aside/sign-up.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Sign-up</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/aside/two-steps.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Two-steps</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/aside/password-reset.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Password Reset</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/aside/new-password.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">New Password</span>
													</a>
												</div>
											</div>
										</div>
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											<span className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Dark Flow</span>
												<span className="menu-arrow"></span>
											</span>
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/dark/sign-in.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Sign-in</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/dark/sign-up.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Sign-up</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/dark/two-steps.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Two-steps</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/dark/password-reset.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Password Reset</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/flows/dark/new-password.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">New Password</span>
													</a>
												</div>
											</div>
										</div>
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											<span className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Email Templates</span>
												<span className="menu-arrow"></span>
											</span>
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												<div className="menu-item">
													<a className="menu-link" href="authentication/email/verify-email.html" target="blank">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Verify Email</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/email/invitation.html" target="blank">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Account Invitation</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/email/password-reset.html" target="blank">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Password Reset</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="authentication/email/password-change.html" target="blank">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Password Changed</span>
													</a>
												</div>
											</div>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="authentication/extended/multi-steps-sign-up.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Multi-steps Sign-up</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="authentication/extended/free-trial-sign-up.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Free Trial Sign-up</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="authentication/extended/coming-soon.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Coming Soon</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="authentication/general/welcome.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Welcome Message</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="authentication/general/verify-email.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Verify Email</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="authentication/general/password-confirmation.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Password Confirmation</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="authentication/general/deactivation.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Account Deactivation</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="authentication/general/error-404.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Error 404</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="authentication/general/error-500.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Error 500</span>
											</a>
										</div>
									</div>
								</div>
								<div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
									<span className="menu-link">
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
									<div className="menu-sub menu-sub-accordion menu-active-bg">
										<div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
											<span className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">General</span>
												<span className="menu-arrow"></span>
											</span>
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												<div className="menu-item">
													<a className="menu-link" href="modals/general/invite-friends.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Invite Friends</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link active" href="modals/general/view-users.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">View Users</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="modals/general/upgrade-plan.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Upgrade Plan</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="modals/general/share-earn.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Share &amp; Earn</span>
													</a>
												</div>
											</div>
										</div>
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											<span className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Forms</span>
												<span className="menu-arrow"></span>
											</span>
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												<div className="menu-item">
													<a className="menu-link" href="modals/forms/new-target.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">New Target</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="modals/forms/new-card.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">New Card</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="modals/forms/new-address.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">New Address</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="modals/forms/create-api-key.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Create API Key</span>
													</a>
												</div>
											</div>
										</div>
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											<span className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Wizards</span>
												<span className="menu-arrow"></span>
											</span>
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												<div className="menu-item">
													<a className="menu-link" href="modals/wizards/two-factor-authentication.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Two Factor Auth</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="modals/wizards/create-app.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Create App</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="modals/wizards/create-account.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Create Account</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="modals/wizards/create-project.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Create Project</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="modals/wizards/offer-a-deal.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Offer a Deal</span>
													</a>
												</div>
											</div>
										</div>
										<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
											<span className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Search</span>
												<span className="menu-arrow"></span>
											</span>
											<div className="menu-sub menu-sub-accordion menu-active-bg">
												<div className="menu-item">
													<a className="menu-link" href="modals/search/users.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Users</span>
													</a>
												</div>
												<div className="menu-item">
													<a className="menu-link" href="modals/search/select-location.html">
														<span className="menu-bullet">
															<span className="bullet bullet-dot"></span>
														</span>
														<span className="menu-title">Select Location</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
									<span className="menu-link">
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
									<div className="menu-sub menu-sub-accordion menu-active-bg">
										<div className="menu-item">
											<a className="menu-link" href="widgets/lists.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Lists</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="widgets/statistics.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Statistics</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="widgets/charts.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Charts</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="widgets/mixed.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Mixed</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="widgets/tables.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Tables</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="widgets/feeds.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Feeds</span>
											</a>
										</div>
									</div>
								</div>
								<div className="menu-item">
									<div className="menu-content pt-8 pb-2">
										<span className="menu-section text-muted text-uppercase fs-8">Apps</span>
									</div>
								</div>
								<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
									<span className="menu-link">
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
									<div className="menu-sub menu-sub-accordion">
										<div className="menu-item">
											<a className="menu-link" href="apps/customers/getting-started.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Getting Started</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="apps/customers/list.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Customer Listing</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="apps/customers/view.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Customer Details</span>
											</a>
										</div>
									</div>
								</div>
								<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
									<span className="menu-link">
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
									<div className="menu-sub menu-sub-accordion">
										<div className="menu-item">
											<a className="menu-link" href="apps/subscriptions/getting-started.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Getting Started</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="apps/subscriptions/list.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Subscription List</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="apps/subscriptions/add.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Add Subscription</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="apps/subscriptions/view.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">View Subscription</span>
											</a>
										</div>
									</div>
								</div>
								<div className="menu-item">
									<div className="menu-content pt-8 pb-0">
										<span className="menu-section text-muted text-uppercase fs-8">Layout</span>
									</div>
								</div>
								<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
									<span className="menu-link">
										<span className="menu-icon">
							
											<span className="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<rect x="0" y="0" width="24" height="24" />
														<path d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z" fill="#000000" />
														<path d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z" fill="#000000" opacity="0.3" />
													</g>
												</svg>
											</span>
							
										</span>
										<span className="menu-title">Toolbars</span>
										<span className="menu-arrow"></span>
									</span>
									<div className="menu-sub menu-sub-accordion menu-active-bg">
										<div className="menu-item">
											<a className="menu-link" href="layouts/toolbars/toolbar-1.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Toolbar 1</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="layouts/toolbars/toolbar-2.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Toolbar 2</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="layouts/toolbars/toolbar-3.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Toolbar 3</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="layouts/toolbars/toolbar-4.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Toolbar 4</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="layouts/toolbars/toolbar-5.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Toolbar 5</span>
											</a>
										</div>
									</div>
								</div>
								<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
									<span className="menu-link">
										<span className="menu-icon">
							
											<span className="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<path d="M6,9 L6,15 C6,16.6568542 7.34314575,18 9,18 L15,18 L15,18.8181818 C15,20.2324881 14.2324881,21 12.8181818,21 L5.18181818,21 C3.76751186,21 3,20.2324881 3,18.8181818 L3,11.1818182 C3,9.76751186 3.76751186,9 5.18181818,9 L6,9 Z" fill="#000000" fill-rule="nonzero" />
													<path d="M10.1818182,4 L17.8181818,4 C19.2324881,4 20,4.76751186 20,6.18181818 L20,13.8181818 C20,15.2324881 19.2324881,16 17.8181818,16 L10.1818182,16 C8.76751186,16 8,15.2324881 8,13.8181818 L8,6.18181818 C8,4.76751186 8.76751186,4 10.1818182,4 Z" fill="#000000" opacity="0.3" />
												</svg>
											</span>
							
										</span>
										<span className="menu-title">Aside</span>
										<span className="menu-arrow"></span>
									</span>
									<div className="menu-sub menu-sub-accordion menu-active-bg">
										<div className="menu-item">
											<a className="menu-link" href="layouts/aside/light.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Light</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="layouts/aside/minimized.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Minimized</span>
											</a>
										</div>
										<div className="menu-item">
											<a className="menu-link" href="layouts/aside/none.html">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">None</span>
											</a>
										</div>
									</div>
								</div>
								<div className="menu-item">
									<a className="menu-link" href="https://preview.keenthemes.com/metronic8/demo1/layout-builder.html">
										<span className="menu-icon">
							
											<span className="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path opacity="0.25" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H17.5C19.9853 2 22 4.01472 22 6.5V6.5C22 8.98528 19.9853 11 17.5 11H6.5C4.01472 11 2 8.98528 2 6.5V6.5Z" fill="#12131A" />
													<path d="M20 6.5C20 7.88071 18.8807 9 17.5 9C16.1193 9 15 7.88071 15 6.5C15 5.11929 16.1193 4 17.5 4C18.8807 4 20 5.11929 20 6.5Z" fill="#12131A" />
													<path opacity="0.25" d="M2 17.5C2 15.0147 4.01472 13 6.5 13H17.5C19.9853 13 22 15.0147 22 17.5V17.5C22 19.9853 19.9853 22 17.5 22H6.5C4.01472 22 2 19.9853 2 17.5V17.5Z" fill="#12131A" />
													<path d="M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5Z" fill="#12131A" />
												</svg>
											</span>
							
										</span>
										<span className="menu-title">Layout Builder</span>
									</a>
								</div>
								<div className="menu-item">
									<div className="menu-content">
										<div className="separator mx-1 my-4"></div>
									</div>
								</div>
								<div className="menu-item">
									<a className="menu-link" href="documentation/base/utilities.html">
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
								<div className="menu-item">
									<a className="menu-link" href="documentation/getting-started.html">
										<span className="menu-icon">
							
											<span className="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<rect x="0" y="0" width="24" height="24" />
														<path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
														<rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width="3" height="18" rx="1" />
													</g>
												</svg>
											</span>
							
										</span>
										<span className="menu-title">Documentation v8.0.2</span>
									</a>
								</div>
								<div className="menu-item">
									<a className="menu-link" href="documentation/getting-started/changelog.html">
										<span className="menu-icon">
							
											<span className="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<polygon points="0 0 24 0 24 24 0 24" />
														<path d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
														<rect fill="#000000" x="6" y="11" width="9" height="2" rx="1" />
														<rect fill="#000000" x="6" y="15" width="5" height="2" rx="1" />
													</g>
												</svg>
											</span>
							
										</span>
										<span className="menu-title">Changelog</span>
									</a>
								</div>
							</div>
			
						</div>
					</div>
	
	
					<div className="aside-footer flex-column-auto" id="kt_aside_footer"></div>
	
				</div>


				<div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
	
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
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/profile/projects.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Projects</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/profile/campaigns.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Campaigns</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/profile/documents.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Documents</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/profile/connections.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Connections</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/profile/activity.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Activity</span>
																		</a>
																	</div>
																</div>
															</div>
															<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
																<span className="menu-link py-3">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Projects</span>
																	<span className="menu-arrow"></span>
																</span>
																<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/projects/list.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">My Porjects</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/projects/project.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">View Project</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/projects/targets.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Targets</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/projects/budget.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Budget</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/projects/users.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Users</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/projects/files.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Files</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/projects/activity.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Activity</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/projects/settings.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Settings</span>
																		</a>
																	</div>
																</div>
															</div>
															<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
																<span className="menu-link py-3">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Wizards</span>
																	<span className="menu-arrow"></span>
																</span>
																<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/wizards/horizontal.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Horizontal</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/wizards/vertical.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Vertical</span>
																		</a>
																	</div>
																</div>
															</div>
															<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
																<span className="menu-link py-3">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Search</span>
																	<span className="menu-arrow"></span>
																</span>
																<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/search/horizontal.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Horizontal</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/search/vertical.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Vertical</span>
																		</a>
																	</div>
																</div>
															</div>
															<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
																<span className="menu-link py-3">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Blog</span>
																	<span className="menu-arrow"></span>
																</span>
																<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/blog/home.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Blog Home</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="pages/blog/post.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Blog Post</span>
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
															<div className="menu-item">
																<a className="menu-link py-3" href="account/settings.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Settings</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="account/security.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Security</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="account/billing.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Billing</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="account/statements.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Statements</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="account/referrals.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Referrals</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="account/api-keys.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">API Keys</span>
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
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/basic/sign-up.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Sign-up</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/basic/two-steps.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Two-steps</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/basic/password-reset.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Password Reset</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/basic/new-password.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">New Password</span>
																		</a>
																	</div>
																</div>
															</div>
															<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
																<span className="menu-link py-3">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Aside Flow</span>
																	<span className="menu-arrow"></span>
																</span>
																<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/aside/sign-in.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Sign-in</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/aside/sign-up.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Sign-up</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/aside/two-steps.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Two-steps</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/aside/password-reset.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Password Reset</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/aside/new-password.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">New Password</span>
																		</a>
																	</div>
																</div>
															</div>
															<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
																<span className="menu-link py-3">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Dark Flow</span>
																	<span className="menu-arrow"></span>
																</span>
																<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/dark/sign-in.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Sign-in</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/dark/sign-up.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Sign-up</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/dark/two-steps.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Two-steps</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/dark/password-reset.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Password Reset</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/flows/dark/new-password.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">New Password</span>
																		</a>
																	</div>
																</div>
															</div>
															<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
																<span className="menu-link py-3">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Extended</span>
																	<span className="menu-arrow"></span>
																</span>
																<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/extended/multi-steps-sign-up.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Multi-steps Sign-up</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/extended/free-trial-sign-up.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Free Trial Sign-up</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/extended/coming-soon.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Coming Soon</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/general/welcome.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Welcome Message</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/general/verify-email.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Verify Email</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/general/password-confirmation.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Password Confirmation</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/general/deactivation.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Account Deactivation</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/general/error-404.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Error 404</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/general/error-500.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Error 500</span>
																		</a>
																	</div>
																</div>
															</div>
															<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
																<span className="menu-link py-3">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Email Templates</span>
																	<span className="menu-arrow"></span>
																</span>
																<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/email/verify-email.html" target="blank">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Verify Email</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/email/invitation.html" target="blank">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Account Invitation</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/email/password-reset.html" target="blank">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Password Reset</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="authentication/email/password-change.html" target="blank">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Password Changed</span>
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
																	<div className="menu-item">
																		<a className="menu-link active py-3" href="modals/general/view-users.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">View Users</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="modals/general/upgrade-plan.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Upgrade Plan</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="modals/general/share-earn.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Share &amp; Earn</span>
																		</a>
																	</div>
																</div>
															</div>
															<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
																<span className="menu-link py-3">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Forms</span>
																	<span className="menu-arrow"></span>
																</span>
																<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
																	<div className="menu-item">
																		<a className="menu-link py-3" href="modals/forms/new-target.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">New Target</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="modals/forms/new-card.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">New Card</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="modals/forms/new-address.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">New Address</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="modals/forms/create-api-key.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Create API Key</span>
																		</a>
																	</div>
																</div>
															</div>
															<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
																<span className="menu-link py-3">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Wizards</span>
																	<span className="menu-arrow"></span>
																</span>
																<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
																	<div className="menu-item">
																		<a className="menu-link py-3" href="modals/wizards/two-factor-authentication.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Two Factor Auth</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="modals/wizards/create-app.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Create App</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="modals/wizards/create-account.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Create Account</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="modals/wizards/create-project.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Create Project</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="modals/wizards/offer-a-deal.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Offer a Deal</span>
																		</a>
																	</div>
																</div>
															</div>
															<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
																<span className="menu-link py-3">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Search</span>
																	<span className="menu-arrow"></span>
																</span>
																<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
																	<div className="menu-item">
																		<a className="menu-link py-3" href="modals/search/users.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Users</span>
																		</a>
																	</div>
																	<div className="menu-item">
																		<a className="menu-link py-3" href="modals/search/select-location.html">
																			<span className="menu-bullet">
																				<span className="bullet bullet-dot"></span>
																			</span>
																			<span className="menu-title">Select Location</span>
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
															<div className="menu-item">
																<a className="menu-link py-3" href="widgets/statistics.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Statistics</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="widgets/charts.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Charts</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="widgets/mixed.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Mixed</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="widgets/tables.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Tables</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="widgets/feeds.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Feeds</span>
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
															<div className="menu-item">
																<a className="menu-link py-3" href="apps/customers/list.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Customer Listing</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="apps/customers/view.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Customer Details</span>
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
															<div className="menu-item">
																<a className="menu-link py-3" href="apps/subscriptions/list.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Subscription List</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="apps/subscriptions/add.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Add Subscription</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="apps/subscriptions/view.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">View Subscription</span>
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-lg-1">
												<span className="menu-link py-3">
													<span className="menu-title">Layouts</span>
													<span className="menu-arrow d-lg-none"></span>
												</span>
												<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
													<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
														<span className="menu-link py-3">
															<span className="menu-icon">
												
																<span className="svg-icon svg-icon-2">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<rect x="0" y="0" width="24" height="24" />
																			<path d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z" fill="#000000" />
																			<path d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z" fill="#000000" opacity="0.3" />
																		</g>
																	</svg>
																</span>
												
															</span>
															<span className="menu-title">Toolbars</span>
															<span className="menu-arrow"></span>
														</span>
														<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
															<div className="menu-item">
																<a className="menu-link py-3" href="layouts/toolbars/toolbar-1.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Toolbar 1</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="layouts/toolbars/toolbar-2.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Toolbar 2</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="layouts/toolbars/toolbar-3.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Toolbar 3</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="layouts/toolbars/toolbar-4.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Toolbar 4</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="layouts/toolbars/toolbar-5.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Toolbar 5</span>
																</a>
															</div>
														</div>
													</div>
													<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-dropdown">
														<span className="menu-link py-3">
															<span className="menu-icon">
												
																<span className="svg-icon svg-icon-2">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<path d="M6,9 L6,15 C6,16.6568542 7.34314575,18 9,18 L15,18 L15,18.8181818 C15,20.2324881 14.2324881,21 12.8181818,21 L5.18181818,21 C3.76751186,21 3,20.2324881 3,18.8181818 L3,11.1818182 C3,9.76751186 3.76751186,9 5.18181818,9 L6,9 Z" fill="#000000" fill-rule="nonzero" />
																		<path d="M10.1818182,4 L17.8181818,4 C19.2324881,4 20,4.76751186 20,6.18181818 L20,13.8181818 C20,15.2324881 19.2324881,16 17.8181818,16 L10.1818182,16 C8.76751186,16 8,15.2324881 8,13.8181818 L8,6.18181818 C8,4.76751186 8.76751186,4 10.1818182,4 Z" fill="#000000" opacity="0.3" />
																	</svg>
																</span>
												
															</span>
															<span className="menu-title">Aside</span>
															<span className="menu-arrow"></span>
														</span>
														<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
															<div className="menu-item">
																<a className="menu-link py-3" href="layouts/aside/light.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Light</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="layouts/aside/minimized.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">Minimized</span>
																</a>
															</div>
															<div className="menu-item">
																<a className="menu-link py-3" href="layouts/aside/none.html">
																	<span className="menu-bullet">
																		<span className="bullet bullet-dot"></span>
																	</span>
																	<span className="menu-title">None</span>
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
													<div className="menu-item">
														<a className="menu-link py-3" href="documentation/getting-started.html">
															<span className="menu-icon">
												
																<span className="svg-icon svg-icon-2">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<rect x="0" y="0" width="24" height="24" />
																			<path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
																			<rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width="3" height="18" rx="1" />
																		</g>
																	</svg>
																</span>
												
															</span>
															<span className="menu-title">Documentation v8.0.2</span>
														</a>
													</div>
													<div className="menu-item">
														<a className="menu-link py-3" href="https://preview.keenthemes.com/metronic8/demo1/layout-builder.html">
															<span className="menu-icon">
												
																<span className="svg-icon svg-icon-2">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																		<path opacity="0.25" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H17.5C19.9853 2 22 4.01472 22 6.5V6.5C22 8.98528 19.9853 11 17.5 11H6.5C4.01472 11 2 8.98528 2 6.5V6.5Z" fill="#12131A" />
																		<path d="M20 6.5C20 7.88071 18.8807 9 17.5 9C16.1193 9 15 7.88071 15 6.5C15 5.11929 16.1193 4 17.5 4C18.8807 4 20 5.11929 20 6.5Z" fill="#12131A" />
																		<path opacity="0.25" d="M2 17.5C2 15.0147 4.01472 13 6.5 13H17.5C19.9853 13 22 15.0147 22 17.5V17.5C22 19.9853 19.9853 22 17.5 22H6.5C4.01472 22 2 19.9853 2 17.5V17.5Z" fill="#12131A" />
																		<path d="M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5Z" fill="#12131A" />
																	</svg>
																</span>
												
															</span>
															<span className="menu-title">Layout Builder</span>
														</a>
													</div>
													<div className="menu-item">
														<a className="menu-link py-3" href="documentation/getting-started/changelog.html">
															<span className="menu-icon">
												
																<span className="svg-icon svg-icon-2">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<polygon points="0 0 24 0 24 24 0 24" />
																			<path d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
																			<rect fill="#000000" x="6" y="11" width="9" height="2" rx="1" />
																			<rect fill="#000000" x="6" y="15" width="5" height="2" rx="1" />
																		</g>
																	</svg>
																</span>
												
															</span>
															<span className="menu-title">Changelog</span>
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
																<div className="menu-item">
																	<a href="#" className="menu-link">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Example link</span>
																	</a>
																</div>
																<div className="menu-item">
																	<a href="#" className="menu-link">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Example link</span>
																	</a>
																</div>
																<div className="menu-item">
																	<a href="#" className="menu-link">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Example link</span>
																	</a>
																</div>
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
																<div className="menu-item">
																	<a href="#" className="menu-link">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Example link</span>
																	</a>
																</div>
																<div className="menu-item">
																	<a href="#" className="menu-link">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Example link</span>
																	</a>
																</div>
																<div className="menu-item">
																	<a href="#" className="menu-link">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Example link</span>
																	</a>
																</div>
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
																<div className="menu-item">
																	<a href="#" className="menu-link">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Example link</span>
																	</a>
																</div>
																<div className="menu-item">
																	<a href="#" className="menu-link">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Example link</span>
																	</a>
																</div>
																<div className="menu-item">
																	<a href="#" className="menu-link">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Example link</span>
																	</a>
																</div>
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
												
												
																<div className="d-flex align-items-center mb-5">
													
																	<div className="symbol symbol-40px me-4">
																		<span className="symbol-label bg-light">
															
																			<span className="svg-icon svg-icon-2 svg-icon-primary">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M11 4.25769C11 3.07501 9.9663 2.13515 8.84397 2.50814C4.86766 3.82961 2 7.57987 2 11.9999C2 13.6101 2.38057 15.1314 3.05667 16.4788C3.58731 17.5363 4.98303 17.6028 5.81966 16.7662L5.91302 16.6728C6.60358 15.9823 6.65613 14.9011 6.3341 13.9791C6.11766 13.3594 6 12.6934 6 11.9999C6 9.62064 7.38488 7.56483 9.39252 6.59458C10.2721 6.16952 11 5.36732 11 4.39046V4.25769ZM16.4787 20.9434C17.5362 20.4127 17.6027 19.017 16.7661 18.1804L16.6727 18.087C15.9822 17.3964 14.901 17.3439 13.979 17.6659C13.3594 17.8823 12.6934 17.9999 12 17.9999C11.3066 17.9999 10.6406 17.8823 10.021 17.6659C9.09899 17.3439 8.01784 17.3964 7.3273 18.087L7.23392 18.1804C6.39728 19.017 6.4638 20.4127 7.52133 20.9434C8.86866 21.6194 10.3899 21.9999 12 21.9999C13.6101 21.9999 15.1313 21.6194 16.4787 20.9434Z" fill="#12131A" />
																					<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.39046C13 5.36732 13.7279 6.16952 14.6075 6.59458C16.6151 7.56483 18 9.62064 18 11.9999C18 12.6934 17.8823 13.3594 17.6659 13.9791C17.3439 14.9011 17.3964 15.9823 18.087 16.6728L18.1803 16.7662C19.017 17.6028 20.4127 17.5363 20.9433 16.4788C21.6194 15.1314 22 13.6101 22 11.9999C22 7.57987 19.1323 3.82961 15.156 2.50814C14.0337 2.13515 13 3.07501 13 4.25769V4.39046Z" fill="#12131A" />
																				</svg>
																			</span>
															
																		</span>
																	</div>
													
													
																	<div className="d-flex flex-column">
																		<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">"KPI Monitoring App Launch</a>
																		<span className="fs-7 text-muted fw-bold">#84250</span>
																	</div>
													
																</div>
												
												
																<div className="d-flex align-items-center mb-5">
													
																	<div className="symbol symbol-40px me-4">
																		<span className="symbol-label bg-light">
															
																			<span className="svg-icon svg-icon-2 svg-icon-primary">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<path opacity="0.25" d="M2 13.8857C2 13.1875 2.69737 12.7042 3.35112 12.9493L8.14677 14.7477C8.64016 14.9327 9.17357 14.9845 9.69334 14.8979L14.6354 14.0742C14.8087 14.0453 14.9865 14.0626 15.151 14.1243L21.3511 16.4493C21.7414 16.5957 22 16.9688 22 17.3857V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V13.8857Z" fill="#12131A" />
																					<path d="M2 4.13517C2 2.4395 3.97771 1.51318 5.28037 2.59873L8.93565 5.64479C9.1593 5.83117 9.45306 5.91083 9.74023 5.86296L14.0555 5.14376C14.8073 5.01846 15.5786 5.18401 16.2128 5.60679L20.6641 8.57435C21.4987 9.13074 22 10.0674 22 11.0705V13.1138C22 13.812 21.3026 14.2953 20.6489 14.0501L15.8532 12.2518C15.3598 12.0667 14.8264 12.0149 14.3067 12.1016L9.36454 12.9253C9.19129 12.9541 9.01348 12.9369 8.84902 12.8752L2.64888 10.5501C2.25857 10.4038 2 10.0307 2 9.61381V4.13517Z" fill="#12131A" />
																				</svg>
																			</span>
															
																		</span>
																	</div>
													
													
																	<div className="d-flex flex-column">
																		<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Reference FAQ</a>
																		<span className="fs-7 text-muted fw-bold">#67945</span>
																	</div>
													
																</div>
												
												
																<div className="d-flex align-items-center mb-5">
													
																	<div className="symbol symbol-40px me-4">
																		<span className="symbol-label bg-light">
															
																			<span className="svg-icon svg-icon-2 svg-icon-primary">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<path opacity="0.25" d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6Z" fill="#191213" />
																					<path fill-rule="evenodd" clip-rule="evenodd" d="M5.23177 7.35984C5.58534 6.93556 6.2159 6.87824 6.64018 7.2318L11.3598 11.1648C11.7307 11.4739 12.2693 11.4739 12.6402 11.1648L17.3598 7.2318C17.7841 6.87824 18.4147 6.93556 18.7682 7.35984C19.1218 7.78412 19.0645 8.41468 18.6402 8.76825L13.9205 12.7013C12.808 13.6284 11.192 13.6284 10.0794 12.7013L5.35981 8.76825C4.93553 8.41468 4.87821 7.78412 5.23177 7.35984Z" fill="#121319" />
																				</svg>
																			</span>
															
																		</span>
																	</div>
													
													
																	<div className="d-flex flex-column">
																		<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">"FitPro App Development</a>
																		<span className="fs-7 text-muted fw-bold">#84250</span>
																	</div>
													
																</div>
												
												
																<div className="d-flex align-items-center mb-5">
													
																	<div className="symbol symbol-40px me-4">
																		<span className="symbol-label bg-light">
															
																			<span className="svg-icon svg-icon-2 svg-icon-primary">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<path opacity="0.25" d="M4 10H8V17H10V10H14V17H16V10H20V17C21.1046 17 22 17.8954 22 19V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V19C2 17.8954 2.89543 17 4 17V10Z" fill="#12131A" />
																					<path d="M2 7.35405C2 6.53624 2.4979 5.80083 3.25722 5.4971L11.2572 2.2971C11.734 2.10637 12.266 2.10637 12.7428 2.2971L20.7428 5.4971C21.5021 5.80083 22 6.53624 22 7.35405V7.99999C22 9.10456 21.1046 9.99999 20 9.99999H4C2.89543 9.99999 2 9.10456 2 7.99999V7.35405Z" fill="#12131A" />
																				</svg>
																			</span>
															
																		</span>
																	</div>
													
													
																	<div className="d-flex flex-column">
																		<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Shopix Mobile App</a>
																		<span className="fs-7 text-muted fw-bold">#45690</span>
																	</div>
													
																</div>
												
												
																<div className="d-flex align-items-center mb-5">
													
																	<div className="symbol symbol-40px me-4">
																		<span className="symbol-label bg-light">
															
																			<span className="svg-icon svg-icon-2 svg-icon-primary">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<path opacity="0.25" d="M1 5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5Z" fill="#12131A" />
																					<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8682 6.49631C21.1422 6.01679 20.9756 5.40594 20.4961 5.13193C20.0166 4.85792 19.4058 5.02451 19.1317 5.50403L15.8834 11.1886C15.6612 11.5775 15.2073 11.7712 14.7727 11.6626L9.71238 10.3975C8.40847 10.0715 7.04688 10.6526 6.38005 11.8195L3.13174 17.504C2.85773 17.9835 3.02433 18.5944 3.50385 18.8684C3.98337 19.1424 4.59422 18.9758 4.86823 18.4963L8.11653 12.8118C8.33881 12.4228 8.79268 12.2291 9.22731 12.3378L14.2876 13.6028C15.5915 13.9288 16.9531 13.3478 17.6199 12.1808L20.8682 6.49631Z" fill="#12131A" />
																				</svg>
																			</span>
															
																		</span>
																	</div>
													
													
																	<div className="d-flex flex-column">
																		<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">"Landing UI Design" Launch</a>
																		<span className="fs-7 text-muted fw-bold">#24005</span>
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
									
									
													<form data-kt-search-element="advanced-options-form" className="pt-1 d-none">
										
														<h3 className="fw-bold text-dark mb-7">Advanced Search</h3>
										
										
														<div className="mb-5">
															<input type="text" className="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query" />
														</div>
										
										
														<div className="mb-5">
											
															<div className="nav-group nav-group-fluid">
												
																<label>
																	<input type="radio" className="btn-check" name="type" value="has" checked="checked" />
																	<span className="btn btn-sm btn-color-muted btn-active btn-active-primary">All</span>
																</label>
												
												
																<label>
																	<input type="radio" className="btn-check" name="type" value="users" />
																	<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Users</span>
																</label>
												
												
																<label>
																	<input type="radio" className="btn-check" name="type" value="orders" />
																	<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Orders</span>
																</label>
												
												
																<label>
																	<input type="radio" className="btn-check" name="type" value="projects" />
																	<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Projects</span>
																</label>
												
															</div>
											
														</div>
										
										
														<div className="mb-5">
															<input type="text" name="assignedto" className="form-control form-control-sm form-control-solid" placeholder="Assigned to" value="" />
														</div>
										
										
														<div className="mb-5">
															<input type="text" name="collaborators" className="form-control form-control-sm form-control-solid" placeholder="Collaborators" value="" />
														</div>
										
										
														<div className="mb-5">
											
															<div className="nav-group nav-group-fluid">
												
																<label>
																	<input type="radio" className="btn-check" name="attachment" value="has" checked="checked" />
																	<span className="btn btn-sm btn-color-muted btn-active btn-active-primary">Has attachment</span>
																</label>
												
												
																<label>
																	<input type="radio" className="btn-check" name="attachment" value="any" />
																	<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Any</span>
																</label>
												
															</div>
											
														</div>
										
										
														<div className="mb-5">
															<select name="timezone" aria-label="Select a Timezone" data-control="select2" data-placeholder="date_period" className="form-select form-select-sm form-select-solid">
																<option value="next">Within the next</option>
																<option value="last">Within the last</option>
																<option value="between">Between</option>
																<option value="on">On</option>
															</select>
														</div>
										
										
														<div className="row mb-8">
											
															<div className="col-6">
																<input type="number" name="date_number" className="form-control form-control-sm form-control-solid" placeholder="Lenght" value="" />
															</div>
											
											
															<div className="col-6">
																<select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-placeholder="Period" className="form-select form-select-sm form-select-solid">
																	<option value="days">Days</option>
																	<option value="weeks">Weeks</option>
																	<option value="months">Months</option>
																	<option value="years">Years</option>
																</select>
															</div>
											
														</div>
										
										
														<div className="d-flex justify-content-end">
															<button type="reset" className="btn btn-sm btn-white fw-bolder btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">Cancel</button>
															<a href="pages/search/horizontal.html" className="btn btn-sm fw-bolder btn-primary" data-kt-search-element="advanced-options-form-search">Search</a>
														</div>
										
													</form>
									
									
													<form data-kt-search-element="preferences" className="pt-1 d-none">
										
														<h3 className="fw-bold text-dark mb-7">Search Preferences</h3>
										
										
														<div className="pb-4 border-bottom">
															<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
																<span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Projects</span>
																<input className="form-check-input" type="checkbox" value="1" checked="checked" />
															</label>
														</div>
										
										
														<div className="py-4 border-bottom">
															<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
																<span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Targets</span>
																<input className="form-check-input" type="checkbox" value="1" checked="checked" />
															</label>
														</div>
										
								
														<div className="py-4 border-bottom">
															<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
																<span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Affiliate Programs</span>
																<input className="form-check-input" type="checkbox" value="1" />
															</label>
														</div>
								
								
														<div className="py-4 border-bottom">
															<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
																<span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Referrals</span>
																<input className="form-check-input" type="checkbox" value="1" checked="checked" />
															</label>
														</div>
								
								
														<div className="py-4 border-bottom">
															<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
																<span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Users</span>
																<input className="form-check-input" type="checkbox" value="1" />
															</label>
														</div>
								
								
														<div className="d-flex justify-content-end pt-7">
															<button type="reset" className="btn btn-sm btn-white fw-bolder btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">Cancel</button>
															<button type="submit" className="btn btn-sm fw-bolder btn-primary">Save Changes</button>
														</div>
								
													</form>
							
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
												// style="background-image:url('assets/media//misc/pattern-1.jpg')"
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
							
													<div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
								
														<div className="scroll-y mh-325px my-5 px-8">
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center">
											
																	<div className="symbol symbol-35px me-4">
																		<span className="symbol-label bg-light-primary">
													
																			<span className="svg-icon svg-icon-2 svg-icon-primary">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																					<path d="M11.2600599,5.81393408 L2,16 L22,16 L12.7399401,5.81393408 C12.3684331,5.40527646 11.7359848,5.37515988 11.3273272,5.7466668 C11.3038503,5.7680094 11.2814025,5.79045722 11.2600599,5.81393408 Z" fill="#000000" opacity="0.3" />
																					<path d="M12.0056789,15.7116802 L20.2805786,6.85290308 C20.6575758,6.44930487 21.2903735,6.42774054 21.6939717,6.8047378 C21.8964274,6.9938498 22.0113578,7.25847607 22.0113578,7.535517 L22.0113578,20 L16.0113578,20 L2,20 L2,7.535517 C2,7.25847607 2.11493033,6.9938498 2.31738608,6.8047378 C2.72098429,6.42774054 3.35378194,6.44930487 3.7307792,6.85290308 L12.0056789,15.7116802 Z" fill="#000000" />
																				</svg>
																			</span>
													
																		</span>
																	</div>
											
											
																	<div className="mb-0 me-2">
																		<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Project Alice</a>
																		<div className="text-gray-400 fs-7">Phase 1 development</div>
																	</div>
											
																</div>
										
										
																<span className="badge badge-light fs-8">1 hr</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center">
											
																	<div className="symbol symbol-35px me-4">
																		<span className="symbol-label bg-light-danger">
													
																			<span className="svg-icon svg-icon-2 svg-icon-danger">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																					<path d="M11.1669899,4.49941818 L2.82535718,19.5143571 C2.557144,19.9971408 2.7310878,20.6059441 3.21387153,20.8741573 C3.36242953,20.9566895 3.52957021,21 3.69951446,21 L21.2169432,21 C21.7692279,21 22.2169432,20.5522847 22.2169432,20 C22.2169432,19.8159952 22.1661743,19.6355579 22.070225,19.47855 L12.894429,4.4636111 C12.6064401,3.99235656 11.9909517,3.84379039 11.5196972,4.13177928 C11.3723594,4.22181902 11.2508468,4.34847583 11.1669899,4.49941818 Z" fill="#000000" opacity="0.3" />
																					<rect fill="#000000" x="11" y="9" width="2" height="7" rx="1" />
																					<rect fill="#000000" x="11" y="17" width="2" height="2" rx="1" />
																				</svg>
																			</span>
													
																		</span>
																	</div>
											
											
																	<div className="mb-0 me-2">
																		<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">HR Confidential</a>
																		<div className="text-gray-400 fs-7">Confidential staff documents</div>
																	</div>
											
																</div>
										
										
																<span className="badge badge-light fs-8">2 hrs</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center">
											
																	<div className="symbol symbol-35px me-4">
																		<span className="symbol-label bg-light-warning">
													
																			<span className="svg-icon svg-icon-2 svg-icon-warning">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																					<path d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
																					<path d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
																				</svg>
																			</span>
													
																		</span>
																	</div>
											
											
																	<div className="mb-0 me-2">
																		<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Company HR</a>
																		<div className="text-gray-400 fs-7">Corporeate staff profiles</div>
																	</div>
											
																</div>
										
										
																<span className="badge badge-light fs-8">5 hrs</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center">
											
																	<div className="symbol symbol-35px me-4">
																		<span className="symbol-label bg-light-success">
													
																			<span className="svg-icon svg-icon-2 svg-icon-success">
																				<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																					<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																						<rect x="0" y="0" width="24" height="24" />
																						<path d="M12.3740377,19.9389434 L18.2226499,11.1660251 C18.4524142,10.8213786 18.3592838,10.3557266 18.0146373,10.1259623 C17.8914367,10.0438285 17.7466809,10 17.5986122,10 L13,10 L13,4.47708173 C13,4.06286817 12.6642136,3.72708173 12.25,3.72708173 C11.9992351,3.72708173 11.7650616,3.85240758 11.6259623,4.06105658 L5.7773501,12.8339749 C5.54758575,13.1786214 5.64071616,13.6442734 5.98536267,13.8740377 C6.10856331,13.9561715 6.25331908,14 6.40138782,14 L11,14 L11,19.5229183 C11,19.9371318 11.3357864,20.2729183 11.75,20.2729183 C12.0007649,20.2729183 12.2349384,20.1475924 12.3740377,19.9389434 Z" fill="#000000" />
																					</g>
																				</svg>
																			</span>
													
																		</span>
																	</div>
											
											
																	<div className="mb-0 me-2">
																		<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Project Redux</a>
																		<div className="text-gray-400 fs-7">New frontend admin theme</div>
																	</div>
											
																</div>
										
										
																<span className="badge badge-light fs-8">2 days</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center">
											
																	<div className="symbol symbol-35px me-4">
																		<span className="symbol-label bg-light-primary">
													
																			<span className="svg-icon svg-icon-2 svg-icon-primary">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																					<path d="M3.5,3 L5,3 L5,19.5 C5,20.3284271 4.32842712,21 3.5,21 L3.5,21 C2.67157288,21 2,20.3284271 2,19.5 L2,4.5 C2,3.67157288 2.67157288,3 3.5,3 Z" fill="#000000" />
																					<path d="M6.99987583,2.99995344 L19.754647,2.99999303 C20.3069317,2.99999474 20.7546456,3.44771138 20.7546439,3.99999613 C20.7546431,4.24703684 20.6631995,4.48533385 20.497938,4.66895776 L17.5,8 L20.4979317,11.3310353 C20.8673908,11.7415453 20.8341123,12.3738351 20.4236023,12.7432941 C20.2399776,12.9085564 20.0016794,13 19.7546376,13 L6.99987583,13 L6.99987583,2.99995344 Z" fill="#000000" opacity="0.3" />
																				</svg>
																			</span>
													
																		</span>
																	</div>
											
											
																	<div className="mb-0 me-2">
																		<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Project Breafing</a>
																		<div className="text-gray-400 fs-7">Product launch status update</div>
																	</div>
											
																</div>
										
										
																<span className="badge badge-light fs-8">21 Jan</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center">
											
																	<div className="symbol symbol-35px me-4">
																		<span className="symbol-label bg-light-info">
													
																			<span className="svg-icon svg-icon-2 svg-icon-info">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																					<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																						<polygon points="0 0 24 0 24 24 0 24" />
																						<path d="M6,5 L18,5 C19.6568542,5 21,6.34314575 21,8 L21,17 C21,18.6568542 19.6568542,20 18,20 L6,20 C4.34314575,20 3,18.6568542 3,17 L3,8 C3,6.34314575 4.34314575,5 6,5 Z M5,17 L14,17 L9.5,11 L5,17 Z M16,14 C17.6568542,14 19,12.6568542 19,11 C19,9.34314575 17.6568542,8 16,8 C14.3431458,8 13,9.34314575 13,11 C13,12.6568542 14.3431458,14 16,14 Z" fill="#000000" />
																					</g>
																				</svg>
																			</span>
													
																		</span>
																	</div>
											
											
																	<div className="mb-0 me-2">
																		<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Banner Assets</a>
																		<div className="text-gray-400 fs-7">Collection of banner images</div>
																	</div>
											
																</div>
										
										
																<span className="badge badge-light fs-8">21 Jan</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center">
											
																	<div className="symbol symbol-35px me-4">
																		<span className="symbol-label bg-light-warning">
													
																			<span className="svg-icon svg-icon-2 svg-icon-warning">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																					<path d="M12.7442084,3.27882877 L19.2473374,6.9949025 C19.7146999,7.26196679 20.003129,7.75898194 20.003129,8.29726722 L20.003129,15.7027328 C20.003129,16.2410181 19.7146999,16.7380332 19.2473374,17.0050975 L12.7442084,20.7211712 C12.2830594,20.9846849 11.7169406,20.9846849 11.2557916,20.7211712 L4.75266256,17.0050975 C4.28530007,16.7380332 3.99687097,16.2410181 3.99687097,15.7027328 L3.99687097,8.29726722 C3.99687097,7.75898194 4.28530007,7.26196679 4.75266256,6.9949025 L11.2557916,3.27882877 C11.7169406,3.01531506 12.2830594,3.01531506 12.7442084,3.27882877 Z M12,14.5 C13.3807119,14.5 14.5,13.3807119 14.5,12 C14.5,10.6192881 13.3807119,9.5 12,9.5 C10.6192881,9.5 9.5,10.6192881 9.5,12 C9.5,13.3807119 10.6192881,14.5 12,14.5 Z" fill="#000000" />
																				</svg>
																			</span>
													
																		</span>
																	</div>
											
											
																	<div className="mb-0 me-2">
																		<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Icon Assets</a>
																		<div className="text-gray-400 fs-7">Collection of SVG icons</div>
																	</div>
											
																</div>
										
										
																<span className="badge badge-light fs-8">20 March</span>
										
															</div>
									
														</div>
								
								
														<div className="py-3 text-center border-top">
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
							
							
													<div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">
								
														<div className="d-flex flex-column px-9">
									
															<div className="pt-10 pb-0">
										
																<h3 className="text-dark text-center fw-bolder">Get Pro Access</h3>
										
										
																<div className="text-center text-gray-600 fw-bold pt-1">Outlines keep you honest. They stoping you from amazing poorly about drive</div>
										
										
																<div className="text-center mt-5 mb-9">
																	<a href="#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
																</div>
										
															</div>
									
									
															<img className="mh-200px" alt="metronic" src="assets/media/svg/illustrations/work.svg" />
									
														</div>
								
													</div>
							
							
													<div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
								
														<div className="scroll-y mh-325px my-5 px-8">
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center me-2">
											
																	<span className="w-70px badge badge-light-success me-4">200 OK</span>
											
											
																	<a href="#" className="text-gray-800 text-hover-primary fw-bold">New order</a>
											
																</div>
										
										
																<span className="badge badge-light fs-8">Just now</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center me-2">
											
																	<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
											
											
																	<a href="#" className="text-gray-800 text-hover-primary fw-bold">New customer</a>
											
																</div>
										
										
																<span className="badge badge-light fs-8">2 hrs</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center me-2">
											
																	<span className="w-70px badge badge-light-success me-4">200 OK</span>
											
											
																	<a href="#" className="text-gray-800 text-hover-primary fw-bold">Payment process</a>
											
																</div>
										
										
																<span className="badge badge-light fs-8">5 hrs</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center me-2">
											
																	<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
											
											
																	<a href="#" className="text-gray-800 text-hover-primary fw-bold">Search query</a>
											
																</div>
										
										
																<span className="badge badge-light fs-8">2 days</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center me-2">
											
																	<span className="w-70px badge badge-light-success me-4">200 OK</span>
											
											
																	<a href="#" className="text-gray-800 text-hover-primary fw-bold">API connection</a>
											
																</div>
										
										
																<span className="badge badge-light fs-8">1 week</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center me-2">
											
																	<span className="w-70px badge badge-light-success me-4">200 OK</span>
											
											
																	<a href="#" className="text-gray-800 text-hover-primary fw-bold">Database restore</a>
											
																</div>
										
										
																<span className="badge badge-light fs-8">Mar 5</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center me-2">
											
																	<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
											
											
																	<a href="#" className="text-gray-800 text-hover-primary fw-bold">System update</a>
											
																</div>
										
										
																<span className="badge badge-light fs-8">May 15</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center me-2">
											
																	<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
											
											
																	<a href="#" className="text-gray-800 text-hover-primary fw-bold">Server OS update</a>
											
																</div>
										
										
																<span className="badge badge-light fs-8">Apr 3</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center me-2">
											
																	<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
											
											
																	<a href="#" className="text-gray-800 text-hover-primary fw-bold">API rollback</a>
											
																</div>
										
										
																<span className="badge badge-light fs-8">Jun 30</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center me-2">
											
																	<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
											
											
																	<a href="#" className="text-gray-800 text-hover-primary fw-bold">Refund process</a>
											
																</div>
										
										
																<span className="badge badge-light fs-8">Jul 10</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center me-2">
											
																	<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
											
											
																	<a href="#" className="text-gray-800 text-hover-primary fw-bold">Withdrawal process</a>
											
																</div>
										
										
																<span className="badge badge-light fs-8">Sep 10</span>
										
															</div>
									
									
															<div className="d-flex flex-stack py-4">
										
																<div className="d-flex align-items-center me-2">
											
																	<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
											
											
																	<a href="#" className="text-gray-800 text-hover-primary fw-bold">Mail tasks</a>
											
																</div>
										
										
																<span className="badge badge-light fs-8">Dec 10</span>
										
															</div>
									
														</div>
								
								
														<div className="py-3 text-center border-top">
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
												// style="background-image:url('assets/media//misc/pattern-1.jpg')"
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
															<a href="account/billing.html" className="menu-link px-5">Billing</a>
														</div>
								
								
														<div className="menu-item px-3">
															<a href="account/statements.html" className="menu-link px-5">Payments</a>
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
																<img className="rounded-1" src="assets/media/flags/spain.svg" alt="metronic" />
															</span>Spanish</a>
														</div>
								
								
														<div className="menu-item px-3">
															<a href="account/settings.html" className="menu-link d-flex px-5">
															<span className="symbol symbol-20px me-4">
																<img className="rounded-1" src="assets/media/flags/germany.svg" alt="metronic" />
															</span>German</a>
														</div>
								
								
														<div className="menu-item px-3">
															<a href="account/settings.html" className="menu-link d-flex px-5">
															<span className="symbol symbol-20px me-4">
																<img className="rounded-1" src="assets/media/flags/japan.svg" alt="metronic" />
															</span>Japanese</a>
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
					<div className="content d-flex flex-column flex-column-fluid" id="kt_content">

						<div className="toolbar" id="kt_toolbar">
	
							<div id="kt_toolbar_container" className="container-fluid d-flex flex-stack">
		
								<div className="d-flex align-items-center me-3">
			
									<h1 className="d-flex align-items-center text-dark fw-bolder my-1 fs-3">View Friends</h1>
			
			
									<span className="h-20px border-gray-200 border-start mx-4"></span>
			
			
									<ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
				
										<li className="breadcrumb-item text-muted">
											<a href="index.html" className="text-muted text-hover-primary">Home</a>
										</li>
				
				
										<li className="breadcrumb-item">
											<span className="bullet bg-gray-200 w-5px h-2px"></span>
										</li>
				
				
										<li className="breadcrumb-item text-muted">Modals</li>
				
				
										<li className="breadcrumb-item">
											<span className="bullet bg-gray-200 w-5px h-2px"></span>
										</li>
				
				
										<li className="breadcrumb-item text-muted">General</li>
				
				
										<li className="breadcrumb-item">
											<span className="bullet bg-gray-200 w-5px h-2px"></span>
										</li>
				
				
										<li className="breadcrumb-item text-dark">View Users</li>
				
									</ul>
			
								</div>
		
		
								<div className="d-flex align-items-center py-1">
			
									<div className="me-4">
				
										<a href="#" className="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
				
										<span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
											<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<path d="M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z" fill="#000000" />
												</g>
											</svg>
										</span>
				Filter</a>
				
										<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true">
					
											<div className="px-7 py-5">
												<div className="fs-5 text-dark fw-bolder">Filter Options</div>
											</div>
					
					
											<div className="separator border-gray-200"></div>
					
					
											<div className="px-7 py-5">
						
												<div className="mb-10">
							
													<label className="form-label fw-bold">Status:</label>
							
							
													<div>
														<select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true">
															<option></option>
															<option value="1">Approved</option>
															<option value="2">Pending</option>
															<option value="2">In Process</option>
															<option value="2">Rejected</option>
														</select>
													</div>
							
												</div>
						
						
												<div className="mb-10">
							
													<label className="form-label fw-bold">Member Type:</label>
							
							
													<div className="d-flex">
								
														<label className="form-check form-check-sm form-check-custom form-check-solid me-5">
															<input className="form-check-input" type="checkbox" value="1" />
															<span className="form-check-label">Author</span>
														</label>
								
								
														<label className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="2" checked="checked" />
															<span className="form-check-label">Customer</span>
														</label>
								
													</div>
							
												</div>
						
						
												<div className="mb-10">
							
													<label className="form-label fw-bold">Notifications:</label>
							
							
													<div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
														<input className="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
														<label className="form-check-label">Enabled</label>
													</div>
							
												</div>
						
						
												<div className="d-flex justify-content-end">
													<button type="reset" className="btn btn-sm btn-white btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
													<button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
												</div>
						
											</div>
					
										</div>
				
				
									</div>
			
			
									<a href="#" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app" id="kt_toolbar_primary_button">Create</a>
			
								</div>
		
							</div>
	
						</div>


						<div className="post d-flex flex-column-fluid" id="kt_post">
	
							<div id="kt_content_container" className="container">
								{children}
							</div>
						</div>
					
					</div>
				
				
					<div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
					
						<div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
						
							<div className="text-dark order-2 order-md-1">
								<span className="text-muted fw-bold me-1">2021©</span>
								<a href="" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
							</div>
						
						
							<ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
								<li className="menu-item">
									<a href="https://keenthemes.com/faqs" target="_blank" className="menu-link px-2">About</a>
								</li>
								<li className="menu-item">
									<a href="https://keenthemes.com/support" target="_blank" className="menu-link px-2">Support</a>
								</li>
								<li className="menu-item">
									<a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</a>
								</li>
							</ul>
						
						</div>
					
					</div>
				
				</div>
			
			</div>
		
		</div>
	
		<div id="kt_activities" className="bg-white" data-kt-drawer="true" data-kt-drawer-name="activities" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_activities_toggle" data-kt-drawer-close="#kt_activities_close">
			<div className="card shadow-none">
			
				<div className="card-header" id="kt_activities_header">
					<h3 className="card-title fw-bolder text-dark">Activity Logs</h3>
					<div className="card-toolbar">
						<button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
						
							<span className="svg-icon svg-icon-1">
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
			
			
				<div className="card-body position-relative" id="kt_activities_body">
				
					<div id="kt_activities_scroll" className="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_activities_body" data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" data-kt-scroll-offset="5px">
					
						<div className="timeline">
						
							<div className="timeline-item">
							
								<div className="timeline-line w-40px"></div>
							
							
								<div className="timeline-icon symbol symbol-circle symbol-40px me-4">
									<div className="symbol-label bg-light">
									
										<span className="svg-icon svg-icon-2 svg-icon-gray-500">
											<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<polygon fill="#000000" opacity="0.3" points="5 15 3 21.5 9.5 19.5" />
												<path d="M13.5,21 C8.25329488,21 4,16.7467051 4,11.5 C4,6.25329488 8.25329488,2 13.5,2 C18.7467051,2 23,6.25329488 23,11.5 C23,16.7467051 18.7467051,21 13.5,21 Z M9,8 C8.44771525,8 8,8.44771525 8,9 C8,9.55228475 8.44771525,10 9,10 L18,10 C18.5522847,10 19,9.55228475 19,9 C19,8.44771525 18.5522847,8 18,8 L9,8 Z M9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 L14,14 C14.5522847,14 15,13.5522847 15,13 C15,12.4477153 14.5522847,12 14,12 L9,12 Z" fill="#000000" />
											</svg>
										</span>
									
									</div>
								</div>
							
							
								<div className="timeline-content mb-10 mt-n1">
								
									<div className="pe-3 mb-5">
									
										<div className="fs-5 fw-bold mb-2">There are 2 new tasks for you in “AirPlus Mobile APp” project:</div>
									
									
										<div className="d-flex align-items-center mt-1 fs-6">
										
											<div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
										
										
											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
												<img src="assets/media/avatars/150-11.jpg" alt="img" />
											</div>
										
										</div>
									
									</div>
								
								
									<div className="overflow-auto pb-5">
									
										<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
										
											<a href="#" className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px">Meeting with customer</a>
										
										
											<div className="min-w-175px pe-2">
												<span className="badge badge-light text-muted">Application Design</span>
											</div>
										
										
											<div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
											
												<div className="symbol symbol-circle symbol-25px">
													<img src="assets/media/avatars/150-3.jpg" alt="img" />
												</div>
											
											
												<div className="symbol symbol-circle symbol-25px">
													<img src="assets/media/avatars/150-11.jpg" alt="img" />
												</div>
											
											
												<div className="symbol symbol-circle symbol-25px">
													<div className="symbol-label fs-8 fw-bold bg-primary text-inverse-primary">A</div>
												</div>
											
											</div>
										
										
											<div className="min-w-125px pe-2">
												<span className="badge badge-light-primary">In Progress</span>
											</div>
										
										
											<a href="#" className="btn btn-sm btn-light btn-active-light-primary">View</a>
										
										</div>
									
									
										<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
										
											<a href="#" className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px">Project Delivery Preparation</a>
										
										
											<div className="min-w-175px">
												<span className="badge badge-light text-muted">CRM System Development</span>
											</div>
										
										
											<div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
											
												<div className="symbol symbol-circle symbol-25px">
													<img src="assets/media/avatars/150-5.jpg" alt="img" />
												</div>
											
											
												<div className="symbol symbol-circle symbol-25px">
													<div className="symbol-label fs-8 fw-bold bg-success text-inverse-primary">B</div>
												</div>
											
											</div>
										
										
											<div className="min-w-125px">
												<span className="badge badge-light-success">Completed</span>
											</div>
										
										
											<a href="#" className="btn btn-sm btn-light btn-active-light-primary">View</a>
										
										</div>
									
									</div>
								
								</div>
							
							</div>
						
						
							<div className="timeline-item">
							
								<div className="timeline-line w-40px"></div>
							
							
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
									
										<span className="svg-icon svg-icon-2 svg-icon-gray-500">
											<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<path d="M11.6734943,8.3307728 L14.9993074,6.09979492 L14.1213255,5.22181303 C13.7308012,4.83128874 13.7308012,4.19812376 14.1213255,3.80759947 L15.535539,2.39338591 C15.9260633,2.00286161 16.5592283,2.00286161 16.9497526,2.39338591 L22.6066068,8.05024016 C22.9971311,8.44076445 22.9971311,9.07392943 22.6066068,9.46445372 L21.1923933,10.8786673 C20.801869,11.2691916 20.168704,11.2691916 19.7781797,10.8786673 L18.9002333,10.0007208 L16.6692373,13.3265608 C16.9264145,14.2523264 16.9984943,15.2320236 16.8664372,16.2092466 L16.4344698,19.4058049 C16.360509,19.9531149 15.8568695,20.3368403 15.3095595,20.2628795 C15.0925691,20.2335564 14.8912006,20.1338238 14.7363706,19.9789938 L5.02099894,10.2636221 C4.63047465,9.87309784 4.63047465,9.23993286 5.02099894,8.84940857 C5.17582897,8.69457854 5.37719743,8.59484594 5.59418783,8.56552292 L8.79074617,8.13355557 C9.76799113,8.00149544 10.7477104,8.0735815 11.6734943,8.3307728 Z" fill="#000000" />
												<polygon fill="#000000" opacity="0.3" transform="translate(7.050253, 17.949747) rotate(-315.000000) translate(-7.050253, -17.949747)" points="5.55025253 13.9497475 5.55025253 19.6640332 7.05025253 21.9497475 8.55025253 19.6640332 8.55025253 13.9497475" />
											</svg>
										</span>
									
									</div>
								</div>
							
							
								<div className="timeline-content mb-10 mt-n2">
								
									<div className="overflow-auto pe-3">
									
										<div className="fs-5 fw-bold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
									
									
										<div className="d-flex align-items-center mt-1 fs-6">
										
											<div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
										
										
											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
												<img src="assets/media/avatars/150-2.jpg" alt="img" />
											</div>
										
										</div>
									
									</div>
								
								</div>
							
							</div>
						
						
							<div className="timeline-item">
							
								<div className="timeline-line w-40px"></div>
							
							
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
									
										<span className="svg-icon svg-icon-2 svg-icon-gray-500">
											<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<path d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z" fill="#000000" opacity="0.3" transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641)" />
													<path d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z" fill="#000000" transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359)" />
													<path d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z" fill="#000000" opacity="0.3" transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146)" />
													<path d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z" fill="#000000" opacity="0.3" transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961)" />
												</g>
											</svg>
										</span>
									
									</div>
								</div>
							
							
								<div className="timeline-content mb-10 mt-n1">
								
									<div className="mb-5 pe-3">
									
										<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
									
									
										<div className="d-flex align-items-center mt-1 fs-6">
										
											<div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
										
										
											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
												<img src="assets/media/avatars/150-6.jpg" alt="img" />
											</div>
										
										</div>
									
									</div>
								
								
									<div className="overflow-auto pb-5">
										<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
										
											<div className="d-flex flex-aligns-center pe-10 pe-lg-20">
											
												<img alt="" className="w-30px me-3" src="assets/media/svg/files/pdf.svg" />
											
											
												<div className="ms-1 fw-bold">
												
													<a href="#" className="fs-6 text-hover-primary fw-bolder">Finance KPI App Guidelines</a>
												
												
													<div className="text-gray-400">1.9mb</div>
												
												</div>
											
											</div>
										
										
											<div className="d-flex flex-aligns-center pe-10 pe-lg-20">
											
												<img alt="" className="w-30px me-3" src="assets/media/svg/files/doc.svg" />
											
											
												<div className="ms-1 fw-bold">
												
													<a href="#" className="fs-6 text-hover-primary fw-bolder">Client UAT Testing Results</a>
												
												
													<div className="text-gray-400">18kb</div>
												
												</div>
											
											</div>
										
										
											<div className="d-flex flex-aligns-center">
											
												<img alt="" className="w-30px me-3" src="assets/media/svg/files/css.svg" />
											
											
												<div className="ms-1 fw-bold">
												
													<a href="#" className="fs-6 text-hover-primary fw-bolder">Finance Reports</a>
												
												
													<div className="text-gray-400">20mb</div>
												
												</div>
											
											</div>
										
										</div>
									</div>
								
								</div>
							
							</div>
						
						
							<div className="timeline-item">
							
								<div className="timeline-line w-40px"></div>
							
							
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
									
										<span className="svg-icon svg-icon-2 svg-icon-gray-500">
											<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
													<rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width="3" height="18" rx="1" />
												</g>
											</svg>
										</span>
									
									</div>
								</div>
							
							
								<div className="timeline-content mb-10 mt-n1">
								
									<div className="pe-3 mb-5">
									
										<div className="fs-5 fw-bold mb-2">Task
										<a href="#" className="text-primary fw-bolder me-1">#45890</a>merged with
										<a href="#" className="text-primary fw-bolder me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
									
									
										<div className="d-flex align-items-center mt-1 fs-6">
										
											<div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
										
										
											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
												<img src="assets/media/avatars/150-11.jpg" alt="img" />
											</div>
										
										</div>
									
									</div>
								
								</div>
							
							</div>
						
						
							<div className="timeline-item">
							
								<div className="timeline-line w-40px"></div>
							
							
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
									
										<span className="svg-icon svg-icon-2 svg-icon-gray-500">
											<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
												<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
											</svg>
										</span>
									
									</div>
								</div>
							
							
								<div className="timeline-content mb-10 mt-n1">
								
									<div className="pe-3 mb-5">
									
										<div className="fs-5 fw-bold mb-2">3 new application design concepts added:</div>
									
									
										<div className="d-flex align-items-center mt-1 fs-6">
										
											<div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
										
										
											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
												<img src="assets/media/avatars/150-3.jpg" alt="img" />
											</div>
										
										</div>
									
									</div>
								
								
									<div className="overflow-auto pb-5">
										<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
										
											<div className="overlay me-10">
											
												<div className="overlay-wrapper">
													<img alt="img" className="rounded w-200px" src="assets/media/demos/demo1.png" />
												</div>
											
											
												<div className="overlay-layer bg-dark bg-opacity-10 rounded">
													<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
												</div>
											
											</div>
										
										
											<div className="overlay me-10">
											
												<div className="overlay-wrapper">
													<img alt="img" className="rounded w-200px" src="assets/media/demos/demo2.png" />
												</div>
											
											
												<div className="overlay-layer bg-dark bg-opacity-10 rounded">
													<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
												</div>
											
											</div>
										
										
											<div className="overlay">
											
												<div className="overlay-wrapper">
													<img alt="img" className="rounded w-200px" src="assets/media/demos/demo3.png" />
												</div>
											
											
												<div className="overlay-layer bg-dark bg-opacity-10 rounded">
													<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
												</div>
											
											</div>
										
										</div>
									</div>
								
								</div>
							
							</div>
						
						
							<div className="timeline-item">
							
								<div className="timeline-line w-40px"></div>
							
							
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
									
										<span className="svg-icon svg-icon-2 svg-icon-gray-500">
											<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<path d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z" fill="#000000" opacity="0.3" />
												<path d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z" fill="#000000" />
											</svg>
										</span>
									
									</div>
								</div>
							
							
								<div className="timeline-content mb-10 mt-n1">
								
									<div className="pe-3 mb-5">
									
										<div className="fs-5 fw-bold mb-2">New case
										<a href="#" className="text-primary fw-bolder me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
									
									
										<div className="overflow-auto pb-5">
										
											<div className="d-flex align-items-center mt-1 fs-6">
											
												<div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
											
											
												<a href="#" className="text-primary fw-bolder me-1">Alice Tan</a>
											
											</div>
										
										</div>
									
									</div>
								
								</div>
							
							</div>
						
						
							<div className="timeline-item">
							
								<div className="timeline-line w-40px"></div>
							
							
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
									
										<span className="svg-icon svg-icon-2 svg-icon-gray-500">
											<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
												<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
											</svg>
										</span>
									
									</div>
								</div>
							
							
								<div className="timeline-content mb-10 mt-n1">
								
									<div className="pe-3 mb-5">
									
										<div className="fs-5 fw-bold mb-2">You have received a new order:</div>
									
									
										<div className="d-flex align-items-center mt-1 fs-6">
										
											<div className="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
										
										
											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
												<img src="assets/media/avatars/150-14.jpg" alt="img" />
											</div>
										
										</div>
									
									</div>
								
								
									<div className="overflow-auto pb-5">
									
										<div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
										
										
											<span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
												<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<path d="M6,7 C7.1045695,7 8,6.1045695 8,5 C8,3.8954305 7.1045695,3 6,3 C4.8954305,3 4,3.8954305 4,5 C4,6.1045695 4.8954305,7 6,7 Z M6,9 C3.790861,9 2,7.209139 2,5 C2,2.790861 3.790861,1 6,1 C8.209139,1 10,2.790861 10,5 C10,7.209139 8.209139,9 6,9 Z" fill="#000000" fill-rule="nonzero" />
													<path d="M7,11.4648712 L7,17 C7,18.1045695 7.8954305,19 9,19 L15,19 L15,21 L9,21 C6.790861,21 5,19.209139 5,17 L5,8 L5,7 L7,7 L7,8 C7,9.1045695 7.8954305,10 9,10 L15,10 L15,12 L9,12 C8.27142571,12 7.58834673,11.8052114 7,11.4648712 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
													<path d="M18,22 C19.1045695,22 20,21.1045695 20,20 C20,18.8954305 19.1045695,18 18,18 C16.8954305,18 16,18.8954305 16,20 C16,21.1045695 16.8954305,22 18,22 Z M18,24 C15.790861,24 14,22.209139 14,20 C14,17.790861 15.790861,16 18,16 C20.209139,16 22,17.790861 22,20 C22,22.209139 20.209139,24 18,24 Z" fill="#000000" fill-rule="nonzero" />
													<path d="M18,13 C19.1045695,13 20,12.1045695 20,11 C20,9.8954305 19.1045695,9 18,9 C16.8954305,9 16,9.8954305 16,11 C16,12.1045695 16.8954305,13 18,13 Z M18,15 C15.790861,15 14,13.209139 14,11 C14,8.790861 15.790861,7 18,7 C20.209139,7 22,8.790861 22,11 C22,13.209139 20.209139,15 18,15 Z" fill="#000000" fill-rule="nonzero" />
												</svg>
											</span>
										
										
										
											<div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
											
												<div className="mb-3 mb-md-0 fw-bold">
													<h4 className="text-gray-800 fw-bolder">Database Backup Process Completed!</h4>
													<div className="fs-6 text-gray-600 pe-7">Login into Metronic Admin Dashboard to make sure the data integrity is OK</div>
												</div>
											
											
												<a href="#" className="btn btn-primary px-6 align-self-center text-nowrap">Proceed</a>
											
											</div>
										
										</div>
									
									</div>
								
								</div>
							
							</div>
						
						
							<div className="timeline-item">
							
								<div className="timeline-line w-40px"></div>
							
							
								<div className="timeline-icon symbol symbol-circle symbol-40px">
									<div className="symbol-label bg-light">
									
										<span className="svg-icon svg-icon-2 svg-icon-gray-500">
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
									
									</div>
								</div>
							
							
								<div className="timeline-content mt-n1">
								
									<div className="pe-3 mb-5">
									
										<div className="fs-5 fw-bold mb-2">New order
										<a href="#" className="text-primary fw-bolder me-1">#67890</a>is placed for Workshow Planning &amp; Budget Estimation</div>
									
									
										<div className="d-flex align-items-center mt-1 fs-6">
										
											<div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
										
										
											<a href="#" className="text-primary fw-bolder me-1">Jimmy Bold</a>
										
										</div>
									
									</div>
								
								</div>
							
							</div>
						
						</div>
					
					</div>
				
				</div>
			
			
				<div className="card-footer py-5 text-center" id="kt_activities_footer">
					<a href="pages/profile/activity.html" className="btn btn-bg-white text-primary">View All Activities
				
					<span className="svg-icon svg-icon-3 svg-icon-primary">
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
								<h3 className="fw-bold text-center mb-3">Demo2</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo2.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo3</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo3.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo4</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo4.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo5</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo5.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo6</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo6.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo7</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo7.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo8</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo8.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo9</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo9.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo10</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo10.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo11</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo11.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo12</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo12.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo13</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo13.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo14</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo14.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo15</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo15.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo16</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo16.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
									</div>
								</div>
							</div>
						
						
							<div className="mb-7">
								<h3 className="fw-bold text-center mb-3">Demo17</h3>
								<div className="overlay overflow-hidden border border-4 p-2 rounded">
									<div className="overlay-wrapper">
										<img src="assets/media/demos/demo17.png" alt="demo" className="w-100 rounded opacity-75" />
									</div>
									<div className="overlay-layer bg-dark bg-opacity-10">
										<div className="badge badge-light-primary px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
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
	
		<div className="modal fade" id="kt_modal_invite_friends" tabindex="-1" aria-hidden="true">
		
			<div className="modal-dialog mw-650px">
			
				<div className="modal-content">
				
					<div className="modal-header pb-0 border-0 justify-content-end">
					
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
				
				
					<div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
					
						<div className="text-center mb-13">
						
							<h1 className="mb-3">Invite a Friend</h1>
						
						
							<div className="text-gray-400 fw-bold fs-5">If you need more info, please check out
							<a href="#" className="link-primary fw-bolder">FAQ Page</a>.</div>
						
						</div>
					
					
						<div className="btn btn-light-primary fw-bolder w-100 mb-8">
						<img alt="Logo" src="assets/media/svg/social-icons/google.svg" className="h-20px me-3" />Invite Gmail Contacts</div>
					
					
						<div className="separator d-flex flex-center mb-8">
							<span className="text-uppercase bg-white fs-7 fw-bold text-gray-400 px-3">or</span>
						</div>
					
					
						<textarea className="form-control form-control-solid mb-8" rows="3" placeholder="Type or paste emails here"></textarea>
					
					
						<div className="mb-10">
						
							<div className="fs-6 fw-bold mb-2">Your Invitations</div>
						
						
							<div className="mh-300px scroll-y me-n7 pe-7">
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/150-1.jpg" />
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Emma Smith</a>
											<div className="fw-bold text-gray-400">e.smith@kpmg.com.au</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-danger text-danger fw-bold">M</span>
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Melody Macy</a>
											<div className="fw-bold text-gray-400">melody@altbox.com</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1" selected="selected">Guest</option>
											<option value="2">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/150-4.jpg" />
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Sean Bean</a>
											<div className="fw-bold text-gray-400">sean@dellito.com</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/150-15.jpg" />
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Brian Cox</a>
											<div className="fw-bold text-gray-400">brian@exchange.com</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-warning text-warning fw-bold">M</span>
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
											<div className="fw-bold text-gray-400">mikaela@pexcom.com</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/150-8.jpg" />
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
											<div className="fw-bold text-gray-400">f.mitcham@kpmg.com.au</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-danger text-danger fw-bold">O</span>
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
											<div className="fw-bold text-gray-400">olivia@corpmail.com</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-primary text-primary fw-bold">N</span>
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Neil Owen</a>
											<div className="fw-bold text-gray-400">owen.neil@gmail.com</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/150-6.jpg" />
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
											<div className="fw-bold text-gray-400">dam@consilting.com</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1" selected="selected">Guest</option>
											<option value="2">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-danger text-danger fw-bold">E</span>
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Emma Bold</a>
											<div className="fw-bold text-gray-400">emma@intenso.com</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/150-7.jpg" />
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Ana Crown</a>
											<div className="fw-bold text-gray-400">ana.cf@limtel.com</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-info text-info fw-bold">A</span>
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Robert Doe</a>
											<div className="fw-bold text-gray-400">robert@benko.com</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1" selected="selected">Guest</option>
											<option value="2">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/150-17.jpg" />
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">John Miller</a>
											<div className="fw-bold text-gray-400">miller@mapple.com</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-success text-success fw-bold">L</span>
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
											<div className="fw-bold text-gray-400">lucy.m@fentech.com</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/150-10.jpg" />
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
											<div className="fw-bold text-gray-400">ethan@loop.com.au</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/150-8.jpg" />
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
											<div className="fw-bold text-gray-400">f.mitcham@kpmg.com.au</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1" selected="selected">Guest</option>
											<option value="2">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							
								<div className="d-flex flex-stack py-4">
								
									<div className="d-flex align-items-center">
									
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/150-17.jpg" />
										</div>
									
									
										<div className="ms-5">
											<a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">John Miller</a>
											<div className="fw-bold text-gray-400">miller@mapple.com</div>
										</div>
									
									</div>
								
								
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
								
								</div>
							
							</div>
						
						</div>
					
					
						<div className="d-flex flex-stack">
						
							<div className="me-5 fw-bold">
								<label className="fs-6">Adding Users by Team Members</label>
								<div className="fs-7 text-gray-400">If you need more info, please check budget planning</div>
							</div>
						
						
							<label className="form-check form-switch form-check-custom form-check-solid">
								<input className="form-check-input" type="checkbox" value="1" checked="checked" />
								<span className="form-check-label fw-bold text-gray-400">Allowed</span>
							</label>
						
						</div>
					
					</div>
				
				</div>
			
			</div>
		
		</div>
	
		<div className="modal fade" id="kt_modal_create_app" tabindex="-1" aria-hidden="true">
		
			<div className="modal-dialog modal-dialog-centered mw-900px">
			
				<div className="modal-content">
				
					<div className="modal-header">
					
						<h2>Create App</h2>
					
					
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
				
				
					<div className="modal-body py-lg-10 px-lg-10">
					
						<div className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_modal_create_app_stepper">
						
							<div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
							
								<div className="stepper-nav ps-lg-10">
								
									<div className="stepper-item current" data-kt-stepper-element="nav">
									
										<div className="stepper-line w-40px"></div>
									
									
										<div className="stepper-icon w-40px h-40px">
											<i className="stepper-check fas fa-check"></i>
											<span className="stepper-number">1</span>
										</div>
									
									
										<div className="stepper-label">
											<h3 className="stepper-title">Details</h3>
											<div className="stepper-desc">Name your App</div>
										</div>
									
									</div>
								
								
									<div className="stepper-item" data-kt-stepper-element="nav">
									
										<div className="stepper-line w-40px"></div>
									
									
										<div className="stepper-icon w-40px h-40px">
											<i className="stepper-check fas fa-check"></i>
											<span className="stepper-number">2</span>
										</div>
									
									
										<div className="stepper-label">
											<h3 className="stepper-title">Frameworks</h3>
											<div className="stepper-desc">Define your app framework</div>
										</div>
									
									</div>
								
								
									<div className="stepper-item" data-kt-stepper-element="nav">
									
										<div className="stepper-line w-40px"></div>
									
									
										<div className="stepper-icon w-40px h-40px">
											<i className="stepper-check fas fa-check"></i>
											<span className="stepper-number">3</span>
										</div>
									
									
										<div className="stepper-label">
											<h3 className="stepper-title">Database</h3>
											<div className="stepper-desc">Select the app database type</div>
										</div>
									
									</div>
								
								
									<div className="stepper-item" data-kt-stepper-element="nav">
									
										<div className="stepper-line w-40px"></div>
									
									
										<div className="stepper-icon w-40px h-40px">
											<i className="stepper-check fas fa-check"></i>
											<span className="stepper-number">4</span>
										</div>
									
									
										<div className="stepper-label">
											<h3 className="stepper-title">Billing</h3>
											<div className="stepper-desc">Provide payment details</div>
										</div>
									
									</div>
								
								
									<div className="stepper-item" data-kt-stepper-element="nav">
									
										<div className="stepper-line w-40px"></div>
									
									
										<div className="stepper-icon w-40px h-40px">
											<i className="stepper-check fas fa-check"></i>
											<span className="stepper-number">5</span>
										</div>
									
									
										<div className="stepper-label">
											<h3 className="stepper-title">Release</h3>
											<div className="stepper-desc">Review and Submit</div>
										</div>
									
									</div>
								
								</div>
							
							</div>
						
						
							<div className="flex-row-fluid py-lg-5 px-lg-15">
							
								<form className="form" novalidate="novalidate" id="kt_modal_create_app_form">
								
									<div className="current" data-kt-stepper-element="content">
										<div className="w-100">
										
											<div className="fv-row mb-10">
											
												<label className="d-flex align-items-center fs-5 fw-bold mb-2">
													<span className="required">App Name</span>
													<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
												</label>
											
											
												<input type="text" className="form-control form-control-lg form-control-solid" name="name" placeholder="" value="" />
											
											</div>
										
										
											<div className="fv-row">
											
												<label className="d-flex align-items-center fs-5 fw-bold mb-4">
													<span className="required">Category</span>
													<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select your app category"></i>
												</label>
											
											
												<div className="fv-row">
												
													<label className="d-flex flex-stack mb-5 cursor-pointer">
													
														<span className="d-flex align-items-center me-2">
														
															<span className="symbol symbol-50px me-6">
																<span className="symbol-label bg-light-primary">
																
																	<span className="svg-icon svg-icon-1 svg-icon-primary">
																		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																				<rect x="0" y="0" width="24" height="24" />
																				<path d="M13,18.9450712 L13,20 L14,20 C15.1045695,20 16,20.8954305 16,22 L8,22 C8,20.8954305 8.8954305,20 10,20 L11,20 L11,18.9448245 C9.02872877,18.7261967 7.20827378,17.866394 5.79372555,16.5182701 L4.73856106,17.6741866 C4.36621808,18.0820826 3.73370941,18.110904 3.32581341,17.7385611 C2.9179174,17.3662181 2.88909597,16.7337094 3.26143894,16.3258134 L5.04940685,14.367122 C5.46150313,13.9156769 6.17860937,13.9363085 6.56406875,14.4106998 C7.88623094,16.037907 9.86320756,17 12,17 C15.8659932,17 19,13.8659932 19,10 C19,7.73468744 17.9175842,5.65198725 16.1214335,4.34123851 C15.6753081,4.01567657 15.5775721,3.39010038 15.903134,2.94397499 C16.228696,2.49784959 16.8542722,2.4001136 17.3003976,2.72567554 C19.6071362,4.40902808 21,7.08906798 21,10 C21,14.6325537 17.4999505,18.4476269 13,18.9450712 Z" fill="#000000" fill-rule="nonzero" />
																				<circle fill="#000000" opacity="0.3" cx="12" cy="10" r="6" />
																			</g>
																		</svg>
																	</span>
																
																</span>
															</span>
														
														
															<span className="d-flex flex-column">
																<span className="fw-bolder fs-6">Quick Online Courses</span>
																<span className="fs-7 text-muted">Creating a clear text structure is just one SEO</span>
															</span>
														
														</span>
													
													
														<span className="form-check form-check-custom form-check-solid">
															<input className="form-check-input" type="radio" name="category" value="1" />
														</span>
													
													</label>
												
												
													<label className="d-flex flex-stack mb-5 cursor-pointer">
													
														<span className="d-flex align-items-center me-2">
														
															<span className="symbol symbol-50px me-6">
																<span className="symbol-label bg-light-danger">
																
																	<span className="svg-icon svg-icon-1 svg-icon-danger">
																		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																				<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																				<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																				<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																				<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																			</g>
																		</svg>
																	</span>
																
																</span>
															</span>
														
														
															<span className="d-flex flex-column">
																<span className="fw-bolder fs-6">Face to Face Discussions</span>
																<span className="fs-7 text-muted">Creating a clear text structure is just one aspect</span>
															</span>
														
														</span>
													
													
														<span className="form-check form-check-custom form-check-solid">
															<input className="form-check-input" type="radio" name="category" value="2" />
														</span>
													
													</label>
												
												
													<label className="d-flex flex-stack cursor-pointer">
													
														<span className="d-flex align-items-center me-2">
														
															<span className="symbol symbol-50px me-6">
																<span className="symbol-label bg-light-success">
																
																	<span className="svg-icon svg-icon-1 svg-icon-success">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																			<path d="M9,8 C8.44771525,8 8,8.44771525 8,9 L8,15 C8,15.5522847 8.44771525,16 9,16 L15,16 C15.5522847,16 16,15.5522847 16,15 L16,9 C16,8.44771525 15.5522847,8 15,8 L9,8 Z M9,6 L15,6 C16.6568542,6 18,7.34314575 18,9 L18,15 C18,16.6568542 16.6568542,18 15,18 L9,18 C7.34314575,18 6,16.6568542 6,15 L6,9 C6,7.34314575 7.34314575,6 9,6 Z" fill="#000000" fill-rule="nonzero" />
																			<path d="M9,8 C8.44771525,8 8,8.44771525 8,9 L8,15 C8,15.5522847 8.44771525,16 9,16 L15,16 C15.5522847,16 16,15.5522847 16,15 L16,9 C16,8.44771525 15.5522847,8 15,8 L9,8 Z" fill="#000000" opacity="0.3" />
																			<path d="M9,18 L15,18 L15,20.5 C15,21.3284271 14.3284271,22 13.5,22 L10.5,22 C9.67157288,22 9,21.3284271 9,20.5 L9,18 Z" fill="#000000" opacity="0.3" />
																			<path d="M10.5,2 L13.5,2 C14.3284271,2 15,2.67157288 15,3.5 L15,6 L9,6 L9,3.5 C9,2.67157288 9.67157288,2 10.5,2 Z" fill="#000000" opacity="0.3" />
																		</svg>
																	</span>
																
																</span>
															</span>
														
														
															<span className="d-flex flex-column">
																<span className="fw-bolder fs-6">Full Intro Training</span>
																<span className="fs-7 text-muted">Creating a clear text structure copywriting</span>
															</span>
														
														</span>
													
													
														<span className="form-check form-check-custom form-check-solid">
															<input className="form-check-input" type="radio" name="category" value="3" />
														</span>
													
													</label>
												
												</div>
											
											</div>
										
										</div>
									</div>
								
								
									<div data-kt-stepper-element="content">
										<div className="w-100">
										
											<div className="fv-row">
											
												<label className="d-flex align-items-center fs-5 fw-bold mb-4">
													<span className="required">Select Framework</span>
													<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your apps framework"></i>
												</label>
											
											
												<label className="d-flex flex-stack cursor-pointer mb-5">
												
													<span className="d-flex align-items-center me-2">
													
														<span className="symbol symbol-50px me-6">
															<span className="symbol-label bg-light-warning">
																<i className="fab fa-html5 text-warning fs-2x"></i>
															</span>
														</span>
													
													
														<span className="d-flex flex-column">
															<span className="fw-bolder fs-6">HTML5</span>
															<span className="fs-7 text-muted">Base Web Projec</span>
														</span>
													
													</span>
												
												
													<span className="form-check form-check-custom form-check-solid">
														<input className="form-check-input" type="radio" checked="checked" name="framework" value="1" />
													</span>
												
												</label>
											
											
												<label className="d-flex flex-stack cursor-pointer mb-5">
												
													<span className="d-flex align-items-center me-2">
													
														<span className="symbol symbol-50px me-6">
															<span className="symbol-label bg-light-success">
																<i className="fab fa-react text-success fs-2x"></i>
															</span>
														</span>
													
													
														<span className="d-flex flex-column">
															<span className="fw-bolder fs-6">ReactJS</span>
															<span className="fs-7 text-muted">Robust and flexible app framework</span>
														</span>
													
													</span>
												
												
													<span className="form-check form-check-custom form-check-solid">
														<input className="form-check-input" type="radio" name="framework" value="2" />
													</span>
												
												</label>
											
											
												<label className="d-flex flex-stack cursor-pointer mb-5">
												
													<span className="d-flex align-items-center me-2">
													
														<span className="symbol symbol-50px me-6">
															<span className="symbol-label bg-light-danger">
																<i className="fab fa-angular text-danger fs-2x"></i>
															</span>
														</span>
													
													
														<span className="d-flex flex-column">
															<span className="fw-bolder fs-6">Angular</span>
															<span className="fs-7 text-muted">Powerful data mangement</span>
														</span>
													
													</span>
												
												
													<span className="form-check form-check-custom form-check-solid">
														<input className="form-check-input" type="radio" name="framework" value="3" />
													</span>
												
												</label>
											
											
												<label className="d-flex flex-stack cursor-pointer">
												
													<span className="d-flex align-items-center me-2">
													
														<span className="symbol symbol-50px me-6">
															<span className="symbol-label bg-light-primary">
																<i className="fab fa-vuejs text-primary fs-2x"></i>
															</span>
														</span>
													
													
														<span className="d-flex flex-column">
															<span className="fw-bolder fs-6">Vue</span>
															<span className="fs-7 text-muted">Lightweight and responsive framework</span>
														</span>
													
													</span>
												
												
													<span className="form-check form-check-custom form-check-solid">
														<input className="form-check-input" type="radio" name="framework" value="4" />
													</span>
												
												</label>
											
											</div>
										
										</div>
									</div>
								
								
									<div data-kt-stepper-element="content">
										<div className="w-100">
										
											<div className="fv-row mb-10">
											
												<label className="required fs-5 fw-bold mb-2">Database Name</label>
											
											
												<input type="text" className="form-control form-control-lg form-control-solid" name="dbname" placeholder="" value="master_db" />
											
											</div>
										
										
											<div className="fv-row">
											
												<label className="d-flex align-items-center fs-5 fw-bold mb-4">
													<span className="required">Select Database Engine</span>
													<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select your app database engine"></i>
												</label>
											
											
												<label className="d-flex flex-stack cursor-pointer mb-5">
												
													<span className="d-flex align-items-center me-2">
													
														<span className="symbol symbol-50px me-6">
															<span className="symbol-label bg-light-success">
																<i className="fas fa-database text-success fs-2x"></i>
															</span>
														</span>
													
													
														<span className="d-flex flex-column">
															<span className="fw-bolder fs-6">MySQL</span>
															<span className="fs-7 text-muted">Basic MySQL database</span>
														</span>
													
													</span>
												
												
													<span className="form-check form-check-custom form-check-solid">
														<input className="form-check-input" type="radio" name="dbengine" checked="checked" value="1" />
													</span>
												
												</label>
											
											
												<label className="d-flex flex-stack cursor-pointer mb-5">
												
													<span className="d-flex align-items-center me-2">
													
														<span className="symbol symbol-50px me-6">
															<span className="symbol-label bg-light-danger">
																<i className="fab fa-google text-danger fs-2x"></i>
															</span>
														</span>
													
													
														<span className="d-flex flex-column">
															<span className="fw-bolder fs-6">Firebase</span>
															<span className="fs-7 text-muted">Google based app data management</span>
														</span>
													
													</span>
												
												
													<span className="form-check form-check-custom form-check-solid">
														<input className="form-check-input" type="radio" name="dbengine" value="2" />
													</span>
												
												</label>
											
											
												<label className="d-flex flex-stack cursor-pointer">
												
													<span className="d-flex align-items-center me-2">
													
														<span className="symbol symbol-50px me-6">
															<span className="symbol-label bg-light-warning">
																<i className="fab fa-amazon text-warning fs-2x"></i>
															</span>
														</span>
													
													
														<span className="d-flex flex-column">
															<span className="fw-bolder fs-6">DynamoDB</span>
															<span className="fs-7 text-muted">Amazon Fast NoSQL Database</span>
														</span>
													
													</span>
												
												
													<span className="form-check form-check-custom form-check-solid">
														<input className="form-check-input" type="radio" name="dbengine" value="3" />
													</span>
												
												</label>
											
											</div>
										
										</div>
									</div>
								
								
									<div data-kt-stepper-element="content">
										<div className="w-100">
										
											<div className="d-flex flex-column mb-7 fv-row">
											
												<label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
													<span className="required">Name On Card</span>
													<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
												</label>
											
												<input type="text" className="form-control form-control-solid" placeholder="" name="card_name" value="Max Doe" />
											</div>
										
										
											<div className="d-flex flex-column mb-7 fv-row">
											
												<label className="required fs-6 fw-bold form-label mb-2">Card Number</label>
											
											
												<div className="position-relative">
												
													<input type="text" className="form-control form-control-solid" placeholder="Enter card number" name="card_number" value="4111 1111 1111 1111" />
												
												
													<div className="position-absolute translate-middle-y top-50 end-0 me-5">
														<img src="assets/media/svg/card-logos/visa.svg" alt="" className="h-25px" />
														<img src="assets/media/svg/card-logos/mastercard.svg" alt="" className="h-25px" />
														<img src="assets/media/svg/card-logos/american-express.svg" alt="" className="h-25px" />
													</div>
												
												</div>
											
											</div>
										
										
											<div className="row mb-10">
											
												<div className="col-md-8 fv-row">
												
													<label className="required fs-6 fw-bold form-label mb-2">Expiration Date</label>
												
												
													<div className="row fv-row">
													
														<div className="col-6">
															<select name="card_expiry_month" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Month">
																<option></option>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
																<option value="7">7</option>
																<option value="8">8</option>
																<option value="9">9</option>
																<option value="10">10</option>
																<option value="11">11</option>
																<option value="12">12</option>
															</select>
														</div>
													
													
														<div className="col-6">
															<select name="card_expiry_year" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
																<option></option>
																<option value="2021">2021</option>
																<option value="2022">2022</option>
																<option value="2023">2023</option>
																<option value="2024">2024</option>
																<option value="2025">2025</option>
																<option value="2026">2026</option>
																<option value="2027">2027</option>
																<option value="2028">2028</option>
																<option value="2029">2029</option>
																<option value="2030">2030</option>
																<option value="2031">2031</option>
															</select>
														</div>
													
													</div>
												
												</div>
											
											
												<div className="col-md-4 fv-row">
												
													<label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
														<span className="required">CVV</span>
														<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
													</label>
												
												
													<div className="position-relative">
													
														<input type="text" className="form-control form-control-solid" minlength="3" maxlength="4" placeholder="CVV" name="card_cvv" />
													
													
														<div className="position-absolute translate-middle-y top-50 end-0 me-3">
														
															<span className="svg-icon svg-icon-2hx">
																<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																		<rect x="0" y="0" width="24" height="24" />
																		<rect fill="#000000" opacity="0.3" x="2" y="5" width="20" height="14" rx="2" />
																		<rect fill="#000000" x="2" y="8" width="20" height="3" />
																		<rect fill="#000000" opacity="0.3" x="16" y="14" width="4" height="2" rx="1" />
																	</g>
																</svg>
															</span>
														
														</div>
													
													</div>
													
												</div>
												
											</div>
											
											
											<div className="d-flex flex-stack">
												
												<div className="me-5">
													<label className="fs-6 fw-bold form-label">Save Card for further billing?</label>
													<div className="fs-7 fw-bold text-gray-400">If you need more info, please check budget planning</div>
												</div>
												
												
												<label className="form-check form-switch form-check-custom form-check-solid">
													<input className="form-check-input" type="checkbox" value="1" checked="checked" />
													<span className="form-check-label fw-bold text-gray-400">Save Card</span>
												</label>
												
											</div>
											
										</div>
									</div>
									
									
									<div data-kt-stepper-element="content">
										<div className="w-100 text-center">
											
											<h1 className="fw-bolder text-dark mb-3">Release!</h1>
											
											
											<div className="text-muted fw-bold fs-3">Submit your app to kickstart your project.</div>
											
											
											<div className="py-15">
												<img src="assets/media/svg/illustrations/todo.svg" alt="" className="mx-auto w-100 mh-150px" />
											</div>
											
										</div>
									</div>
									
									
									<div className="d-flex flex-stack pt-10">
										
										<div className="me-2">
											<button type="button" className="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
											
											<span className="svg-icon svg-icon-3 me-1">
												<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<polygon points="0 0 24 0 24 24 0 24" />
														<rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000)" x="14" y="7" width="2" height="10" rx="1" />
														<path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997)" />
													</g>
												</svg>
											</span>
											Back</button>
										</div>
										
										
										<div>
											<button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="submit">
												<span className="indicator-label">Submit
												
												<span className="svg-icon svg-icon-3 ms-2 me-0">
													<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
														<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
															<polygon points="0 0 24 0 24 24 0 24" />
															<rect fill="#000000" opacity="0.5" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width="2" height="9" rx="1" />
															<path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
														</g>
													</svg>
												</span>
												</span>
												<span className="indicator-progress">Please wait...
												<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
											</button>
											<button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue
											
											<span className="svg-icon svg-icon-3 ms-1 me-0">
												<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<polygon points="0 0 24 0 24 24 0 24" />
														<rect fill="#000000" opacity="0.5" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width="2" height="9" rx="1" />
														<path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
													</g>
												</svg>
											</span>
											</button>
										</div>
										
									</div>
									
								</form>
								
							</div>
							
						</div>
						
					</div>
					
				</div>
				
			</div>
			
		</div>
		
		<div className="modal fade" id="kt_modal_upgrade_plan" tabindex="-1" aria-hidden="true">
			
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