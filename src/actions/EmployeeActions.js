import { NavigationActions } from 'react-navigation';

import {
  EMPLOYEE_UPDATE,
} from './types';

export const createEmployee = () => {
  return NavigationActions.navigate({ routeName: 'EmployeeCreate' });
};

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};
