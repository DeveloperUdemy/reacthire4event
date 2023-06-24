import React, { useState } from 'react'

export default function Previewimage({file}) {
  const [profileImage, setProfileImage] = useState('https://www.hire4event.com/apppanel/assets/primaryimage/icons-user-profile-man-icon.png');
   
  const reader = new FileReader(); 
  reader.readAsDataURL(file);
  reader.onload = () => {
    setProfileImage(reader.result);
  }
  return (
    <>
    <img src={profileImage} class="avatar img-circle" id="ArtistPic" alt="Artist Profile" style={{width:"100%",height: "200px", marginBottom: "15px"}} />
    </>
  )
}
