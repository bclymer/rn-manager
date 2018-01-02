import firebase from 'firebase';
import { NavigationActions } from "react-navigation";

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                loginUserFailure(dispatch)
            });
    };
};

const loginUserFailure = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAILURE
    })
};

const loginUserSuccess = (dispatch, user) => {
    const navigateToMain = NavigationActions.navigate({
        routeName: "Main"
    });
    dispatch(navigateToMain);
}