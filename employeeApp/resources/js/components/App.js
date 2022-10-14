import React from "react";
import ReactDOM from "react-dom";
import Table from './employeeList/Table'
import Example from './Example'

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <Table/>
                <Example/>
            </div>
        </div>
    );
}

export default App;
