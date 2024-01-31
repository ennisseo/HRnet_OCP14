import React from 'react';
import DataTable from '../../components/DataTable';
import { useSelector } from 'react-redux';

function EmployeeList() {
    const employeeDataList = useSelector((state) => state.employeeDataList);

    return (
        <main>
            <h1 className="title">Current employees</h1>
            <DataTable data={employeeDataList} />
        </main>
    );
}

export default EmployeeList;
