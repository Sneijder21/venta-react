import React from 'react';

const AdvancedSearchLayout = () => {
    return (
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

    );
}
export default AdvancedSearchLayout;