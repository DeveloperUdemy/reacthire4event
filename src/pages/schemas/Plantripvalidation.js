
import * as Yup from 'yup';

export const PlanTripValidation = Yup.object({
    username: Yup.string().min(2).max(30).required("Please enter your full name!"),
    email: Yup.string()
    .email()
    .required("Please enter email address!")
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,'Invalid email address!'),
    mobile: Yup.string()
    .required("Please enter mobile number!")
    .matches(/^[6-9]\d{9}$/,"Invalid mobile number!"),   
    message: Yup.string().min(20, "Please complete One Sentense.").max(200, "You can not write more then 200"),
});