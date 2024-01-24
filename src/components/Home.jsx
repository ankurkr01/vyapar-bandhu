import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
           <div class="container-fluid">

<div class="row py-4">
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand mx-5" href="#" >
      <img src="/images/logo3.png" alt="logo" style={{width:"100px", height:"100px"}} />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent" style={{visibility:'visible'}}>
      <ul class="navbar-nav me-auto mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Packages</a>
        </li>
        <li class="nav-item">
          <Link to='/service' className='nav-link'>Services</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Templates</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <Link to='/admin' className='nav-link'>Admin</Link>
        </li>

      </ul>
      <form class="form-inline my-2 my-lg-0  ">
        <button class="btn btn-outline-success px-4 " type="submit" style={{marginRight:'4px'}}>Login</button>
        <button class="btn btn-success px-4" type="submit">SignUp</button>
      </form>
    </div>
  </nav>

</div>
{/* <!-- end navbar-->
<!-- start cartoon --> */}
{/* <div>  */}
  <div class="row" style={{padding: "0px 84px"}}>
    <div class="col-sm-12 col-md-6" style={{padding:"10px 0px"}}>
      <p class="fs-1">Your Business is Unique, come with us and  <br />
        <span class="fw-bold"> Together we will take it to the Next Level.</span>
      </p>
      <p class="fs-5">“Our Mission is to help you at every step to start and ”<br />
        grow your business so that you can do business in a simple way without any hesitation..
      </p>
      <button class="btn btn-success px-4">Get Started</button>

    </div>
    <div class="col-sm-12 col-md-6 ">
      <img src="/images/CARTOON.png" alt="cartoon" class="img-fluid" />
    </div>
  </div>
  {/* <!-- end cartooon -->
    <!-- start work --> */}
  <div>
    <h1 class="text-center mt-5">How it works?</h1>
    <div style={{height: "5px",width: "50px", backgroundColor: "aquamarine", position: "relative",left: "755px"}}>
    </div>
    <div>
      <div class="row text-center mt-5" style={{padding:" 0px 60px"}}>
        <div class="col-sm-12 col-md-4 px-5 py-3 card1">
          <img src="/images/Vector (2).png" class="img-fluid mt-2" style={{width:"50px", height:"50px"}} />
          <h3>Mission.</h3>
          <p>

            Vyapar Bandhu is an online business service solutions platform on PAN India basis for all entrepreneurs who have already been in any business or want to start a business. Our Mission is to help you at every step to start and grow your business so that you can do business in a simple way without any hesitation.
          </p>
        </div>
        <div class="col-sm-12 col-md-4 px-5 py-3 card1">
          <img src="/images/request.png" class="img-fluid mt-2" style={{width:"50px",height:"50px"}} />
          <h3>What we do .</h3>
          <p>We provide online services like Company Incorporation, LLP Incorporation, GST Registration and Return, ISO Certification, PASARA License, Import Export Code, MSME/ UDYAM Registration, Income Tax & TDS return and Consultancy, Accounting, Auditing, Compliance, EPF & ESIC registration and return, Environmental Clearance consultancy (CTE, CTO, CGWA permission), Factory License, Legal & Metrology License, FSSAI, Trademark, Copyright, Patent etc. and many more services</p>
        </div>
        <div class="col-sm-12 col-md-4 px-5 py-3 card1">
          <img src="/images/we-can-do-it.png" class="img-fluid mt-2" style={{width:"50px", height:"50px"}} />
          <h3 class="mt-2">Why us</h3>
          <p class="mt-2"> The word Vyapar Bandhu explains itself the objective of our organisation. The objective of establishing Vyapar Bandhu is to give handholding support to the Business from the very first step (Build/ Start the Business) and thereafter help in the continuous growth of the business with the help of the latest technology.</p>
        </div>
      </div>

    </div>
  </div>
  {/* <!--end work  -->
    <!-- important section -->
    <!-- <div>
        <h1 class="text-center">Why it's important?</h1>
        <div style="height: 5px; width: 50px; background-color: aquamarine; position: relative;left: 750px; ">
        </div>
        <p class="text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, error?
        </p>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aperiam
            voluptates eius ipsa cumque placeat?</p>

    </div> --> */}


  <div class="my-5 px-5">
    <h1 class="text-center"> It's  Services</h1>
    <div style={{height: "5px", width: "50px", backgroundColor: "aquamarine",position: "relative",left: "650px"}}></div>
    <div class="row py-5 " >
      <div class="col-sm-3 text-center py-3 border rounded mx-auto card2">
        <img src="/images/trademarks.png" alt="" style={{width:"40px",height:"40px"}} />
        <h3 class="mt-2">Trademark Registration.</h3>
        <p class="mt-2">Protect your businees Name/ Brand/ Logo etc.

        </p>
      </div>
      <div class="col-sm-3 text-center py-3 border rounded mx-auto card2">
        <img src="/images/registration.png" alt="" style={{width:"40px",height:"40px"}} />
        <h3>GST Registration </h3>
        <p>Necessity of every business is GSTIN

          GST Registration, Returns, Refund etc.</p>
      </div>
      <div class="col-sm-3 text-center py-3 border rounded mx-auto card2">
        <img src="/images/licensing.png" alt="" style={{width:"40px",height:"40px"}} />
        <h3>PF & ESIC</h3>
        <p>
          PF & ESIC - social; security for your workers

          PF & ESIC consultancy with Registration and returns.</p>
      </div>
    </div>
    <div class="row pb-5 " >
      <div class="col-sm-3 text-center py-3 border rounded mx-auto card2">
        <img src="/images/trademarks.png" alt="" style={{width:"40px",height:"40px"}} />
        <h3 class="mt-2">ISO Certification</h3>
        <p class="mt-2">
          Get International Recognized ISO certificate for your business

          ISO Certification, CE Mark, GMP, USFDA etc.</p>
      </div>
      <div class="col-sm-3 text-center py-3 border rounded mx-auto card2">
        <img src="/images/registration.png" alt="" style={{width:"40px",height:"40px"}} />
        <h3>FSSAI</h3>
        <p>
          Start your food business with the Fssai Registration or License

          FSSAI/ Food Registration or License.</p>
      </div>
      <div class="col-sm-3 text-center py-3 border rounded mx-auto card2">
        <img src="/images/licensing.png" alt="" style={{width:"40px",height:"40px"}} />
        <h3>ICAT/ ARAI/WMI</h3>
        <p>
          For vehicle manufacturing, parts and accessories etc.

          ICAT/ ARAI/WMI approval or certification</p>
      </div>
    </div>
  </div>

  <div class="row bg-light">
    <div class="col-sm-12 col-md-6 text-center py-5">
      <h1 class="m-5">Send out your enquiry<br />
      </h1>
      <button class="btn btn-success mb-5">Try IT</button>
    </div>
    <div class="col-sm-12 col-md-6">
      <img src="/images/Pattern.png" alt="patter" class="img-fluid float-end" />
    </div>
  </div>

  <div style={{padding: "0px 84px",}} class="my-5">
    <div class="my-5">
      <h1>About us</h1>
      <div style={{height: "5px", width: "50px",backgroundColor: "aquamarine",position: "relative",}}>
      </div>
    </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-9" style={{ marginLeft:'80px'}}>
        <p>Vyapar Bandhu is an online business service solutions platform on PAN India basis for<br/> all entrepreneurs who have already been in any business or want to start a business. <p>Our Mission is to help you at every step to start and grow your business so that you can do business in a simple way <br/> without any hesitation.
        



          We provide online services like Company Incorporation, LLP Incorporation, G<br/>ST Registration and Return, ISO Certification, PSARA License, Import Export Code, MSME/ UDYAM Registration, <br/>Income Tax & TDS return and Consultancy, Accounting, Auditing, Compliance, EPF & ESIC registration and return, <br/>Environmental Clearance consultancy (CTE, CTO, CGWA permission), Factory License, Legal & Metrology License, FSSAI, Trademark, Copyright, Patent etc. and many more services.
          </p>
          </p>

          </div>
            <div class="col-md-2" >
              <img src="/images/logo1.png" alt="about " class="img-fluid " />
            </div>



          <div class="row" >
            <div class="col-sm-12 col-md-4 p-5 text-light bg-success" style={{marginBottom:'10px',}}>
              <h1 style={{textAlign:"start"}} class="py-5">
                We all know that time is money... so stop wasting time, and save money with us!</h1>
            </div>
            <div class="col-sm-12 col-md-8 px-5">
              <div class="row mt-5 pe-5">
                <div class="col-sm-6">
                  <label>Fist Name</label>
                  <input type="text" placeholder="First Name" class="form-control mt-3"
                    style={{border:"none",borderRadius: "0px", borderBottom: "2px solid  #09A865"}} />
                </div>
                <div class="col-sm-6">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" class="form-control mt-3"
                    style={{border:"none", borderRadius: "0px", borderBottom: "2px solid  #09A865"}} />
                </div>
              </div>
              <div class="row mt-3 pe-5">
                <div class="col-sm-6">
                  <label>Mail</label>
                  <input type="email" placeholder="Mail" class="form-control mt-3"
                    style={{border:"none", borderRadius: "0px", borderBottom: "2px solid  #09A865"}} />
                </div>
                <div class="col-sm-6">
                  <label>Phone</label>
                  <input type="number" placeholder="Phone" class="form-control mt-3"
                    style={{border:"none", borderRadius: "0px", borderBottom: "2px solid  #09A865"}} />
                </div>
              </div>
              <div class="row mt-3 pe-5">
                <div class="col-sm-12">
                  <label>Message</label>
                  <textarea placeholder="Write your Message" class="form-control mt-3"
                    style={{border:"none", borderRadius: "0px", borderBottom: "2px solid  #09A865"}}></textarea>
                </div>
              </div>
              <button class="btn btn-success px-3 my-4 float-end me-5">Send Message</button>
            </div>
          </div>

          <div class="row text-light  py-5" style={{background:  "#FEB444"}}>
            <div class="col-sm-4 p-5">
              <h2 class="px-5">Need help with <br />anything?</h2>
              <h3 class="px-5">
                <span class="ms-2"><i class="fa-brands fa-square-twitter"></i></span>
                <span class="ms-2"><i class="fa-brands fa-linkedin"></i></span>
              </h3>
            </div>
            <div class="col-sm-2 p-5">
              <h3>Home</h3>
              <p>What is it</p>
              <p>Why it's important</p>
              <p>Pricing</p>
            </div>
            <div class="col-sm-2 p-5">
              <h3>Company</h3>
              <p>About</p>
              <p>Blog</p>
              <p>Careers</p>
            </div>
            <div class="col-sm-2 p-5">
              <h3>Legal</h3>
              <p>Terms & Conditions </p>
              <p>Privacy & Policy</p>
              <p>Contact</p>
            </div>
            <div class="col-sm-2 p-5">
              <h3>Help</h3>
              <p>FAQs</p>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home