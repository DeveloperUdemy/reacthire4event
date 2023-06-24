import axios from 'axios';
import * as Yup from 'yup';

export const EmailsubscriberValid = Yup.object({
    email: Yup.string()
    .email()
    .required("Please enter valid email address")
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,'Invalid email address')
    .test('Unique Email', 'This email already Subscribed.',
    function (value) {
        return new Promise((resolve) => {
            const headers = {
                'Content-Type': 'application/json',
                'Content-Type': 'multipart/form-data'
              };
            let postData = { 'email' : value}; 
            axios.post('https://hire4event.com/apppanel/api/user/checkemail_subscriber',postData, {headers})
                .then((res) => {
                    resolve(true)
                })
                .catch((error) => {
                    if (error.response.data.message === "The email has already been Subscribed.") {
                        resolve(false);
                        //console.log(error.response.data);
                    }
                })
        })
    }
), 
});