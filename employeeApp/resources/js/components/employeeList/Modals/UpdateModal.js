import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class UpdateModal extends Component {
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

    static getDerivedStateFromProps(props, current_state) {
        let employeeUpdate = {
            employeeName: null,
            employeeSalary: null,
        };

        if (
            current_state.employeeName &&
            (current_state.employeeName !==
                props.employeeData.currentEmployeeName ||
                current_state.employeeName ===
                    props.employeeData.currentEmployeeName)
        ) {
            return null;
        }
        if (
            current_state.employeeSalary &&
            (current_state.employeeSalary !==
                props.employeeData.currentEmployeeSalary ||
                current_state.employeeSalary ===
                    props.employeeData.currentEmployeeSalary)
        ) {
            return null;
        }

        if (
            current_state.employeeName !==
            props.employeeData.currentEmployeeName
        ) {
            employeeUpdate.employeeName =
                props.employeeData.currentEmployeeName;
        }

        if (
            current_state.employeeSalary !==
            props.employeeData.currentEmployeeSalary
        ) {
            employeeUpdate.employeeSalary =
                props.employeeData.currentEmployeeSalary;
        }

        return employeeUpdate;
    }

    updateEmployeeData = () => {
        axios
            .post("/update/employee/data", {
                employeeId: this.props.modalId,
                employeeName: this.state.employeeName,
                employeeSalary: this.state.employeeSalary,
            })
            .then(() => {
                toast.success("Employee has been updated.");
                setTimeout(() => {
                    location.reload();
                }, 2500);
            });
    };

    render() {
        return (
            <div
                className="modal fade"
                id={"updateModal" + this.props.modalId}
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
                                        value={this.state.employeeName ?? ""}
                                        onChange={this.inputEmployeeName}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="employeeSalary"
                                        value={this.state.employeeSalary ?? ""}
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
                            <button
                                type="submit"
                                className="btn btn-primary"
                                value="Update"
                                onClick={this.updateEmployeeData}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateModal;
