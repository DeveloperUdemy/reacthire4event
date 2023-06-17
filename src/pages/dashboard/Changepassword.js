import React from 'react';
import Userheader from './Userheader';
import Usersidebar from './Usersidebar';
import { FaRegUserCircle } from "react-icons/fa";
function Changepassword() {
    return (
        <div>
            <Userheader />
            <section class="space-ptb bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-4">
                
                        </div>
                        <div class="col-lg-8 col-md-8">
                            <div class="sidebar mb-0">
                                <div class="widget">
                                    <div class="widget-title bg-primary">
                                        <h6 class="text-white mb-0"> <FaRegUserCircle style={{ fontSize: "22px" }} /> Change Password </h6>
                                    </div>
                                    <div class="widget-content">
                                        <form id="Hire4event-updateProfile" method="POST">
                                            <div id="error_profile"></div>
                                            <div class="form-row">

                                                <div class="form-group col-md-4">
                                                    <label>Current Password*</label>
                                                    <input type="password" required class="form-control" name="current_password" />
                                                </div>

                                                <div class="form-group col-md-4">
                                                    <label>New Password*</label>
                                                    <input type="password" required class="form-control" name="new_password" />
                                                </div>

                                                <div class="form-group col-md-4">
                                                    <label>Confirm Password*</label>
                                                    <input type="password" class="form-control" name="confirm_password" />
                                                </div>
                                                <div class="form-group col-md-8"></div>
                                                <div class="form-group col-md-4">
                                                    <button type="submit" class="form-control btn btn-secondary">Save Password</button>
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
export default Changepassword;
