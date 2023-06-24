import * as Yup from 'yup';

export const UserChangePassword = Yup.object({
    current_password: Yup.string()
    .min(6)
    .max(25)
    .required("Please enter current password"),
    password: Yup.string().min(6).max(25).required("Please enter password"),
    confirm_password: Yup.string().required("Please enter confirm password").oneOf([Yup.ref('password'), null], "Password must match"),
});