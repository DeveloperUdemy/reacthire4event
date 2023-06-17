
import * as Yup from 'yup';

export const Editprofilevalidation = Yup.object({
    name: Yup.string().min(2).max(30).required("Please enter full name"),
    mobile: Yup.string()
    .required("Please enter mobile number")
    .matches(/^[6-9]\d{9}$/,"Invalid mobile number"),   
    address: Yup.string().min(4).max(100).required("Please enter your full address"),
});