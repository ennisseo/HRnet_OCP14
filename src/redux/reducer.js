import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    employeeDataList: [],
};

const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employeeDataList.push(action.payload);
        },
    },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
