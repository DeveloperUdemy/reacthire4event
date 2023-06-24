import React, { useEffect, Fragment } from 'react';
function Panyourtrip ()  {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <Fragment>
<section class="page-title page-title-bottom bg-holder bg-overlay-black-50" style={{backgroundImage: 'url("https://hire4event.com/apppanel/assets/primaryimage/team-background-image.jpg")'}}>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10 text-center">
        <h1 class="text-white">Plan A Destination Wedding / Event </h1>
        <p class="text-white">We are an Event Management Company which provides Corporate and Institutional Tour Planning and Packages. We have a list of great locations and activities to energise and refresh the tour participants, which is the most wanted term from an Outdoor tour. The arrangements are great and management is greatest at the most affordable prices.</p>
      </div>
    </div>
  </div>
</section>

<section class="space-ptb">
 
  <div class="container stepwizard1">
      <div class="col-md-10 offset-md-1">
          
             
        <div class="stepwizard">
          <div class="stepwizard-row setup-panel">
            <div class="stepwizard-step col-md-2"> <a href="#step-1" type="button" class="btn btn-success btn-circle">1</a>
              <p><small>NUMBER <br/>
                OF PERSONS</small></p>
            </div>
            <div class="stepwizard-step col-md-2"> <a href="#step-2" type="button" class="btn btn-default btn-circle" disabled="disabled">2</a>
              <p><small>TRIP<br/>
                TYPE</small></p>
            </div>
            <div class="stepwizard-step col-md-2"> <a href="#step-3" type="button" class="btn btn-default btn-circle" disabled="disabled">3</a>
              <p><small>SELECT <br/>
                LOCATION</small></p>
            </div>
            <div class="stepwizard-step col-md-2"> <a href="#step-4" type="button" class="btn btn-default btn-circle" disabled="disabled">4</a>
              <p><small>SELECT<br/>
                DURATION</small></p>
            </div>
            <div class="stepwizard-step col-md-2"> <a href="#step-5" type="button" class="btn btn-default btn-circle" disabled="disabled">5</a>
              <p><small>Additional<br/>
                Activities</small></p>
            </div>
            <div class="stepwizard-step col-md-2"> <a href="#step-6" type="button" class="btn btn-default btn-circle" disabled="disabled">6</a>
              <p><small>PERSONAL<br/>
                DETIALS</small></p>
            </div>
          </div>
        </div>
        <form role="form" action="https://hire4event.com/PlanTripProcess.php" method="post">
          <div class="panel panel-primary setup-content" id="step-1">
            <div class="panel-heading">
              <h3 class="panel-title">Number of Persons</h3>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <label class="control-label">Number of person</label>
                <select class="form-control" name="numberperson" required>
                  <option value="">Select Number of person</option>
                  <option value="10 to 25">10 to 25</option>
                  <option value="25 to 50">25 to 50</option>
                  <option value="50 to 100">50 to 100</option>
                  <option value="More than 100">More than 100</option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-primary nextBtn" type="button">Next</button>
              </div>
            </div>
          </div>
          <div class="panel panel-primary setup-content" id="step-2">
            <div class="panel-heading">
              <h3 class="panel-title">Trip Type</h3>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <label class="control-label">Trip Type</label>
                <select class="form-control" name="triptype">
                  <option value="">Select Trip Type</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Friends & Family">Friends & Family</option>
                  <option value="Institutional">Institutional</option>
                  <option value="Destination Wedding">Destination Wedding</option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-primary nextBtn" type="button">Next</button>
              </div>
            </div>
          </div>
          <div class="panel panel-primary setup-content" id="step-3">
            <div class="panel-heading">
              <h3 class="panel-title">Select Location</h3>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <label class="control-label">Select Location</label>
                <select class="form-control" name="location">
                  <option value="">Select Location</option>
                  <option value="AGRA"> AGRA</option>
                  <option value="GOA"> GOA</option>
                  <option value="SHIMLA"> SHIMLA</option>
                  <option value="MANALI"> MANALI</option>
                  <option value="RISHIKESH/HARIDWAR"> RISHIKESH/HARIDWAR</option>
                  <option value="NAINITAL"> NAINITAL</option>
                  <option value="JIM CORBETT/ RAJAJI NATIONAL PARK"> JIM CORBETT/ RAJAJI NATIONAL PARK</option>
                  <option value="JAIPUR"> JAIPUR</option>
                  <option value="JAISALMER"> JAISALMER</option>
                  <option value="MUSSORIE"> MUSSORIE</option>
                  <option value="RANIKHET"> RANIKHET</option>
                  <option value="OTHERS"> OTHERS</option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-primary nextBtn" type="button">Next</button>
              </div>
            </div>
          </div>
          <div class="panel panel-primary setup-content" id="step-4">
            <div class="panel-heading">
              <h3 class="panel-title">Duration</h3>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <label class="control-label">Select Duration</label>
                <select class="form-control" name="duration">
                  <option value="">Select Duration</option>
                  <option value="1 Day">1 Day</option>
                  <option value="1N-2D">1N-2D</option>
                  <option value="2N-3D">2N-3D</option>
                  <option value="3N-4D"> 3N-4D</option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-primary nextBtn" type="button">Next</button>
              </div>
            </div>
          </div>
          <div class="panel panel-primary setup-content" id="step-5">
            <div class="panel-heading">
              <h3 class="panel-title">Additional Activities</h3>
            </div>
            <div class="panel-body">
              <div class="form-group">
                
    <p style={{marginBottom: "5px"}}><input type="checkbox" class="check" name="Activities[]" value="Team Building" /> <span>Team Building</span></p>
    <p style={{marginBottom: "5px"}}><input type="checkbox" class="check" name="Activities[]" value="Adventure" /> <span>Adventure</span></p>
   <p style={{marginBottom: "5px"}}><input type="checkbox" class="check" name="Activities[]" value="Entertainment Shows" /> <span>Entertainment Shows</span></p>
   <p style={{marginBottom: "5px"}}><input type="checkbox" class="check" name="Activities[]" value="Wedding decor" /> <span>Wedding decor</span></p>
   <p style={{marginBottom: "5px"}}><input type="checkbox" class="check" name="Activities[]" value="Artist" /> <span>Artist</span></p>
      <p style={{marginBottom: "5px"}}><input type="checkbox" class="check" name="Activities[]" value="None" /> <span>None</span></p>
    <p style={{marginBottom: "5px"}}><input type="checkbox" class="check" name="Activities[]" value="Others" /> <span>Others</span></p>
    
                
              </div>
              <div class="form-group">
                <button class="btn btn-primary nextBtn" type="button">Next</button>
              </div>
            </div>
          </div>
          <div class="panel panel-primary setup-content" id="step-6">
            <div class="panel-heading">
              <h3 class="panel-title">Personal Details</h3>
            </div>
            <div class="panel-body">
              <div class="form-group has-error">
                    <label class="control-label">Name</label>
                    <input maxlength="200" type="text" name="username" required="required" class="form-control" placeholder="Enter Name" />
                </div>
                <div class="form-group has-error">
                    <label class="control-label">Email Id</label>
                    <input maxlength="200" type="text" name="email" required="required" class="form-control" placeholder="Enter Email Id" />
                </div>
                <div class="form-group has-error">
                    <label class="control-label">Mobile</label>
                    <input maxlength="200" type="text" name="mobile" required="required" class="form-control" placeholder="Enter Mobile Number" />
                </div>
                <div class="form-group has-error">
                    <label class="control-label">Message</label>
                    <textarea name="message" cols="" rows="" class="form-control" placeholder="Enter Message"></textarea>
                </div>
                
              <div class="form-group">
                <button class="btn btn-success" type="submit" name="plan-your-trip">Finish!</button>
              </div>
              
            </div>
          </div>
        </form>
      </div>
    
    
 
  </div>
</section>


</Fragment>
)
}
export default Panyourtrip;
