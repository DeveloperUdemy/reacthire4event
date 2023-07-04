import * as Yup from 'yup';
export const ContactValidation = Yup.object({
    name: Yup.string().min(2).max(30).required("Please enter full name"),
    email: Yup.string()
    .email()
    .required("Please enter email")
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,'Invalid email address'),
    phone: Yup.string()
    .required("Please enter mobile number")
    .matches(/^[6-9]\d{9}$/,"Invalid mobile number"),   
    address: Yup.string().min(2,"Please enter full address").max(150,"You can only 150 Limits for your address"),
    message: Yup.string().max(300,"You can not write more then 300!"),
});