import * as Yup from 'yup';
export const VendorValidation = Yup.object({
    contact_person: Yup.string().min(2).max(30).required("Please enter full name"),
    business_name: Yup.string().min(2).max(30).required("Please enter business name"),
    type_of_work: Yup.string().min(2).max(30).required("Please enter type of work"),
    location: Yup.string().min(2).max(30).required("Please enter location"),
    experience: Yup.string().min(2).max(30).required("Please enter experience"),
    contact_number: Yup.string()
    .required("Please enter mobile number")
    .matches(/^[6-9]\d{9}$/,"Invalid mobile number"), 
    contact_email: Yup.string()
    .email()
    .required("Please enter email address")
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,'Invalid email address'), 
});