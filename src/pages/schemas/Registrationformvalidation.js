import axios from 'axios';
import * as Yup from 'yup';

export const SignUpUser = Yup.object({
    name: Yup.string().min(2).max(30).required("Please enter full name"),
    email: Yup.string()
    .email()
    .required("Please enter email")
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,'Invalid email address')
    .test('Unique Email', 'This email Already taken.',
    function (value) {
        return new Promise((resolve) => {
            const headers = {
                'Content-Type': 'application/json',
                'Content-Type': 'multipart/form-data'
              };
            let postData = { 'email' : value}; 
            axios.post('https://hire4event.com/apppanel/api/user/checkemail',postData, {headers})
                .then((res) => {
                    resolve(true)
                })
                .catch((error) => {
                    if (error.response.data.message === "The email has already been taken.") {
                        resolve(false);
                        //console.log(error.response.data);
                    }
                })
        })
    }
),
    mobile: Yup.string()
    .required("Please enter mobile number")
    .matches(/^[6-9]\d{9}$/,"Invalid mobile number")
    .test('Unique Phone', 'This mobile Already taken.',
    function (value) {
        return new Promise((resolve) => {
            const headers = {
                'Content-Type': 'application/json',
                'Content-Type': 'multipart/form-data'
              };
            let postData = { 'mobile' : value}; 
            axios.post('https://hire4event.com/apppanel/api/user/checkmobile',postData, {headers})
                .then((res) => {
                    resolve(true)
                })
                .catch((error) => {
                    if (error.response.data.message === "The mobile has already been taken.") {
                        resolve(false);
                        //console.log(error.response.data);
                    }
                })
        })
    }
    ),   
    password: Yup.string().min(6).max(25).required("Please enter password"),
    confirm_password: Yup.string().required("Please enter confirm password").oneOf([Yup.ref('password'), null], "Password must match"),

});