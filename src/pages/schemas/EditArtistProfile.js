import axios from 'axios';
import * as Yup from 'yup';
const SUPPORTED_FORMAT = ["image/jpg","image/png","image/jpeg"];


 const userID = (JSON.parse(localStorage.getItem('loginAuth')));

export const EditArtistFormValidation = Yup.object({
    user_image: Yup
    .mixed()
    .nullable()
    .test(
     "FILE_SIZE",
     "Uploaded file is too big.",
     (value) => !value || (value && value.size <= 1024 * 1024)
    )
    .test(
        "FILE_FORMAT",
        "Uploaded file has unsupported format.",
        (value) => !value || (value && SUPPORTED_FORMAT.includes(value?.type))
    ),
    first_name: Yup.string().min(2).max(30).required("Please enter first name"),
    last_name: Yup.string().min(2).max(30).required("Please enter last name"),
    email: Yup.string()
    .email()
    .required("Please enter email address")
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,'Invalid email address')
    .test('Unique Email', 'This email Already taken.',
    function (value) {
        return new Promise((resolve) => {
            const headers = {
                'Content-Type': 'application/json',
                'Content-Type': 'multipart/form-data'
              };
            let postData = { 'email' : value, 'register_id' : userID.userProfile.id}; 
            axios.post('https://hire4event.com/apppanel/api/Artist/editcheckemail',postData, {headers})
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
            let postData = { 'mobile' : value, 'register_id' : userID.userProfile.id}; 
            axios.post('https://hire4event.com/apppanel/api/Artist/editcheckmobile',postData, {headers})
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
    category: Yup.string().required("Please select category"),
    city: Yup.string().min(2).required("Please enter city"),
    performance_duration: Yup.string().required("This field is required"),
    open_to_travel: Yup.string().min(2).required("This field is required"),
    music_genre: Yup.string().required("This field is required"),
    team_members: Yup.string().required("Please enter team member"),
    location: Yup.string().min(2).required("Please enter location"),
    artist_keyword: Yup.string().max(55, 'Max 55 charactors').required("Please enter Keywords related to your profile"),
    description: Yup.string().min(200,'Please enter min 200 charactors').required("Please enter description"),
});