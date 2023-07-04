import * as Yup from 'yup';
export const ArtistEnquiryValidation = Yup.object({
    user_name: Yup.string().min(2).max(30).required("Please enter full name"),
    user_email: Yup.string()
    .email()
    .required("Please enter email")
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,'Invalid email address'),
    user_mobile: Yup.string()
    .required("Please enter mobile number")
    .matches(/^[6-9]\d{9}$/,"Invalid mobile number"),   
    user_description: Yup.string().max(25, "You can write only 200 limits."),
});