import React from 'react'

export const Loginwithfacebook = () => {
  return (
    <div>
            <div class="login-social-media border pl-4 pr-4 pb-4 pt-0 rounded mt-5">
              <div class="mb-4 d-block text-center"><b class="bg-white pl-2 pr-2 mt-3 d-block">Login or Sign Up with</b></div>
              <form class="row">
                <div class="col-sm-12">
                  <div class="fb-box"> 
                    <a href="javascript:void(0);" onclick="fbLogin();" id="fbLink" class="btn btn-skew bg-facebook d-block mb-3 text-white"><span><i class="fa fa-facebook-f"></i>Login with Facebook</span></a> </div>
                </div>
              </form>
            </div>
    </div>
  )
}
