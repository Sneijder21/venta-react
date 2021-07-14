import React from 'react';
const Notification2Layout = () => {
    return (
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
    );
}
export default Notification2Layout;