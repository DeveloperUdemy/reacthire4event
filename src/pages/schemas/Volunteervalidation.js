import * as Yup from 'yup';
export const VolunteerValidation = Yup.object({
    name: Yup.string().min(2).max(30).required("Please enter full name"),
    fathername: Yup.string().min(2).max(30).required("Please enter father name"),
    phone: Yup.string()
    .required("Please enter mobile number")
    .matches(/^[6-9]\d{9}$/,"Invalid mobile number"), 
    whatsappnumber: Yup.string()
    .required("Please enter whatsapp number")
    .matches(/^[6-9]\d{9}$/,"Invalid whatsapp number"),  
    email: Yup.string()
    .email()
    .required("Please enter email")
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,'Invalid email address'), 
});