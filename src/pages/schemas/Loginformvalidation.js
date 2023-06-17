import axios from 'axios';
import * as Yup from 'yup';

export const SignInUser = Yup.object({
    email: Yup.string()
    .email()
    .required("Please enter email")
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,'Invalid email address'),
    password: Yup.string().min(6).max(25).required("Please enter password"),
});