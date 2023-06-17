import React, {useContext} from 'react';
import Userheader from './Userheader';
import Usersidebar from './Usersidebar';
import noteContext from '../context/noteContext';
import { FaEdit } from "react-icons/fa";
function Editemail ()  {
  const userDetail = useContext(noteContext);
  console.log(userDetail);
    return (
    <div>
        <Userheader/>
        <section class="space-ptb bg-light">
        <div class="container">
        <div class="row">
        <div class="col-lg-2 col-md-4">
        
        </div>
      <div class="col-lg-8 col-md-8">
        <div class="sidebar mb-0">
          <div class="widget">
            <div class="widget-title bg-primary">
              <h6 class="text-white mb-0"> <FaEdit style={{fontSize: "22px"}}/> Edit Email Address </h6>
            </div>
            <div class="widget-content">
              <form id="Hire4event-updateProfile" method="POST">
                  <div id="error_profile"></div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <input type="email" required class="form-control" name="user_email" value={userDetail.userProfile.email}/>
                </div>
             
                <div class="form-group col-md-2">
                  <button type="submit" class="form-control btn btn-secondary">Submit</button>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-4">
        
        </div>
    </div>
  </div>
</section>
    </div>
  )
}
export default Editemail;
