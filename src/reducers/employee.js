import * as types from '../constants/ActionTypes'
export default (state=[], action) => {
    switch (action.type) {
       case types.EMPLOYEELIST:{
            let newState = [...state]
            newState = action.employeesList
            return newState;
        }
        default:
            return state
    }
}