import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

 function Protected(props) {
   const {Component} = props;
   const navigate = useNavigate();

   useEffect(() => { 
    let loginUser = JSON.parse(localStorage.getItem('loginAuth'));
    if(!loginUser)
    {
        navigate('/');
    }
     },[]);
  return (
    <>
      <Component/>
    </>
  )
}
export default Protected;
