import React from 'react';

const PreferencesLayout = () => {
    return (
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

    );
}
export default PreferencesLayout;