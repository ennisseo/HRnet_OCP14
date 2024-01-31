import React, { useState } from 'react';
import './index.css'
import SelectMenu from '../DropdownMenu';
import statesList from '../../data/statesList';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from '@ennisseo/modal-component';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/reducer';

const initialEmployeeData = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: 'Alabama',
    zipCode: '',
    department: 'Sales',
};

// Functional component for the form
const CreateEmployeeForm = () => {
    const dispatch = useDispatch();

    // State variables to store form data
    const [employeeData, setEmployeeData] = useState(initialEmployeeData);
    const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

    const departmentOptions = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

    // Event handler for form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const updatedValue = name.toLowerCase().includes('date') && value instanceof Date ? value.toISOString().split('T')[0] : value;

        setEmployeeData({
            ...employeeData,
            [name]: updatedValue,
        });
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Employee data saved:', employeeData);
        dispatch(addEmployee(employeeData));
        setSuccessModalOpen(true);
    };

    const closeSuccessModal = () => {
        setSuccessModalOpen(false);
        setEmployeeData(initialEmployeeData);
    };

    // JSX for the form
    return (
        <div className="form-container">
            <form>
                <div className="form-first-part">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        name="firstName"
                        value={employeeData.firstName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        name="lastName"
                        value={employeeData.lastName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <ReactDatePicker
                        selected={employeeData.dateOfBirth ? new Date(employeeData.dateOfBirth) : null}
                        onChange={(date) =>
                            handleInputChange({
                                target: { name: 'dateOfBirth', value: date },
                            })
                        }
                        dateFormat="MM/dd/yyyy"
                    />

                    <label htmlFor="start-date">Start Date</label>
                    <ReactDatePicker
                        selected={employeeData.startDate ? new Date(employeeData.startDate) : null}
                        onChange={(date) =>
                            handleInputChange({
                                target: { name: 'startDate', value: date },
                            })
                        }
                        dateFormat="MM/dd/yyyy"
                    />
                </div>

                <div className="form-second-part">
                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input
                            id="street"
                            type="text"
                            name="street"
                            value={employeeData.street}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            value={employeeData.city}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="state">State</label>
                        <SelectMenu
                            options={statesList.map(state => state.name)}
                            selected={employeeData.state}
                            onChange={(newState) =>
                                handleInputChange({
                                    target: { name: 'state', value: newState },
                                })
                            }
                        />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input
                            id="zip-code"
                            type="number"
                            name="zipCode"
                            value={employeeData.zipCode}
                            onChange={handleInputChange}
                        />
                    </fieldset>
                </div>

                <div className="form-third-part">
                    <label htmlFor="department">Department</label>
                    <SelectMenu
                        options={departmentOptions}
                        selected={employeeData.department}
                        onChange={(newDepartment) =>
                            handleInputChange({
                                target: { name: 'department', value: newDepartment },
                            })
                        }
                    />
                </div>
            </form>
            <button className="submit-button" onClick={handleSubmit}>Save</button>
            <Modal isOpen={isSuccessModalOpen} closeModal={closeSuccessModal} />
        </div>
    );
};

export default CreateEmployeeForm;
