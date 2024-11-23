import About from "../static/images/about.png";

import "./AboutUs.css";

const AboutUs = ()=>{

    return(
        <>
            <div className="container section_wrap">
                <div className="row">

                <div className="col-md-5">

                    <div className="about_left_wrap">
                    <div className="about_left_inside">
                        
                        <div className="about_left_img">
                            <img src={About}/>

                        </div>

                        </div>

                    </div>

                    </div>
                    <div className="col-md-7 py-5">

                        <span className="section_heading">About Us</span>

                        <p className="section_subheading">Best Marketing Agency</p>

                        <p className="section_content">
                        Welcome to WebSavvy – where creativity meets strategy in the world of digital marketing.

                        At WebSavvy, we are passionate about helping businesses grow and thrive in the digital age. 
                        With years of experience in the industry, we specialize in delivering tailored digital marketing solutions 
                        that drive measurable results.
                        </p>
                        <div className="d-flex justify-content-between section_content">
                        <ul>
                            <li>Results-Driven</li>
                            
                             <li> Transparency</li>
                             
                             <li>Customer-Centric</li>
                        </ul>
                        <ul>
                          
                            <li> Tailored Solutions</li>
                           
                             <li>Experienced Team</li>
                             
                        </ul>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )

}

export default AboutUs;