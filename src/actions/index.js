import * as types from '../constants/ActionTypes'
export const allEmployees = (employeesList) => { return { type: types.EMPLOYEELIST, employeesList } };

export const allParkingLots = (parkinglotsList) => { return { type: types.PARKINGLOTLIST, parkinglotsList } }



