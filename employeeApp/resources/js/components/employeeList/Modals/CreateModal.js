import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";

class CreateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null,
        };
    }

    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        });
    };

    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        });
    };

    storeEmployeeData = () => {
        axios
            .post("/store/employee/data", {
                employeeName: this.state.employeeName,
                employeeSalary: this.state.employeeSalary,
            })
            .then(() => {
                toast.success("Succesfully Added.");

                setTimeout(() => {
                    location.reload();
                }, 2500);
            });
    };

    render() {
        return (
            <>
                <div className="row text-right mb-3 pb3">
                    <button
                        className="btn btn-info text-right col-3 offset-md-9"
                        data-toggle="model"
                        data-target="#modalCreate"
                    >
                        Add New Employee
                    </button>
                </div>
                <div
                    className="modal fade"
                    id="modalCreate"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLongTitle"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLongTitle"
                                >
                                    Employee Details
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="form" action="">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="employeeName"
                                            placeholder="Enter name"
                                            onChange={this.inputEmployeeName}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="employeeSalary"
                                            placeholder="Enter Salary"
                                            onChange={this.inputEmployeeSalary}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <input
                                    type="button"
                                    value="Save"
                                    onChange={this.storeEmployeeData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CreateModal;
