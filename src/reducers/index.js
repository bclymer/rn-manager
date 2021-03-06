import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeListReducer from './EmployeeListReducer';

export default combineReducers({
  auth: AuthReducer,
  nav: NavReducer,
  employeeForm: EmployeeFormReducer,
  employeeList: EmployeeListReducer,
});
